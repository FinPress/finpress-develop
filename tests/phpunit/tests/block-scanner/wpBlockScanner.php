<?php
/**
 * Unit tests covering WP_Block_Scanner functionality.
 *
 * @package WordPress
 * @subpackage HTML-API
 *
 * @since {WP_VERSION}
 *
 * @group block-scanner
 *
 * @coversDefaultClass WP_Block_Scanner
 */
class Tests_Blocks_BlockScanner_WP_Block_Scanner extends WP_UnitTestCase {
	/**
	 * Verifies that the creator function rejects null inputs.
	 * Calling code should safe-default to an empty string.
	 *
	 * @ticket {TICKET_NUMBER}
	 *
	 * @expectedIncorrectUsage WP_Block_Scanner::create
	 */
	public function test_rejects_null_source_text() {
		$this->assertNull(
			WP_Block_Scanner::create( null ),
			'Should have rejected null inputs.'
		);
	}

	/**
	 * Verifies that the creator function rejects non-string inputs.
	 * Calling code should only send strings.
	 *
	 * @ticket {TICKET_NUMBER}
	 *
	 * @dataProvider data_non_string_values
	 *
	 * @expectedIncorrectUsage WP_Block_Scanner::create
	 */
	public function test_rejects_non_string_source_texts( $input ) {
		$this->assertNull(
			WP_Block_Scanner::create( $input ),
			'Should have rejected non-string inputs.'
		);
	}

	/**
	 * Data provider.
	 *
	 * @return array[]
	 */
	public static function data_non_string_values() {
		return array(
			'true'            => array( true ),
			'false'           => array( false ),
			'int(0)'          => array( 0 ),
			'int(13458)'      => array( 13458 ),
			'float(1e3)'      => array( 1e3 ),
			'array[string]'   => array( array( 'one', 'two', 'three' ) ),
			'object'          => array( (object) array( 'value' => 'not-a-string' ) ),
			'anonymous class' => array(
				new class {
					public function __toString() {
						return 'test';
					}
				},
			),
		);
	}

	/**
	 * Verifies that a block scanner will be created for an empty string.
	 *
	 * This test is foundational for many other to follow, so while it’s not
	 * interesting in and of itself, in passing it removes trivial assertions
	 * from later and more-interesting tests.
	 *
	 * @ticket {TICKET_NUMBER}
	 */
	public function test_creates_with_empty_string() {
		$scanner = WP_Block_Scanner::create( '' );
		$this->assertInstanceOf(
			'WP_Block_Scanner',
			$scanner,
			'Failed to create the Block Scanner object for an empty string.'
		);
	}

	/**
	 * Verifies that no block delimiters are found in an empty string.
	 *
	 * @ticket {TICKET_NUMBER}
	 */
	public function test_finds_no_block_delimiters_for_empty_string() {
		$scanner = WP_Block_Scanner::create( '' );

		$this->assertFalse(
			$scanner->next_delimiter(),
			'Should not have found any delimiters.'
		);
	}

	/**
	 * Verifies that freeform delimiters are found when requested for
	 * posts with no block content.
	 *
	 * @ticket {TICKET_NUMBER}
	 */
	public function test_finds_freeform_delimiters_in_post_without_blocks() {
		$scanner = WP_Block_Scanner::create( 'This is <em>non-block</em> content.' );

		$this->assertTrue(
			$scanner->next_delimiter( 'visit-freeform' ),
			'Should have found the start of a freeform block but found nothing.'
		);

		$this->assertSame(
			WP_Block_Scanner::OPENER,
			$scanner->get_delimiter_type(),
			'Should have found an opening block delimiter.'
		);

		$this->assertSame(
			'core/freeform',
			$scanner->get_block_type(),
			'Should have found the start of a freeform block.'
		);

		$this->assertTrue(
			$scanner->next_delimiter( 'visit-freeform' ),
			'Should have found the end of a freeform block but found nothing.'
		);

		$this->assertSame(
			WP_Block_Scanner::CLOSER,
			$scanner->get_delimiter_type(),
			'Should have found a block closer.'
		);

		$this->assertSame(
			'core/freeform',
			$scanner->get_block_type(),
			'Should have found a freeform block closer.'
		);
	}

	/**
	 * Verifies that a post containing a single void block finds the block and nothing else.
	 *
	 * @ticket {TICKET_NUMBER}
	 */
	public function test_finds_post_of_void_block() {
		$scanner = WP_Block_Scanner::create( '<!-- wp:recent-posts /-->' );

		$this->assertTrue(
			$scanner->next_delimiter(),
			'Should have found a block delimiter but found nothing.'
		);

		$this->assertSame(
			WP_Block_Scanner::VOID,
			$scanner->get_delimiter_type(),
			'Should have found a void block delimiter.'
		);

		$this->assertSame(
			'core/recent-posts',
			$scanner->get_block_type(),
			'Should have found a core/recent-posts void block.'
		);
	}

