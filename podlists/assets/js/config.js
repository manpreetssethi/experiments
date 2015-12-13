/**
 * Created by manpreet on 11/12/15.
 */
requirejs.config({
    paths: {
        "podlists/app"              : "assets/js/app",
        "podlists/libraries"        : "assets/js/libraries",
        "podlists/models"           : "assets/js/models",
        "podlists/views"            : "assets/js/views",
        "podlists/collections"      : "assets/js/collections",
        "podlists/helpers"          : "assets/js/helpers",
        "podlists/templates"        : "assets/templates",
        "text"                      : "bower_components/text/text",
        "jquery"                    : "bower_components/jquery/dist/jquery.min",
        "underscore"                : "bower_components/underscore/underscore-min",
        "backbone"                  : "bower_components/backbone/backbone-min",
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