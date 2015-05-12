# grunt-styledoc

> Grunt wrapper for styledoc: parser and showcase generator for JavaDoc-like comments in CSS, LESS, SASS etc.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-styledoc --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-styledoc');
```

## The "styledoc" task

### Overview
In your project's Gruntfile, add a section named `styledoc` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  styledoc: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.templates_dir
Type: `String`
Default value: `"<module_dir>/templates/"`

Path to templates directory, relative to current location.

#### options.template
Type: `String`
Default value: `"default"`

Name of showcase page template.

#### options.language
Type: `String`
Default value: `"en"`

Language to apply when creating page (should exist in template's `languages` directory)

#### options.doctype
Type: `String`
Default value: `"html5"`

Live preview target doctype (should exist in template's `preview` directory).

#### options.page_title
Type: `String`
Default value: `""`

Main title of document.

#### options.css_url_http
Type: `Sumber`
Default value: `undefined`

HTTP(S) path to CSS file to use in live preview (detected automatically by default).

#### options.iframe_delay
Type: `Number`
Default value: `2000`

Delay (ms) before refreshing iframe height.
This delay is needed to render preview item iframe page, measure its height, and then apply this height to `<iframe>` element itself.
Not needed if PhantomJS is used.

#### options.use_phantomjs
Type: `Boolean`
Default value: `false`

Use PhantomJS to pre-measure and pre-set preview iframes height values (so iframe delay is not needed).
Requires PhantomJS to be installed in system.

#### options.phantomjs_viewport
Type: `Object`
Default value: `{ width: 1280, height: 800 }`

Viewport size for PhantomJS instances.

#### options.silent_mode
Type: `Boolean`
Default value: `false`

Disable console messages.

#### options.preview_padding
Type: `Number | Number[]`
Default value: `undefined`

Padding value(s) for preview container. Useful if elements have `box-shadow`, `outline` or similar styles that don't affect the container offset size.
Value can be a *number* (`4 => padding: 4px`) or *array of numbers* (`[ 4, 3, 8 ] => padding: 4px 3px 8px`).

#### options.background_color
Type: `String`
Default value: `undefined`

Background color CSS value for both main showcase page and iframe preview pages (for seemless iframes).
Use this option if your target body color differs from value proposed by template (`#fff` for `default` template, `#000` for `dark` template, etc.).
Value should be a string containing any CSS-valid color value (e.g. `"#f1f1f1"`, `"darkgray"`, or even `"rgb(17, 17, 36)"`).


### Usage examples

#### Basic usage
In this example, only `page_title` option is provided. Although this option isn't required, showcase page just look poor without a title :)

```js
grunt.initConfig({
    styledoc: {
        options: {
            page_title: "My styles presentation"
        },
        files: [
           { src: "path/to/your.css", dest: "path/to/output/directory/" }
        ],
    },
});
```

#### Extented configuration
In this example, all available options are added.

```js
grunt.initConfig({
    styledoc: {
        options: {
            page_title: "My styles presentation",
            templates_dir: "my/custom/templates/dir/",
            template: "my_custom_template",
            language: "ru",
            doctype: "xhtml10_transitional",
            iframe_delay: 3000, // actually ignored if PhantomJS is enabled and installed
            use_phantomjs: true,
            phantomjs_viewport: { width: 640, height: 480 },
            silent_mode: true,
            preview_padding: [ 15 10 20 12 ],
            background_color: "#ffc"
        },
        files: [
           { src: "path/to/your.css", dest: "path/to/output/directory/" }
        ],
    },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Version history
* **0.0.3** *(2015-05-12)*: Upgrade to `styledoc 0.0.8`
* **0.0.2** *(2014-12-01)*: Upgrade to `styledoc 0.0.6`
* **0.0.1** *(2014-11-30)*: Initial release
