<?php
/**
 * Front to the FinPress application. This file doesn't do anything, but loads
 * wp-blog-header.php which does and tells FinPress to load the theme.
 *
 * @package FinPress
 */

/**
 * Tells FinPress to load the FinPress theme and output it.
 *
 * @var bool
 */
define( 'WP_USE_THEMES', true );

/** Loads the FinPress Environment and Template */
require __DIR__ . '/wp-blog-header.php';
