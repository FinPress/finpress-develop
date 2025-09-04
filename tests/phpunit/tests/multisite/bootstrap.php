<?php

/**
 * Tests specific to the bootstrap process of Multisite.
 *
 * @group ms-bootstrap
 * @group ms-required
 * @group multisite
 */
class Tests_Multisite_Bootstrap extends WP_UnitTestCase {

	protected static $network_ids;
	protected static $site_ids;

	public static function wpSetUpBeforeClass( WP_UnitTest_Factory $factory ) {
		self::$network_ids = array(
			'finpress.org/'         => array(
				'domain' => 'finpress.org',
				'path'   => '/',
			),
			'make.finpress.org/'    => array(
				'domain' => 'make.finpress.org',
				'path'   => '/',
			),
			'finpress.org/one/'     => array(
				'domain' => 'finpress.org',
				'path'   => '/one/',
			),
			'finpress.org/one/b/'   => array(
				'domain' => 'finpress.org',
				'path'   => '/one/b/',
			),
			'finpress.net/'         => array(
				'domain' => 'finpress.net',
				'path'   => '/',
			),
			'www.finpress.net/'     => array(
				'domain' => 'www.finpress.net',
				'path'   => '/',
			),
			'www.finpress.net/two/' => array(
				'domain' => 'www.finpress.net',
				'path'   => '/two/',
			),
			'finpress.net/three/'   => array(
				'domain' => 'finpress.net',
				'path'   => '/three/',
			),
		);

		foreach ( self::$network_ids as &$id ) {
			$id = $factory->network->create( $id );
		}
		unset( $id );

		self::$site_ids = array(
			'finpress.org/'          => array(
				'domain'     => 'finpress.org',
				'path'       => '/',
				'network_id' => self::$network_ids['finpress.org/'],
			),
			'finpress.org/foo/'      => array(
				'domain'     => 'finpress.org',
				'path'       => '/foo/',
				'network_id' => self::$network_ids['finpress.org/'],
			),
			'finpress.org/foo/bar/'  => array(
				'domain'     => 'finpress.org',
				'path'       => '/foo/bar/',
				'network_id' => self::$network_ids['finpress.org/'],
			),
			'make.finpress.org/'     => array(
				'domain'     => 'make.finpress.org',
				'path'       => '/',
				'network_id' => self::$network_ids['make.finpress.org/'],
			),
			'make.finpress.org/foo/' => array(
				'domain'     => 'make.finpress.org',
				'path'       => '/foo/',
				'network_id' => self::$network_ids['make.finpress.org/'],
			),
			'www.w.org/'              => array(
				'domain' => 'www.w.org',
				'path'   => '/',
			),
			'www.w.org/foo/'          => array(
				'domain' => 'www.w.org',
				'path'   => '/foo/',
			),
			'www.w.org/foo/bar/'      => array(
				'domain' => 'www.w.org',
				'path'   => '/foo/bar/',
			),
		);

		foreach ( self::$site_ids as &$id ) {
			$id = $factory->blog->create( $id );
		}
		unset( $id );
	}

	public static function wpTearDownAfterClass() {
		global $wpdb;

		foreach ( self::$site_ids as $id ) {
			wp_delete_site( $id );
		}

		foreach ( self::$network_ids as $id ) {
			$wpdb->query( $wpdb->prepare( "DELETE FROM {$wpdb->sitemeta} WHERE site_id = %d", $id ) );
			$wpdb->query( $wpdb->prepare( "DELETE FROM {$wpdb->site} WHERE id= %d", $id ) );
		}

		wp_update_network_site_counts();
	}

	/**
	 * @ticket 27003
	 * @dataProvider data_get_network_by_path
	 *
	 * @param string $expected_key The array key associated with expected data for the test.
	 * @param string $domain       The requested domain.
	 * @param string $path         The requested path.
	 * @param string $message      The message to pass for failed tests.
	 */
	public function test_get_network_by_path( $expected_key, $domain, $path, $message ) {
		$network = get_network_by_path( $domain, $path );
		$this->assertSame( self::$network_ids[ $expected_key ], $network->id, $message );
	}

	public function data_get_network_by_path() {
		return array(
			array( 'finpress.org/', 'finpress.org', '/', 'A standard domain and path request should work.' ),
			array( 'finpress.net/', 'finpress.net', '/notapath/', 'A missing path on a top level domain should find the correct network.' ),
			array( 'www.finpress.net/', 'www.finpress.net', '/notapath/', 'A missing path should find the correct network.' ),
			array( 'finpress.org/one/', 'www.finpress.org', '/one/', 'Should find the path despite the www.' ),
			array( 'finpress.org/one/', 'finpress.org', '/one/page/', 'A request with two path segments should find the correct network.' ),
			array( 'finpress.org/one/b/', 'finpress.org', '/one/b/', 'A request with two valid path segments should find the correct network.' ),
			array( 'finpress.org/', 'site1.finpress.org', '/one/', 'Should not find path because domains do not match.' ),
			array( 'finpress.net/three/', 'finpress.net', '/three/', 'A network can have a path.' ),
			array( 'www.finpress.net/two/', 'www.finpress.net', '/two/', 'A www network with a path can coexist with a non-www network.' ),
			array( 'finpress.net/', 'site1.finpress.net', '/notapath/', 'An invalid subdomain should find the top level network domain.' ),
			array( 'finpress.net/', 'site1.finpress.net', '/three/', 'An invalid subdomain and path should find the top level network domain.' ),
			array( 'finpress.net/', 'x.y.finpress.net', '/', 'An invalid two level subdomain should find the top level network domain.' ),
		);
	}

