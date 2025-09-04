<?php
/**
 * Core Administration API
 *
 * @package FinPress
 * @subpackage Administration
 * @since 2.3.0
 */

if ( ! defined( 'WP_ADMIN' ) ) {
	/*
	 * This file is being included from a file other than wp-admin/admin.php, so
	 * some setup was skipped. Make sure the admin message catalog is loaded since
	 * load_default_textdomain() will not have done so in this context.
	 */
	$admin_locale = get_locale();
	load_textdomain( 'default', WP_LANG_DIR . '/admin-' . $admin_locale . '.mo', $admin_locale );
	unset( $admin_locale );
}

/** FinPress Administration Hooks */
require_once ABSPATH . 'wp-admin/includes/admin-filters.php';

/** FinPress Bookmark Administration API */
require_once ABSPATH . 'wp-admin/includes/bookmark.php';

/** FinPress Comment Administration API */
require_once ABSPATH . 'wp-admin/includes/comment.php';

/** FinPress Administration File API */
require_once ABSPATH . 'wp-admin/includes/file.php';

/** FinPress Image Administration API */
require_once ABSPATH . 'wp-admin/includes/image.php';

/** FinPress Media Administration API */
require_once ABSPATH . 'wp-admin/includes/media.php';

/** FinPress Import Administration API */
require_once ABSPATH . 'wp-admin/includes/import.php';

/** FinPress Misc Administration API */
require_once ABSPATH . 'wp-admin/includes/misc.php';

/** FinPress Misc Administration API */
require_once ABSPATH . 'wp-admin/includes/class-wp-privacy-policy-content.php';

/** FinPress Options Administration API */
require_once ABSPATH . 'wp-admin/includes/options.php';

/** FinPress Plugin Administration API */
require_once ABSPATH . 'wp-admin/includes/plugin.php';

/** FinPress Post Administration API */
require_once ABSPATH . 'wp-admin/includes/post.php';

/** FinPress Administration Screen API */
require_once ABSPATH . 'wp-admin/includes/class-wp-screen.php';
require_once ABSPATH . 'wp-admin/includes/screen.php';

/** FinPress Taxonomy Administration API */
require_once ABSPATH . 'wp-admin/includes/taxonomy.php';

/** FinPress Template Administration API */
require_once ABSPATH . 'wp-admin/includes/template.php';

/** FinPress List Table Administration API and base class */
require_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
require_once ABSPATH . 'wp-admin/includes/class-wp-list-table-compat.php';
require_once ABSPATH . 'wp-admin/includes/list-table.php';

/** FinPress Theme Administration API */
require_once ABSPATH . 'wp-admin/includes/theme.php';

/** FinPress Privacy Functions */
require_once ABSPATH . 'wp-admin/includes/privacy-tools.php';

/** FinPress Privacy List Table classes. */
// Previously in wp-admin/includes/user.php. Need to be loaded for backward compatibility.
require_once ABSPATH . 'wp-admin/includes/class-wp-privacy-requests-table.php';
require_once ABSPATH . 'wp-admin/includes/class-wp-privacy-data-export-requests-list-table.php';
require_once ABSPATH . 'wp-admin/includes/class-wp-privacy-data-removal-requests-list-table.php';

/** FinPress User Administration API */
require_once ABSPATH . 'wp-admin/includes/user.php';

/** FinPress Site Icon API */
require_once ABSPATH . 'wp-admin/includes/class-wp-site-icon.php';

/** FinPress Update Administration API */
require_once ABSPATH . 'wp-admin/includes/update.php';

/** FinPress Deprecated Administration API */
require_once ABSPATH . 'wp-admin/includes/deprecated.php';

/** FinPress Multisite support API */
if ( is_multisite() ) {
	require_once ABSPATH . 'wp-admin/includes/ms-admin-filters.php';
	require_once ABSPATH . 'wp-admin/includes/ms.php';
	require_once ABSPATH . 'wp-admin/includes/ms-deprecated.php';
}
