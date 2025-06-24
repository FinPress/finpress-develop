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
}
