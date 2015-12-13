/**
 * Created by manpreet on 12/12/15.
 */
var express = require('express');
var bodyParser = require('body-parser');
var Audiosearch = require('audiosearch-client-node');
var Firebase = require("firebase");


var app = express();
var audiosearch = new Audiosearch('0717e6e434f960e0b16bbea891a164b099617e9f5bda1c63a9b0e01aa20a0477', '62b17691f3abf03d272040dee59c29483a50cd511fb8457ad771a3586620171c');
var firebaseRef = new Firebase("https://podlists.firebaseio.com");

var jsonParser = bodyParser.json()

/* CORS */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/* CORS */


/* Endpoints */
    /* Playlists */
    app.get('/api/playlists', function (req, res) {
        firebaseRef.child('playlists').once('value', function (snapshot) {
            var _data = snapshot.val();
            var _return = {
                fail: false,
                data: !_data ? [] : _data
            };
            res.send(_return);
        });
    });

    app.post('/api/playlists', jsonParser, function (req, res) {
        var _postData = {name: req.body.name, podcasts: req.body.podcasts, createdAt: new Date().getTime()};
        var newRef = firebaseRef.child('playlists').push(_postData);
        _postData.id = newRef.key();
        res.send(_postData);
    });

    app.put('/api/playlists/:id', jsonParser, function (req, res) {
        var playlistId = req.params.id;
        firebaseRef.child('playlists/'+playlistId+'/podcasts').set(req.body.podcasts);
        res.send({id: playlistId, name: req.body.name, podcasts: req.body.podcasts});
    });
    /* Playlists */


    /* Podcasts */
    app.get('/api/podcasts/search?', function (req, res) {
        if(req.query.q) {
            audiosearch.searchEpisodes(req.query.q).then(function (results) {
                var _return = {
                    fail: false,
                    data: results
                };
                res.send(_return);
            });
        } else {
            res.send({fail: true, msg: 'no query found'});
        }
    });

    app.get('/api/podcasts/:id?', function (req, res) {
        if(req.params.id) {
            audiosearch.getEpisode(req.params.id).then(function (results) {
                var _return = {
                    fail: false,
                    data: results
                };
                res.send(_return);
            });
        } else {
            res.send({fail: true, msg: 'no episode found'});
        }
    });
    /* Podcasts */

/* Endpoints */

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});