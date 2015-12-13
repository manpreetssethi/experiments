/**
 * Created by manpreet on 11/12/15.
 */
requirejs.config({
    paths: {
        "podlists/libraries"        : "../assets/js/libraries",
        "podlists/models"           : "../assets/js/models",
        "podlists/views"            : "../assets/js/views",
        "podlists/collections"      : "../assets/js/collections",
        "podlists/helpers"          : "../assets/js/helpers",
        "jquery"                    : "../bower_components/jquery/dist/jquery.min",
        "underscore"                : "../bower_components/underscore/underscore-min",
        "backbone"                  : "../bower_components/backbone/backbone-min",
        "backbonefire"              : "../bower_components/backbonefire/dist/backbonefire.min",
        "mocha"                     : "../bower_components/mocha/mocha",
        "chai"                      : "../bower_components/chai/chai",
        "chaibackbone"              : "../bower_components/chai-backbone/chai-backbone"
    },
    shim: {
        mocha: { exports: 'mocha' }
    },
    waitSeconds: 0
});

define(function(require) {
    var chai = require('chai');
    var mocha = require('mocha');

    // Chai
    //var should = chai.should();
    //chai.use(chaiJquery);

    mocha.setup('bdd');

    require([
        'views-tests.js',
    ], function(require) {
        mocha.run();
    });

});