	/**
	 * Verifies that a post containing a single basic block finds the block opener and closer.
	 *
	 * @ticket {TICKET_NUMBER}
	 */
	public function test_finds_open_and_close_of_post_with_basic_block() {
		$scanner = WP_Block_Scanner::create( '<!-- wp:paragraph --><p>Content</p><!-- /wp:paragraph -->' );

		$this->assertTrue(
			$scanner->next_delimiter(),
			'Should have found an opening block delimiter but found nothing.'
		);

		$this->assertSame(
			WP_Block_Scanner::OPENER,
			$scanner->get_delimiter_type(),
			'Should have found an opening block delimiter.'
		);

		$this->assertTrue(
			$scanner->opens_block( 'core/paragraph' ),
			'Should have found an opening core/paragraph delimiter.'
		);

		$this->assertTrue(
			$scanner->next_delimiter(),
			'Should have found a closing block delimiter but found nothing.'
		);

		$this->assertSame(
			WP_Block_Scanner::CLOSER,
			$scanner->get_delimiter_type(),
			'Should have found a closing block delimiter.'
		);

		$this->assertSame(
			'core/paragraph',
			$scanner->get_block_type(),
			'Should have found a closing paragraph delimiter.'
		);
	}

	/**
	 * Verifies that the parser refuses to parse the end of a document
	 * which partially contains what could be a block delimiter.
	 *
	 * @ticket {TICKET_NUMBER}
	 *
	 * @dataProvider data_partial_delimiter_endings
	 *
	 * @param string $html Input ending in a partial block delimiter.
	 */
	public function test_rejects_on_incomplete_inputs( $html ) {
		$scanner = WP_Block_Scanner::create( "<!-- wp:test/canary /-->{$html}" );

		$scanner->next_delimiter();
		$this->assertTrue(
			$scanner->opens_block( 'test/canary' ),
			'Should have found the test/canary block: check test code setup.'
		);

		$this->assertFalse(
			$scanner->next_delimiter(),
			'Should have failed to find any blocks after the test canary.'
		);

		$this->assertSame(
			WP_Block_Scanner::INCOMPLETE_INPUT,
			$scanner->get_last_error(),
			'Should have bailed because the input was incomplete.'
		);
	}

	/**
	 * Data provider.
	 *
	 * @return array[]
	 */
	public static function data_partial_delimiter_endings() {
		$tests = array();

		$delimiters = array(
			'opener' => '<!-- wp:core/paragraph {} -->',
			'void'   => '<!-- wp:my-plugin/mark /-->',
			'closer' => '<!-- /wp:group -->',
		);

		foreach ( $delimiters as $kind => $delimiter ) {
			for ( $i = strlen( $delimiter ) - 1; $i > 0; $i-- ) {
				$partial                      = substr( $delimiter, 0, $i );
				$tests["{$kind}: {$partial}"] = array( $partial );
			}
		}

		return $tests;
	}

	/**
	 * Verifies that it’s not possible to proceed after reaching an error.
	 *
	 * @ticket {TICKET_NUMBER}
	 */
	public function test_rejects_once_errored_out() {
		$scanner = WP_Block_Scanner::create( "<!-- wp:incomplete" );

		$this->assertFalse(
			$scanner->next_delimiter(),
			"Shoudn’t have found any delimiters but found a '{$scanner->get_block_type()}'."
		);

		$this->assertSame(
			WP_Block_Scanner::INCOMPLETE_INPUT,
			$scanner->get_last_error(),
			'Should have reported incomplete input.'
		);

		$this->assertFalse(
			$scanner->next_delimiter(),
			'Should have failed to proceed after encountering an error.'
		);
	}