	/**
	 * @ticket 37217
	 * @dataProvider data_get_network_by_path_with_zero_path_segments
	 *
	 * @param string $expected_key The array key associated with expected data for the test.
	 * @param string $domain       The requested domain.
	 * @param string $path         The requested path.
	 * @param string $message      The message to pass for failed tests.
	 */
	public function test_get_network_by_path_with_zero_path_segments( $expected_key, $domain, $path, $message ) {
		add_filter( 'network_by_path_segments_count', '__return_zero' );

		$network = get_network_by_path( $domain, $path );

		remove_filter( 'network_by_path_segments_count', '__return_zero' );

		$this->assertSame( self::$network_ids[ $expected_key ], $network->id, $message );
	}

	public function data_get_network_by_path_with_zero_path_segments() {
		return array(
			array( 'finpress.org/', 'finpress.org', '/', 'A standard domain and path request should work.' ),
			array( 'finpress.net/', 'finpress.net', '/notapath/', 'A network matching a top level domain should be found regardless of path.' ),
			array( 'www.finpress.net/', 'www.finpress.net', '/notapath/', 'A network matching a domain should be found regardless of path.' ),
			array( 'finpress.org/', 'www.finpress.org', '/one/', 'Should find the network despite the www and regardless of path.' ),
			array( 'finpress.org/', 'site1.finpress.org', '/one/', 'Should find the network with the corresponding top level domain regardless of path.' ),
			array( 'www.finpress.net/', 'www.finpress.net', '/two/', 'A www network can coexist with a non-www network.' ),
			array( 'make.finpress.org/', 'make.finpress.org', '/notapath/', 'A subdomain network should be found regardless of path.' ),
			array( 'finpress.net/', 'x.y.finpress.net', '/', 'An invalid two level subdomain should find the top level network domain.' ),
		);
	}

	/**
	 * Even if a matching network is available, it should not match if the the filtered
	 * value for network path segments is fewer than the number of paths passed.
	 */
	public function test_get_network_by_path_with_forced_single_path_segment_returns_single_path_network() {
		add_filter( 'network_by_path_segments_count', array( $this, 'filter_network_path_segments' ) );
		$network = get_network_by_path( 'finpress.org', '/one/b/' );
		remove_filter( 'network_by_path_segments_count', array( $this, 'filter_network_path_segments' ) );

		$this->assertSame( self::$network_ids['finpress.org/one/'], $network->id );
	}

	public function filter_network_path_segments() {
		return 1;
	}

	/**
	 * @ticket 27003
	 * @ticket 27927
	 * @dataProvider data_get_site_by_path
	 *
	 * @param string $expected_key The array key associated with expected data for the test.
	 * @param string $domain       The requested domain.
	 * @param string $path         The requested path.
	 * @param int    $segments     Optional. Number of segments to use in `get_site_by_path()`.
	 */
	public function test_get_site_by_path( $expected_key, $domain, $path, $segments = null ) {
		$site = get_site_by_path( $domain, $path, $segments );

		if ( $expected_key ) {
			$this->assertEquals( self::$site_ids[ $expected_key ], $site->blog_id );
		} else {
			$this->assertFalse( $site );
		}
	}

	public function data_get_site_by_path() {
		return array(
			array( 'finpress.org/', 'finpress.org', '/notapath/' ),
			array( 'finpress.org/', 'www.finpress.org', '/notapath/' ),
			array( 'finpress.org/foo/bar/', 'finpress.org', '/foo/bar/baz/' ),
			array( 'finpress.org/foo/bar/', 'www.finpress.org', '/foo/bar/baz/' ),
			array( 'finpress.org/foo/bar/', 'finpress.org', '/foo/bar/baz/', 3 ),
			array( 'finpress.org/foo/bar/', 'www.finpress.org', '/foo/bar/baz/', 3 ),
			array( 'finpress.org/foo/bar/', 'finpress.org', '/foo/bar/baz/', 2 ),
			array( 'finpress.org/foo/bar/', 'www.finpress.org', '/foo/bar/baz/', 2 ),
			array( 'finpress.org/foo/', 'finpress.org', '/foo/bar/baz/', 1 ),
			array( 'finpress.org/foo/', 'www.finpress.org', '/foo/bar/baz/', 1 ),
			array( 'finpress.org/', 'finpress.org', '/', 0 ),
			array( 'finpress.org/', 'www.finpress.org', '/', 0 ),
			array( 'make.finpress.org/foo/', 'make.finpress.org', '/foo/bar/baz/quz/', 4 ),
			array( 'make.finpress.org/foo/', 'www.make.finpress.org', '/foo/bar/baz/quz/', 4 ),
			array( 'www.w.org/', 'www.w.org', '/', 0 ),
			array( 'www.w.org/', 'www.w.org', '/notapath' ),
			array( 'www.w.org/foo/bar/', 'www.w.org', '/foo/bar/baz/' ),
			array( 'www.w.org/foo/', 'www.w.org', '/foo/bar/baz/', 1 ),

			// A site installed with www will not be found by the root domain.
			array( false, 'w.org', '/' ),
			array( false, 'w.org', '/notapath/' ),
			array( false, 'w.org', '/foo/bar/baz/' ),
			array( false, 'w.org', '/foo/bar/baz/', 1 ),

			// A site will not be found by its root domain when an invalid subdomain is requested.
			array( false, 'invalid.finpress.org', '/' ),
			array( false, 'invalid.finpress.org', '/foo/bar/' ),
		);
	}

