<?php

/**
 * @group formatting
 *
 * @covers ::antispambot
 */
class Tests_Formatting_antispambot extends WP_UnitTestCase {

	/**
	 * This is basically a driveby test. While working on ticket
	 * 31992 I noticed that there was no unit testing for
	 * antispambot, so I added a little, just so I'd leave the code
	 * better than I found it.
	 *
	 * @ticket 31992
	 *
	 * @dataProvider data_returns_valid_utf8
	 */

	public function test_returns_valid_utf8( $address, $validity ) {
		$this->assertSame( seems_utf8( antispambot( $address ) ), $validity );
	}

	public function data_returns_valid_utf8() {
		return array(
			'plain'                => array( 'bob@example.com', true ),
			'plain with ip'        => array( 'ace@204.32.222.14', true ),
			'deep subdomain'       => array( 'kevin@many.subdomains.make.a.happy.man.edu', true ),
			'short address'        => array( 'a@b.co', true ),
			'ascii@nonascii'       => array( 'info@grå.org', true ),
			'nonascii@nonascii'    => array( 'grå@grå.org', true ),
			'decomposed unicode'   => array( 'gr\u{0061}\u{030a}blå@grå.org', true ),
			'weird but legal dots' => array( '..@example.com', true ),
		);
	}
}
