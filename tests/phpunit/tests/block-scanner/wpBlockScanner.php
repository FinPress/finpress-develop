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
	public function test_rejects_null_source_text() {
		$this->assertNull(
			WP_Block_Scanner::create( null ),
			'Should have rejected null inputs.'
		);
	}
}
