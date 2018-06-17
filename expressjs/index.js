const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const assert = require('assert');
const crypto = require('crypto');
const mime = require('mime');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, (err, raw) => {
      cb(null, raw.toString('hex') + Date.now() + '.' +  mime.extension(file.mimetype));
    });
  }
})
const upload = multer({ storage: storage });
const bodyParser = require('body-parser');
var Path = require('path');
var cors = require('cors');

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'transfer';
const collectionName = 'wallpaper';

app.use(bodyParser.json());
app.use('/images', express.static('uploads', {
  setHeaders: (res, path) => {
    res.set('content-type', `image/${Path.extname(path)}`);
  }
}));
app.options('*', cors());

// Get a list of all wallpapers
app.get('/wallpapers', (req, res) => {
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    const wallpapers = db.collection(collectionName);
    wallpapers.find({}).toArray(function (err, docs) {
      assert.equal(err, null);
      res.send({
        wallpapers: docs
      });
    });
    client.close();
  });
});

// Get wallpaper by transfer id
app.get('/wallpapers/:transferId', (req, res) => {
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    const wallpapers = db.collection(collectionName);
    wallpapers.find({
      transferId: req.params.transferId
    }).toArray(function (err, docs) {
      assert.equal(err, null);
      res.send(docs.shift());
    });
    client.close();
  });
});

// This method will upload a file
app.post('/upload/wallpaper', upload.single('wallpaperFile'), (req, res) => {
  console.log(req.headers);
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    const wallpapers = db.collection(collectionName);
    const wallpaper = {
      file: req.file
    };
    wallpapers.insert(wallpaper, function (err, result) {
      assert.equal(err, null);
      console.log("Inserted a document into the collection");
      res.send({
        success: true,
        wallpaper
      });
    });
    client.close();
  });
});

// Attach a transfer id to the wallpaper
app.put('/wallpapers/:id', (req, res) => {
  MongoClient.connect(url, async (err, client) => {
    assert.equal(null, err);
    const db = client.db(dbName);
    const wallpapers = db.collection(collectionName);

    wallpapers.update(
      { _id: ObjectID(req.params.id) },
      { $set: { transferId: req.body.transferId } },
      (err) => {
        assert.equal(err, null);
        console.log("Updated a document");
        res.send({
          success: true
        });
      }
    );
    client.close();
  });
});

app.listen(5000, () => {
  console.log('App running on http://localhost:5000');
});