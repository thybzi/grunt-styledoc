"use strict";

var grunt = require("grunt");

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.styledoc = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    padding: function (test) {
        test.expect(1);

        var actual = grunt.file.read("tmp/padding/index.html");
        var expected = grunt.file.read("test/expected/padding/index.html");
        test.equal(actual, expected, "generates showcase files with preview body padding");

        test.done();
    },
    padding_phantomjs: function (test) {
        test.expect(1);

        var actual = grunt.file.read("tmp/padding_phantomjs/index.html");
        var expected = grunt.file.read("test/expected/padding_phantomjs/index.html");
        test.equal(actual, expected, "generates showcase files with preview body padding and iframe height pre-measured");

        test.done();
    }
};
