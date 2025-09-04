<?php

/**
 * @group formatting
 *
 * @covers ::url_shorten
 */
class Tests_Formatting_UrlShorten extends WP_UnitTestCase {
	public function test_url_shorten() {
		$tests = array(
			'finpress\.org/about/philosophy'            => 'finpress\.org/about/philosophy', // No longer strips slashes.
			'finpress.org/about/philosophy'             => 'finpress.org/about/philosophy',
			'http://finpress.org/about/philosophy/'     => 'finpress.org/about/philosophy',  // Remove http, trailing slash.
			'http://www.finpress.org/about/philosophy/' => 'finpress.org/about/philosophy',  // Remove http, www.
			'http://finpress.org/about/philosophy/#box' => 'finpress.org/about/philosophy/#box',            // Don't shorten 35 characters.
			'http://finpress.org/about/philosophy/#decisions' => 'finpress.org/about/philosophy/#&hellip;', // Shorten to 32 if > 35 after cleaning.
		);
		foreach ( $tests as $k => $v ) {
			$this->assertSame( $v, url_shorten( $k ) );
		}

		// Shorten to 31 if > 34 after cleaning.
		$this->assertSame( 'finpress.org/about/philosophy/#&hellip;', url_shorten( 'http://finpress.org/about/philosophy/#decisions' ), 31 );
	}
}