	/**
	 * Verifies that corrupted block delimiters are not matched as delimiters.
	 *
	 * @ticket {TICKET_NUMBER}
	 *
	 * @dataProvider data_invalid_block_delimiters_as_html_comments
	 *
	 * @param string $html Input containing an invalid block delimiter.
	 */
	public function test_rejects_invalid_block_comment_delimiters_as_html_comments( $html ) {
		$scanner = WP_Block_Scanner::create( "<!-- wp:tests/before /-->{$html}<!-- wp:tests/after /-->" );

		$scanner->next_delimiter();
		$this->assertTrue(
			$scanner->opens_block( 'tests/before' ),
			"Should have found the 'tests/before' block before the invalid block delimiter but found a '{$scanner->get_block_type()}' instead."
		);

		$scanner->next_delimiter( 'visit-freeform' );
		$this->assertTrue(
			$scanner->opens_block( 'freeform' ),
			"Should have found the malform block delimiter as an HTML comment, but found a '{$scanner->get_block_type()}' instead."
		);

		$scanner->next_delimiter();
		$this->assertTrue(
			$scanner->opens_block( 'tests/after' ),
			"Should have found the 'tests/after' block after the invalid block delimiter but found a '{$scanner->get_block_type()}' instead."
		);
	}

	/**
	 * Data provider.
	 *
	 * @return array[]
	 */
	public static function data_invalid_block_delimiters_as_html_comments() {
		return array(
			'Shortest HTML comment'         => array( '<!-->' ),
			'Span-of-dashes'                => array( '<!------>' ),
			'Empty HTML comment'            => array( '<!-- -->' ),
			'HTML comment with exclamation' => array( '<!-- --! is not the end -->' ),
//			'Unterminated HTML comment'     => array( '<!-- this is not a block' ),
			'No spaces, minimal info'       => array( '<!--wp:block-->' ),
			'No spaces, minimal info, void' => array( '<!--wp:block/-->' ),
			'No spaces, empty JSON'         => array( '<!--wp:block{}-->' ),
			'No spaces, empty JSON, void'   => array( '<!--wp:block{}/-->' ),
			'No space before wp:'           => array( '<!--wp:block -->' ),
			'No space after name'           => array( '<!-- wp:block-->' ),
			'No space before JSON'          => array( '<!-- wp:block{} -->' ),
			'No space after JSON'           => array( '<!-- wp:block {}-->' ),
			'Missing wp:'                   => array( '<!-- core/paragraph -->' ),
			'Malformed wp:'                 => array( '<!-- wordpress:core/paragraph -->' ),
			'Malformed block namespace'     => array( '<!-- wp:3more/block -->' ),
			'Malformed block name'          => array( '<!-- wp:core/paragraph/variation -->' ),
			'Invalid block name characters' => array( '<!-- wp:core/32-block -->' ),
		);
	}

	/**
	 * Verifies that block delimiters are matched even when the JSON attributes
	 * are malformed and cannot be parsed.
	 *
	 * @ticket {TICKET_NUMBER}
	 *
	 * @dataProvider data_invalid_block_json
	 *
	 * @param string $invalid_block_json improperly-encoded JSON document, or JSON not valid for a block’s attributes.
	 */
	public function test_matches_block_with_invalid_json( $invalid_block_json )  {
		$scanner = WP_Block_Scanner::create( "<!-- wp:block {$invalid_block_json} -->" );

		$scanner->next_delimiter();
		$this->assertTrue(
			$scanner->opens_block( 'core/block' ),
			'Should have found the test block but found nothing instead.'
		);

		$parsed_data          = $scanner->allocate_and_return_parsed_attributes();
		$exported_parsed_data = var_export( $parsed_data, true );
		$exported_parsed_data = self::unhide_whitespace( $exported_parsed_data );
		$this->assertNull(
			$parsed_data,
			"Should have failed to parse JSON attributes, but found '{$exported_parsed_data}' instead."
		);

		$this->assertNotNull(
			$scanner->get_last_json_error(),
			'Should have reported an error when attempting to parse JSON attributes.'
		);
	}

	/**
	 * Data provider.
	 *
	 * @return array[]
	 */
	public static function data_invalid_block_json() {
		return array(
			'Extra closing }'  => array( '{}}' ),
			'Empty list'       => array( '[]' ),
			'Non-empty list'   => array( '[1, 2, 3]' ),
			'Nested list'      => array( '[{"type": "broken"}]' ),
			'True'             => array( 'true' ),
			'False'            => array( 'false' ),
			'null'             => array( 'null' ),
			'Number (36)'      => array( '36' ),
			'Number (3.141e0)' => array( '3.141e0' ),
			'Unquoted string'  => array( '{"name": block}' ),
			'Letters'          => array( 'not_even_json' ),
		);
	}

	/**
	 * Verifies that a delimiter with unterminated JSON is not treated as a delimiter.
	 *
	 * @ticket {TICKET_NUMBER}
	 */
	public function test_does_not_match_block_with_unterminated_json() {
		$scanner = WP_Block_Scanner::create( '<!-- wp:block {"has_stuff": true -->' );

		$this->assertFalse(
			$scanner->next_delimiter(),
			"Should have failed to find block delimiter but found '{$scanner->get_block_type()}' instead."
		);
	}

