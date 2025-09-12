<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'finpress_develop' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'password' );

/** Database hostname */
define( 'DB_HOST', 'mysql' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '%2h/?02/%7P@yry%j{/QSYM!-xKp)$8/X(FZRZ!0Ka!SBQTnp45WgfjdfGho;oa[' );
define( 'SECURE_AUTH_KEY',   'W`f-}4N:]pDa4K|%@_H{,20)g{D5C3,KMfIWqXuni_gBB<[^$X$LI])Q`X@$8dOM' );
define( 'LOGGED_IN_KEY',     'jjG5DCo(Mq2(XO=U;Yn>f{0<Tb3HaHOEVj7Wa/Rdi;=}vmWf-6L:=*a,$CrSf l.' );
define( 'NONCE_KEY',         'r}PKftKi,6 z!Ll=4JJ_LrqDX!2V8^;,(N2tr<Dj*JVDs$S[k 3hKb=V&82tLNu]' );
define( 'AUTH_SALT',         'uGZXmN]}=Sal<)jhyEFV29XXejMS0_RzT*W;({%{8bJoYq[u#dyHLpY?7{v7!<R_' );
define( 'SECURE_AUTH_SALT',  'Q7jrn`!b/Z:M_~X1|14bJ>3!IwbKzAJqAjp,=|S`wY/yV&nUgEd!eJF~995f<N}`' );
define( 'LOGGED_IN_SALT',    '[dwe<?.}snylVWFd-0rP?#20Gq7w1Tz7O[:G4eC5+Cn, d}n6[*~,a1R3whp4yRt' );
define( 'NONCE_SALT',        '$(!O)Bgah1ArjPJI#MdYg&cEd^k6/i!1aD}X<TJ.*a0Sou-(vB72Sk@.!n,yQOFy' );
define( 'WP_CACHE_KEY_SALT', 'y^J+W{D^:%m!b4$[5,:wpa_4QbOy:/rg*<Th0Inm 7@?.!Qi{U_AQW8H%-z%lV`b' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', true );
}

define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', true );
define( 'SCRIPT_DEBUG', true );
define( 'WP_ENVIRONMENT_TYPE', 'local' );
define( 'WP_DEVELOPMENT_MODE', 'core' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
