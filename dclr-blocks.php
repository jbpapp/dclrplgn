<?php

/**
 * Plugin Name: Dcrl Blocks
 * Description: A simple custom Gutenberg block plugin.
 * Version: 1.0.0
 * Author: Janos Papp
 * License: GPL-2.0+
 */

defined('ABSPATH') || exit;


add_action('enqueue_block_editor_assets', function () {
    wp_enqueue_script(
        'dclr-blocks',
        plugins_url('/blocks.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor'),
        filemtime(plugin_dir_path(__FILE__) . 'blocks.js'),
        true
    );

    if (is_admin()) {
        $css = get_vite_asset_url('assets/js/scripts.jsx', 'css');

        if ($css) {
            wp_enqueue_style('dclr-styls-css', $css, [], null);
        }
    }
});
