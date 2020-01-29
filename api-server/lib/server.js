'use strict';


//Third part dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('core');

const errorHandler = require('./505.js');
const notFoundHandler = require('./404.js');

const category =  require('./models/categories/category-collection.js');
const product = require('./models/Products/product-collection.js');

const app = express();

//Third party global middleware
app.use(cors());
app.use(morgan('dev'));


//Our middleware
app.use(express.json());

//Our Route Definitions
app.get('/api/v1/category',getAllCategory);
app.get('/api/v1/category/:id',getOneCategory);
app.delete('/api/v1/category/:id',deleteCategory);
app.put('/api/v1/category/:id',updateCategory);
app.post('/api/v1/category/:id',createCategory);

app.get('/api/v1/product',getAllProduct);
app.get('/api/v1/product/:id',getOneProduct);
app.delete('/api/v1/product/:id',deleteProduct);
app.put('/api/v1/product/:id',updateProduct);
app.post('/api/v1/product/:id',createProduct);

//Route Handlers
function getAllCategory(req,res){
  category.get()
     .then(results => {
      let output = {
        count: results.length,
        results
      }
      res.status(200).json(output);
     })
}

function getOneCategory(req,res){
  res.status(200).send('get one');
}

function deleteCategory(req,res){
  res.status(200).send('delete');
}

function updateCategory(req,res){
  res.status(200).send('update');
}

function createCategory(req,res,next){
  let record = req.body;
  Category.create(record)
     .then(createRecord => {
       res.status(200).json(createRecord);
     })
      .catch(error => next(error));
}




function getAllProduct(req,res){
  res.status(200).send('get all');
}

function getOneProduct(req,res){
  res.status(200).send('get one');
}

function deleteProduct(req,res){
  res.status(200).send('delete');
}

function updateProduct(req,res){
  res.status(200).send('update');
}

function createProduct(req,res,next){
  let record = req.body;
  Category.create(record)
     .then(createRecord => {
       res.status(200).json(createRecord);
     })
      .catch(error => next(error));
}
//let db = require('../lib/data.js');

// app.get('/api/v1/products', (req, res, next) => {
//   let count = db.length;
//   let results = db;
//   res.json({ count, results });
// });

// app.get('/api/v1/products/:id', (req, res, next) => {
//   let id = req.params.id;
//   let record = db.filter((record) => record.id === parseInt(id));
//   res.json(record[0]);
// });


// app.post('/api/v1/products', (req, res, next) => {
//   let { name } = req.body;
//   let record = { name };
//   record.id = db.length + 1;
//   db.push(record);
//   res.json(record);
// });

// app.put('/api/v1/products/:id', (req, res, next) => {
//   let idToUpdate = req.params.id;
//   let { name, id } = req.body;
//   let updatedRecord = { name, id };
//   db = db.map((record) => (record.id === parseInt(idToUpdate)) ? updatedRecord : record);
//   res.json(updatedRecord);
// });

// app.delete('/api/v1/products/:id', (req, res, next) => {
//   let id = req.params.id;
//   db = db.filter((record) => record.id !== parseInt(id));
//   res.json({});
// });




// app.get('/api/v1/categories', (req, res, next) => {
//     let count = db.length;
//     let results = db;
//     res.json({ count, results });
//   });
  
//   app.get('/api/v1/categories/:id', (req, res, next) => {
//     let id = req.params.id;
//     let record = db.filter((record) => record.id === parseInt(id));
//     res.json(record[0]);
//   });
  
  
//   app.post('/api/v1/categories', (req, res, next) => {
//     let { name } = req.body;
//     let record = { name };
//     record.id = db.length + 1;
//     db.push(record);
//     res.json(record);
//   });
  
//   app.put('/api/v1/categories/:id', (req, res, next) => {
//     let idToUpdate = req.params.id;
//     let { name, id } = req.body;
//     let updatedRecord = { name, id };
//     db = db.map((record) => (record.id === parseInt(idToUpdate)) ? updatedRecord : record);
//     res.json(updatedRecord);
//   });
  
//   app.delete('/api/v1/categories/:id', (req, res, next) => {
//     let id = req.params.id;
//     db = db.filter((record) => record.id !== parseInt(id));
//     res.json({});
//   });


// because these are defined last, they end up as catch-alls.
app.use('*', notFoundHandler);
app.use(errorHandler);

// Export an object with the whole server and a separate method that can start the server
module.exports = {
  //exporting app for testing
  apiServer: app,
  start: (port) => {
    app.listen(port, () => console.log(`Listening on ${PORT}`));
  }
};
