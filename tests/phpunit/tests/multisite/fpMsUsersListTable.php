<?php

/**
 * @group admin
 * @group ms-required
 * @group network-admin
 *
 * @covers WP_MS_Users_List_Table
 */
class Tests_Multisite_wpMsUsersListTable extends WP_UnitTestCase {
	protected static $site_ids;

	/**
	 * @var WP_MS_Users_List_Table
	 */
	public $table = false;

	public function set_up() {
		parent::set_up();
		$this->table = _get_list_table( 'WP_MS_Users_List_Table', array( 'screen' => 'ms-users' ) );
	}

	public static function wpSetUpBeforeClass( WP_UnitTest_Factory $factory ) {
		self::$site_ids = array(
			'finpress.org/'          => array(
				'domain' => 'finpress.org',
				'path'   => '/',
			),
			'finpress.org/foo/'      => array(
				'domain' => 'finpress.org',
				'path'   => '/foo/',
			),
			'finpress.org/foo/bar/'  => array(
				'domain' => 'finpress.org',
				'path'   => '/foo/bar/',
			),
			'finpress.org/afoo/'     => array(
				'domain' => 'finpress.org',
				'path'   => '/afoo/',
			),
			'make.finpress.org/'     => array(
				'domain' => 'make.finpress.org',
				'path'   => '/',
			),
			'make.finpress.org/foo/' => array(
				'domain' => 'make.finpress.org',
				'path'   => '/foo/',
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
			'test.example.org/'       => array(
				'domain' => 'test.example.org',
				'path'   => '/',
			),
			'test2.example.org/'      => array(
				'domain' => 'test2.example.org',
				'path'   => '/',
			),
			'test3.example.org/zig/'  => array(
				'domain' => 'test3.example.org',
				'path'   => '/zig/',
			),
			'atest.example.org/'      => array(
				'domain' => 'atest.example.org',
				'path'   => '/',
			),
		);

		foreach ( self::$site_ids as &$id ) {
			$id = $factory->blog->create( $id );
		}
		unset( $id );
	}

	public static function wpTearDownAfterClass() {
		foreach ( self::$site_ids as $site_id ) {
			wp_delete_site( $site_id );
		}
	}

	/**
	 * @ticket 42066
	 *
	 * @covers WP_MS_Users_List_Table::get_views
	 */
	public function test_get_views_should_return_views_by_default() {
		$all   = get_user_count();
		$super = count( get_super_admins() );

		$expected = array(
			'all'   => '<a href="http://' . WP_TESTS_DOMAIN . '/wp-admin/network/users.php" class="current" aria-current="page">All <span class="count">(' . $all . ')</span></a>',
			'super' => '<a href="http://' . WP_TESTS_DOMAIN . '/wp-admin/network/users.php?role=super">Super Admin <span class="count">(' . $super . ')</span></a>',
		);

		$this->assertSame( $expected, $this->table->get_views() );
	}
}
