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
        "jquery"                    : "bower_components/jquery/dist/jquery.min",
        "underscore"                : "bower_components/underscore/underscore-min",
        "backbone"                  : "bower_components/backbone/backbone-min",
        "firebase"                  : "bower_components/firebase/firebase",
        "backfire"                  : "bower_components/backbonefire/dist/backbonefire.min",
        "mocha"                     : "bower_components/mocha/mocha",
        "chai"                      : "bower_components/chai/chai",
        "chai-backbone"             : "bower_components/chai-backbone/chai-backbone",
        "sinon"                     : "bower_components/sinonjs/sinon",
    },
    shim: {
        'firebase': {
            exports: 'Firebase'
        },
        'underscore': {
            exports: '_'
        },
        'backfire': {
            deps: [ 'backbone', 'firebase', 'underscore' ]
        },
        mocha: { exports: 'mocha' }
    },
    waitSeconds: 0
});