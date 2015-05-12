/*
 * grunt-styledoc
 * https://github.com/thybzi/grunt-styledoc
 *
 * Copyright (c) 2014 Evgeni Dmitriev
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

    grunt.registerMultiTask("styledoc", "Grunt wrapper for styledoc: parser and showcase generator for JavaDoc-like comments in CSS, LESS, SASS etc.", function() {

        var styledoc = require("styledoc");
        var done = this.async();
        var options = this.options();

        var i,
            option_name,
            option_value;

        var module_option_names = [
            "templates_dir",
            "use_selector_based_ids",
            "states_modify_unique_attrs",
            "states_html_glue"
        ];
        for (i = 0; i < module_option_names.length; i++) {
            option_name = module_option_names[i];
            option_value = options[option_name];
            if (option_value) {
                styledoc[option_name] = option_value;
            }
        }

        var showcase_file_options = {};
        var showcase_file_option_names = [
            "template",
            "language",
            "doctype",
            "page_title",
            "css_url_http",
            "iframe_delay",
            "use_phantomjs",
            "phantomjs_viewport",
            "silent_mode",
            "preview_padding",
            "background_color"
        ];
        for (i = 0; i < showcase_file_option_names.length; i++) {
            option_name = showcase_file_option_names[i];
            option_value = options[option_name];
            if (option_value) {
                showcase_file_options[option_name] = option_value;
            }
        }

        this.files.forEach(function (f) {
            showcase_file_options["output_dir"] = f.dest;
            styledoc.showcaseFile(f.src[0], showcase_file_options).done(function () {
                done(true);
            }).fail(function () {
                done(false);
            });
        });
    });

};
