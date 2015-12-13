/**
 * Created by manpreet on 11/12/15.
 */
requirejs.config({
    paths: {
        "todomvc/app"               : "assets/js/app",
        "todomvc/libraries"         : "assets/js/libraries",
        "todomvc/models"            : "assets/js/models",
        "todomvc/views"             : "assets/js/views",
        "todomvc/collections"       : "assets/js/collections",
        "todomvc/helpers"           : "assets/js/helpers",
        "todomvc/templates"         : "assets/templates",
        "jquery"                    : "bower_components/jquery/dist/jquery.min",
        "underscore"                : "bower_components/underscore/underscore-min",
        "backbone"                  : "bower_components/backbone/backbone-min",
        "text"                      : "bower_components/text/text",
        "mocha"                     : "bower_components/mocha/mocha",
        "chai"                      : "bower_components/chai/chai",
        "chai-backbone"             : "bower_components/chai-backbone/chai-backbone",
        "sinon"                     : "bower_components/sinonjs/sinon",
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        mocha: { exports: 'mocha' }
    },
    waitSeconds: 0
});