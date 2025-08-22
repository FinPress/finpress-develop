<?php

if ( extension_loaded( 'mbstring' ) ) :
	/**
	 * Determines if a given byte string represents a valid UTF-8 encoding.
	 *
	 * Note that it’s unlikely for non-UTF-8 data to validate as UTF-8, but
	 * it is still possible. Many texts are simultaneously valid UTF-8,
	 * valid US-ASCII, and valid ISO-8859-1 (`latin1`).
	 *
	 * Example:
	 *
	 *     true === wp_is_valid_utf8( '' );
	 *     true === wp_is_valid_utf8( 'just a test' );
	 *     true === wp_is_valid_utf8( "\xE2\x9C\x8F" );    // Pencil, U+270F.
	 *     true === wp_is_valid_utf8( "\u{270F}" );        // Pencil, U+270F.
	 *     true === wp_is_valid_utf8( '✏' );              // Pencil, U+270F.
	 *
	 *     false === wp_is_valid_utf8( "just \xC0 test" ); // Invalid bytes.
	 *     false === wp_is_valid_utf8( "\xE2\x9C" );       // Invalid/incomplete sequences.
	 *     false === wp_is_valid_utf8( "\xC1\xBF" );       // Overlong sequences.
	 *     false === wp_is_valid_utf8( "\xED\xB0\x80" );   // Surrogate halves.
	 *     false === wp_is_valid_utf8( "B\xFCch" );        // ISO-8859-1 high-bytes.
	 *                                                     // E.g. The “ü” in ISO-8859-1 is a single byte 0xFC,
	 *                                                     // but in UTF-8 is the two-byte sequence 0xC3 0xBC.
	 *
	 * @since 6.9.0
	 *
	 * @param string $bytes String which might contain text encoded as UTF-8.
	 * @return bool Whether the provided bytes can decode as valid UTF-8.
	 */
	function wp_is_valid_utf8( string $bytes ): bool {
		return mb_check_encoding( $bytes, 'UTF-8' );
	}
else:
	/**
	 * Fallback function for validating UTF-8.
	 *
	 * @ignore
	 * @private
	 *
	 * @since 6.9.0
	 */
	function wp_is_valid_utf8( string $string ): bool {
		return _wp_is_valid_utf8_fallback( $string );
	}
endif;

if (
	extension_loaded( 'mbstring' ) &&
	// Maximal subpart substitution introduced by php/php-src@04e59c916f12b322ac55f22314e31bd0176d01cb.
	version_compare( PHP_VERSION, '8.1.6', '>=' )
) :
	/**
	 * Replaces ill-formed UTF-8 byte sequences with the Unicode Replacement Character.
	 *
	 * While it’s usually safe to ignore invalid UTF-8, there are cases where it’s necessary
	 * to work only with a valid string, such as when producing XML or feeding data into a
	 * large language model. In these cases, calling this function will produce such a valid
	 * string where the invalid segments are replaced with the Unicode Replacement Character.
	 *
	 * Replacement follows the “maximal subpart” algorithm which provides more-secure and
	 * interoperable strings than other algorithms. This can lead to sequences of multiple
	 * replacement characters in a row.
	 *
	 * Note! The Unicode Replacement Character is itself a Unicode character. It will not
	 * be possible to determine if its purpose in a string is intentional or if it comes
	 * as a result of replacing invalid bytes.
	 *
	 * Example:
	 *
	 *     // Valid strings come through unchanged.
	 *     'test' === wp_scrub_utf8( 'test' );
	 *
	 *     // Invalid sequences of bytes are replaced.
	 *     $invalid = "the byte \xC0 is never allowed in a UTF-8 string.";
	 *     "the byte \u{FFFD} is never allowed in a UTF-8 string." === wp_scrub_utf8( $invalid, true );
	 *     'the byte � is never allowed in a UTF-8 string.' === wp_scrub_utf8( $invalid, true );
	 *
	 *     // Maximal subparts are replaced individually.
	 *     '.�.' === wp_scrub_utf8( ".\xC0." );              // C0 is never valid.
	 *     '.�.' === wp_scrub_utf8( ".\xE2\x8C." );          // Missing A3 at end.
	 *     '.��.' === wp_scrub_utf8( ".\xE2\x8C\xE2\x8C." ); // Maximal subparts replaced separately.
	 *     '.��.' === wp_scrub_utf8( ".\xC1\xBF." );         // Overlong sequence.
	 *     '.���.' === wp_scrub_utf8( ".\xED\xA0\x80." );    // Surrogate half.
	 *
	 * @see https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-5/#G40630
	 *
	 * @since 6.9.0
	 *
	 * @param string $text String which is assumed to be UTF-8 but may contain invalid sequences of bytes.
	 * @return string Input text with invalid sequences of bytes replaced with the Unicode replacement character.
	 */
	function wp_scrub_utf8( $text ) {
		/*
		 * While it looks like setting the substitute character could fail,
		 * the internal PHP code will never fail when provided a valid
		 * code point as a number. In this case, there’s no need to check
		 * its return value to see if it succeeded.
		 */
		$prev_replacement_character = mb_substitute_character();
		mb_substitute_character( 0xFFFD );
		$scrubbed = mb_scrub( $text, 'UTF-8' );
		mb_substitute_character( $prev_replacement_character );

		return $scrubbed;
	}
else:
	/**
	 * Fallback function for scrubbing UTF-8.
	 *
	 * @ignore
	 * @private
	 *
	 * @since 6.9.0
	 */
	function wp_scrub_utf8( $text ) {
		return _wp_scrub_utf8_fallback( $text );
	}
endif;

/**
 * Iterate through a string returning lengths of valid or invalid byte spans.
 *
 * This is not likely an often-needed function, but it can be used
 * to build interesting views of a string containing invalid bytes.
 *
 * Example:
 *
 *     $text = "test\x90wp\E2\x80\xC0test";
 *
 *     $chunks = iterator_to_array( wp_utf8_chunks( $text ) );
 *     array( 'test', "\x90", 'wp', "\xE2\x80", "\xC0", 'test' ) === $chunks;
 *
 *     $is_valid = false;
 *     foreach ( wp_utf8_chunks( $text, $is_valid ) as $chunk ) {
 *         if ( $is_valid ) {
 *             echo $chunk;
 *         } else {
 *             $bytes = implode( ' ', array_map( 'bin2hex', str_split( $chunk ) ) );
 *             echo "({$bytes})";
 *         }
 *     }
 *     // test(90)wp(e2 80)(c0)test
 *
 * @param string    $text     Iterate through this string.
 * @param bool|null $is_valid Optional. If passed, set to whether the currently yielded
 *                            chunk is a valid span of UTF-8 bytes.
 * @return Generator When positive, indicates valid bytes of given length.
 *                   When negative, indicates invalid bytes of given length.
 */
function wp_utf8_chunks( string $text, ?bool &$is_valid = null ): Generator {
	$at             = 0;
	$was_at         = 0;
	$end            = strlen( $text );
	$invalid_length = 0;

	while ( $at < $end ) {
		_wp_scan_utf8( $text, $at, $invalid_length );

		if ( $at > $was_at ) {
			$is_valid = true;
			yield substr( $text, $was_at, $at - $was_at );
		}

		if ( $invalid_length > 0 ) {
			$is_valid = false;
			yield substr( $text, $at, $invalid_length );
		}

		$at     += $invalid_length;
		$was_at  = $at;
	}
}
