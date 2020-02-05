//import { error } from "util";
var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
var logged = false;
var url = 'mongodb://localhost:27017/Daw';
const sqlite3 = require("sqlite3").verbose();
let dbr = new sqlite3.Database("./db.sqlite3", (err)=>{
  if(err){
    console.log("error.message")
  }
  console.log("conected to db sqlite3")
  /*db.close((err)=>{
      if (err) {
        console.log("error.message")
      }
  })
  console.log("conection closed")
  */
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function(req, res, next) {
  console.log("getdata")
  var resultArray = [];
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    var cursor = db.collection('log').find();
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      console.log(resultArray)
      res.render('index', {items: resultArray});
    });
  });
});
router.get('/logs', function(req, res, next) {
  console.log("getdata")
  dbr.all("select * from MiApp_regla",(err,results)=>{
    console.log("resultados",results);

  });
  dbr.all("select * from MiApp_foto",(err,results)=>{
    console.log("fotos:",results);

  });
  dbr.all("select * from MiApp_lugar",(err,results)=>{
    console.log("lugares:",results);

  });
  dbr.all("select * from MiApp_persona",(err,results)=>{
    console.log("personas:",results);

  });
  dbr.all("select * from MiApp_noticias",(err,results)=>{
    console.log("noticias:",results);

  });
  var resultArray = [];
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    var cursor = db.collection('log').find();
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      console.log(resultArray)
      res.json(resultArray);
    });
  });
});

router.post('/insert', function(req, res, next) {
  console.log("insert")
  var item = {
    fecha: req.body.fecha,
    accion: req.body.accion,
    user: req.body.user,
    detalle: req.body.detalle
  };

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('log').insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log('Item inserted');
      db.close();
    });
  });

  res.redirect('/');
});

router.post('/update', function(req, res, next) {
  console.log("update")
  var item = {
    fecha: req.body.fecha,
    accion: req.body.accion,
    user: req.body.user,
    detalle: req.body.detalle
  };
  var id = req.body.id;

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('log').updateOne({"_id": objectId(id)}, {$set: item}, function(err, result) {
      assert.equal(null, err);
      console.log('Item updated');
      db.close();
    });
  });
});

router.post('/delete', function(req, res, next) {
  console.log("delete")
  var id = req.body.id;

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('log').deleteOne({"_id": objectId(id)}, function(err, result) {
      assert.equal(null, err);
      console.log('Item deleted');
      db.close();
    });
  });
});

module.exports = router;
