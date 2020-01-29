'use strict';

const server = require('../../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const agent= supergoose(server.apiServer);

describe('API Routes', () => {

  beforeEach(() => {
    
  })
 
  let item = {name: 'Electronics'};
  return agent.post('/api/v1/category')
     .send(item)
     .then(response => {
       expect(response.statusCode).toBe(200);
       expect(response.body.id).toBeDefined();
       expect(response.body.name).toEqual(item.name);

     })
     .catch(error =>{
       console.log(error);
       expect(error).not.toBeDefined();
     })

  it('can get all records',()=>{
    return agent.get('/api/v1/category')
       .then(response => {
         expect(response.statusCode).toBe(200)
         expect(response.body.count).toBeTruthy();
       })
       .catch(error => expect(error).not.toBeDefined())
});

it('can get a record',()=>{
  return agent.get('/api/v1/food/55')
     .then(response => {
       expect(response.statusCode).toBe(200)
     })
     .catch(error => expect(error).not.toBeDefined())
});

it('can update a record',()=>{
  return agent.put('/api/v1/food/55')
     .then(response => {
       expect(response.statusCode).toBe(200)
     })
     .catch(error => expect(error).not.toBeDefined())
});

it('can delete a record',()=>{
  return agent.delete('/api/v1/food/55')
     .then(response => {
       expect(response.statusCode).toBe(200)
     })
     .catch(error => expect(error).not.toBeDefined())
});


  it('should respond with a 500 on an error', () => {

    return mockRequest
      .get('/bad')
      .then(results => {
        expect(results.status).toBe(500);
      }).catch(console.error);

  });

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('should respond with a 404 on an invalid method', () => {

    return mockRequest
      .post('/')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('should respond properly on request to /api/v1/products', () => {

    return mockRequest
      .get('/api/v1/products')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(error => expect(error).not.toBeDefined());

  });

  // What strategies should we use to test POST, PUT, DELETE?

});
