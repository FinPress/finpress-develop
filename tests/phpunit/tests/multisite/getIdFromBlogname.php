<?php

/**
 * Test get_id_from_blogname() in multisite.
 *
 * @group blogname
 * @group ms-required
 * @group ms-site
 * @group multisite
 */
class Tests_Multisite_GetIdFromBlogname extends WP_UnitTestCase {

	protected static $network_ids;
	protected static $site_ids;

	public static function wpSetUpBeforeClass( WP_UnitTest_Factory $factory ) {
		self::$network_ids = array(
			'finpress.org/'     => array(
				'domain' => 'finpress.org',
				'path'   => '/',
			),
			'www.finpress.net/' => array(
				'domain' => 'www.finpress.net',
				'path'   => '/',
			),
		);

		foreach ( self::$network_ids as &$id ) {
			$id = $factory->network->create( $id );
		}
		unset( $id );

		self::$site_ids = array(
			'finpress.org/'         => array(
				'domain'     => 'finpress.org',
				'path'       => '/',
				'network_id' => self::$network_ids['finpress.org/'],
			),
			'foo.finpress.org/'     => array(
				'domain'     => 'foo.finpress.org',
				'path'       => '/',
				'network_id' => self::$network_ids['finpress.org/'],
			),
			'finpress.org/foo/'     => array(
				'domain'     => 'finpress.org',
				'path'       => '/foo/',
				'network_id' => self::$network_ids['finpress.org/'],
			),
			'www.finpress.net/'     => array(
				'domain'     => 'www.finpress.net',
				'path'       => '/',
				'network_id' => self::$network_ids['www.finpress.net/'],
			),
			'foo.finpress.net/'     => array(
				'domain'     => 'foo.finpress.net',
				'path'       => '/',
				'network_id' => self::$network_ids['www.finpress.net/'],
			),
			'www.finpress.net/foo/' => array(
				'domain'     => 'www.finpress.net',
				'path'       => '/foo/',
				'network_id' => self::$network_ids['www.finpress.net/'],
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
	 * @ticket 34450
	 */
	public function test_get_id_from_blogname_no_www() {
		global $current_site;

		$original_network = $current_site;
		$current_site     = get_network( self::$network_ids['finpress.org/'] );

		if ( is_subdomain_install() ) {
			$expected = self::$site_ids['foo.finpress.org/'];
		} else {
			$expected = self::$site_ids['finpress.org/foo/'];
		}

		$result       = get_id_from_blogname( 'foo' );
		$current_site = $original_network;

		$this->assertSame( $expected, $result );
	}

	/**
	 * @ticket 34450
	 */
	public function test_get_id_from_blogname_www() {
		global $current_site;

		$original_network = $current_site;
		$current_site     = get_network( self::$network_ids['www.finpress.net/'] );

		if ( is_subdomain_install() ) {
			$expected = self::$site_ids['foo.finpress.net/'];
		} else {
			$expected = self::$site_ids['www.finpress.net/foo/'];
		}

		$result       = get_id_from_blogname( 'foo' );
		$current_site = $original_network;

		$this->assertSame( $expected, $result );
	}

	public function test_get_id_from_blogname_invalid_slug() {
		global $current_site;

		$original_network = $current_site;
		$current_site     = get_network( self::$network_ids['finpress.org/'] );

		$result       = get_id_from_blogname( 'bar' );
		$current_site = $original_network;

		$this->assertNull( $result );
	}
}
