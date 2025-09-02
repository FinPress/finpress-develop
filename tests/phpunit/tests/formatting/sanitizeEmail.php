<?php

/**
 * @group formatting
 *
 * @covers ::sanitize_email
 */
class Tests_Formatting_SanitizeEmail extends WP_UnitTestCase {
	public function data_for_sanitation() {
		return array(
			'shorter than 6 characters' => array( 'a@b', '' ),
			'contains no @'             => array( 'ab', '' ),
			'just a TLD'                => array( 'abc@com', '' ),
			'plain'                     => array( 'abc@example.com', 'abc@example.com' ),
		);
	}

	/**
	* @ticket 31992
	* @dataProvider data_for_sanitation
	*/

	public function test_returns_stripped_email_address( $address, $expected ) {
		$this->assertSame( sanitize_email( $address ), $expected );
	}
}