	/**
	 * Verifies that a delimiter with content after the JSON attributes is not treated as a delimiter.
	 *
	 * @ticket {TICKET_NUMBER}
	 */
	public function test_does_not_match_block_with_content_after_json() {
		$scanner = WP_Block_Scanner::create( '<!-- wp:block {"has_stuff": true} "not allowed" -->' );

		$this->assertFalse(
			$scanner->next_delimiter(),
			"Should have failed to find block delimiter but found '{$scanner->get_block_type()}' instead."
		);
	}

	/**
	 * Verifies that the appropriate block delimiter type is reported for a matched delimiter.
	 *
	 * @ticket {TICKET_NUMBER}
	 *
	 * @dataProvider data_delimiters_and_their_types
	 *
	 * @param string $html           Contains a single block delimiter.
	 * @param string $delimiter_type Expected type of delimiter.
	 */
	public function test_reports_proper_delimiter_type( $html, $delimiter_type ) {
		$scanner = WP_Block_Scanner::create( $html );

		$this->assertTrue(
			$scanner->next_delimiter(),
			'Should have found test block delimiter but found nothing instead.'
		);

		$this->assertSame(
			$delimiter_type,
			$scanner->get_delimiter_type(),
			'Failed to match the expected delimiter type (opener/closer/void)'
		);
	}

	/**
	 * Data provider.
	 *
	 * @return array[]
	 */
	public static function data_delimiters_and_their_types() {
		return array(
			'Void'              => array( '<!-- wp:void /-->', WP_Block_Scanner::VOID ),
			'Void, full name'   => array( '<!-- wp:core/void /-->', WP_Block_Scanner::VOID ),
			'Opener'            => array( '<!-- wp:paragraph -->', WP_Block_Scanner::OPENER ),
			'Opener, full name' => array( '<!-- wp:core/list -->', WP_Block_Scanner::OPENER ),
			'Closer'            => array( '<!-- /wp:paragraph -->', WP_Block_Scanner::CLOSER ),
			'Closer, full name' => array( '<!-- /wp:core/list -->', WP_Block_Scanner::CLOSER ),
		);
	}

	/**
	 * Verifies that the appropriate block type is reported for a matched delimiter.
	 *
	 * @ticket {TICKET_NUMBER}
	 *
	 * @dataProvider data_delimiters_and_their_block_types
	 */
	public function test_reports_proper_block_type( $html, $block_type ) {
		$scanner = WP_Block_Scanner::create( $html );

		$this->assertTrue(
			$scanner->next_delimiter(),
			'Should have found test block delimiter but found nothing instead.'
		);

		$this->assertSame(
			$block_type,
			$scanner->get_block_type(),
			'Should have found the expected block type.'
		);
	}

	/**
	 * Data provider.
	 *
	 * @return array[]
	 */
	public static function data_delimiters_and_their_block_types() {
		return array(
			'Opener, core/group' => array( '<!-- wp:core/group -->', 'core/group' ),
			'Void, core/group'   => array( '<!-- wp:core/group /-->', 'core/group' ),
			'Closer, core/group' => array( '<!-- /wp:core/group -->', 'core/group' ),
			'Opener, group'      => array( '<!-- wp:group -->', 'core/group' ),
			'Void, group'        => array( '<!-- wp:group /-->', 'core/group' ),
			'Closer, group'      => array( '<!-- /wp:group -->', 'core/group' ),
			'Opener, my/group'   => array( '<!-- wp:my/group -->', 'my/group' ),
			'Void, thy/group'    => array( '<!-- wp:thy/group /-->', 'thy/group' ),
			'Closer, the5/group' => array( '<!-- /wp:the-5/group -->', 'the-5/group' ),
		);
	}

	//
	// Test helpers.
	//

	/**
	 * Replaces whitespace in a string with visual indicators for easier debugging.
	 *
	 * The definition of “whitespace” here is loose and intended for debugging tests.
	 * It’s okay to expand for more complete replacement, for example to replace all
	 * graphemes considered whitespace by Unicode, but not required unless it’s
	 * essential for tests.
	 *
	 * Concerning HTML and the block parser only the HTML whitespace is relevant.
	 *
	 * @param string $string Any input, potentially containing whitespace characters.
	 * @return string The input with whitespace replaced by visual placeholders.
	 */
	private static function unhide_whitespace( $string ) {
		return str_replace(
			array( ' ', "\t", "\r", "\f", "\n" ),
			array( '␠', '␉', '␍', '␌', '␤' ),
			$string
		);
	}
}
