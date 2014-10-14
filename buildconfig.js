({
    //The top level directory that contains your app. If this option is used
    //then it assumed your scripts are in a subdirectory under this path.
    //This option is not required. If it is not specified, then baseUrl
    //below is the anchor point for finding things. If this option is specified,
    //then all the files from the app directory will be copied to the dir:
    //output area, and baseUrl will assume to be a relative path under
    //this directory.
    appDir: "src/",
    //By default, all modules are located relative to this path. If baseUrl
    //is not explicitly set, then all modules are loaded relative to
    //the directory that holds the build file. If appDir is set, then
    //baseUrl should be specified as relative to the appDir.
    baseUrl: "js",
    //By default all the configuration for optimization happens from the command
    //line or by properties in the config file, and configuration that was
    //passed to requirejs as part of the app's runtime "main" JS file is *not*
    //considered. However, if you prefer the "main" JS file configuration
    //to be read for the build so that you do not have to duplicate the values
    //in a separate configuration, set this property to the location of that
    //main JS file. The first requirejs({}), require({}), requirejs.config({}),
    //or require.config({}) call found in that file will be used.
    mainConfigFile: 'src/js/main.js',

    //Finds require() dependencies inside a require() or define call. By default
    //this value is false, because those resources should be considered dynamic/runtime
    //calls. However, for some optimization scenarios, it is desirable to
    //include them in the build.
    //Introduced in 1.0.3. Previous versions incorrectly found the nested calls
    //by default.
    findNestedDependencies: true,

    //If set to true, any files that were combined into a build bundle will be
    //removed from the output folder.
    removeCombined: true,

    optimize: "uglify2",

    //Introduced in 2.1.2 and considered experimental.
    //If the minifier specified in the "optimize" option supports generating
    //source maps for the minfied code, then generate them. The source maps
    //generated only translate minified JS to non-minified JS, it does not do
    //anything magical for translating minfied JS to transpiled source code.
    //Currently only optimize: "uglify2" is supported when running in node or
    //rhino, and if running in rhino, "closure" with a closure compiler jar
    //build after r1592 (20111114 release).
    //The source files will show up in a browser developer tool that supports
    //source maps as ".js.src" files.
    generateSourceMaps: true,
    preserveLicenseComments: false,
    inlineText: false,


    dir: "dist/",
    modules: [
        {
            name: "main"
        }
    ]
})