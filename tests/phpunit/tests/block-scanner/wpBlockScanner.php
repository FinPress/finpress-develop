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
	 * Verifies that corrupted block delimiters are interpreted as HTML comments.
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
			'Shortest HTML comment'   => array( '<!-->' ),
			'Span-of-dashes'          => array( '<!------>' ),
			'No spaces, minimal info' => array( '<!--wp:block-->' ),
			'No spaces, empty JSON'   => array( '<!--wp:block{}-->' ),
		);
	}
}
