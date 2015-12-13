/**
 * Created by manpreet on 12/12/15.
 */
var express = require('express');
var bodyParser = require('body-parser');
var Firebase = require("firebase");


var app = express();
var firebaseRef = new Firebase("https://2d0.firebaseio.com/");

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
    /* todos */
        app.get('/api/todos', function (req, res) {
            firebaseRef.child('todos').once('value', function (snapshot) {
                var _return = {
                    fail: false,
                    data: snapshot.val()
                };
                res.send(_return);
            });
        });

        app.post('/api/todos', jsonParser, function (req, res) {
            var _postData = {title: req.body.title, completed: req.body.completed, createdAt: new Date().getTime()};
            var newRef = firebaseRef.child('todos').push(_postData);
            _postData['id'] = newRef.key();
            res.send(_postData);
        });

        app.put('/api/todos/:id', jsonParser, function (req, res) {
            var todoId = req.params.id;
            firebaseRef.child('todos/'+todoId+'/completed').set(req.body.completed);
            res.send({id: todoId, title: req.body.title, completed: req.body.completed, createdAt: req.body.createdAt});
        });
    /* Playlists */

/* Endpoints */

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
