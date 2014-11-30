/*
 * grunt-styledoc
 * https://github.com/thybzi/grunt-styledoc
 *
 * Copyright (c) 2014 Evgeni Dmitriev
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                "Gruntfile.js",
                "tasks/*.js",
                "<%= nodeunit.tests %>"
            ],
            options: {
                jshintrc: ".jshintrc"
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ["tmp"]
        },

        // Configuration to be run (and then tested).
        styledoc: {
            padding: {
                options: {
                    page_title: 'StyleDoc :: Example 1 :: FS/NodeJS showcase',
                    preview_padding: [ 0, 0, 4 ]
                },
                files: [
                    { src: "test/fixtures/main.css", dest: "tmp/padding" }
                ]
            },
            padding_phantomjs: {
                options: {
                    page_title: 'StyleDoc :: Example 1 :: FS/NodeJS + PhantomJS showcase',
                    preview_padding: [ 0, 0, 4 ],
                    use_phantomjs: true
                },
                files: [
                    { src: "test/fixtures/main.css", dest: "tmp/padding_phantomjs" }
                ]
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ["test/*_test.js"]
        }
    });

    // Actually load this plugin"s task(s).
    grunt.loadTasks("tasks");

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-nodeunit");

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin"s task(s), then test the result.
    grunt.registerTask("test", ["clean", "styledoc", "nodeunit"]);

    // By default, lint and run all tests.
    grunt.registerTask("default", ["jshint", "test"]);

};