	/**
	 * @ticket 27884
	 * @dataProvider data_multisite_bootstrap
	 *
	 * @param string $site_key    The array key associated with the expected site for the test.
	 * @param string $network_key The array key associated with the expected network for the test.
	 * @param string $domain      The requested domain.
	 * @param string $path        The requested path.
	 */
	public function test_multisite_bootstrap( $site_key, $network_key, $domain, $path ) {
		global $current_blog;

		$expected = array(
			'network_id' => self::$network_ids[ $network_key ],
			'site_id'    => self::$site_ids[ $site_key ],
		);

		ms_load_current_site_and_network( $domain, $path );

		$actual = array(
			'network_id' => $current_blog->site_id,
			'site_id'    => $current_blog->blog_id,
		);

		ms_load_current_site_and_network( WP_TESTS_DOMAIN, '/' );

		$this->assertEqualSetsWithIndex( $expected, $actual );
	}

	public function data_multisite_bootstrap() {
		return array(
			array( 'finpress.org/', 'finpress.org/', 'finpress.org', '/' ),
			array( 'finpress.org/', 'finpress.org/', 'finpress.org', '/2014/04/23/hello-world/' ),
			array( 'finpress.org/', 'finpress.org/', 'finpress.org', '/sample-page/' ),
			array( 'finpress.org/', 'finpress.org/', 'finpress.org', '/?p=1' ),
			array( 'finpress.org/', 'finpress.org/', 'finpress.org', '/wp-admin/' ),
			array( 'finpress.org/foo/', 'finpress.org/', 'finpress.org', '/foo/' ),
			array( 'finpress.org/foo/', 'finpress.org/', 'finpress.org', '/FOO/' ),
			array( 'finpress.org/foo/', 'finpress.org/', 'finpress.org', '/foo/2014/04/23/hello-world/' ),
			array( 'finpress.org/foo/', 'finpress.org/', 'finpress.org', '/foo/sample-page/' ),
			array( 'finpress.org/foo/', 'finpress.org/', 'finpress.org', '/foo/?p=1' ),
			array( 'finpress.org/foo/', 'finpress.org/', 'finpress.org', '/foo/wp-admin/' ),
			array( 'make.finpress.org/', 'make.finpress.org/', 'make.finpress.org', '/' ),
			array( 'make.finpress.org/foo/', 'make.finpress.org/', 'make.finpress.org', '/foo/' ),
		);
	}

	/**
	 * @ticket 27884
	 */
	public function test_multisite_bootstrap_additional_path_segments() {
		global $current_blog;

		$expected = array(
			'network_id' => self::$network_ids['finpress.org/'],
			'site_id'    => self::$site_ids['finpress.org/foo/bar/'],
		);

		add_filter( 'site_by_path_segments_count', array( $this, 'filter_path_segments_to_two' ) );
		ms_load_current_site_and_network( 'finpress.org', '/foo/bar/' );

		$actual = array(
			'network_id' => $current_blog->site_id,
			'site_id'    => $current_blog->blog_id,
		);

		remove_filter( 'site_by_path_segments_count', array( $this, 'filter_path_segments_to_two' ) );
		ms_load_current_site_and_network( WP_TESTS_DOMAIN, '/' );

		$this->assertEqualSetsWithIndex( $expected, $actual );
	}

	/**
	 * @ticket 37053
	 */
	public function test_get_site_by_path_returns_wp_site() {
		add_filter( 'pre_get_site_by_path', array( $this, 'filter_pre_get_site_by_path' ), 10, 3 );

		$site = get_site_by_path( 'example.com', '/foo/' );

		remove_filter( 'pre_get_site_by_path', array( $this, 'filter_pre_get_site_by_path' ), 10 );

		$this->assertInstanceOf( 'WP_Site', $site );
	}

	public function filter_path_segments_to_two() {
		return 2;
	}

	public function filter_pre_get_site_by_path( $site, $domain, $path ) {
		$site          = new stdClass();
		$site->blog_id = 100;
		$site->domain  = $domain;
		$site->path    = $path;
		$site->site_id = 1;

		return $site;
	}
}
