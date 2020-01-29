'use strict';

const DataModel = require('../memory-data-model.js');

// const schema = {
//     fields: {
//         id: { type: 'string', required: true },
//         category_id: { type: 'string', required: true },
//         price: { type: 'number', required: true },
//         weight: { type: 'number' },
//         quantity_in_stock: { type: 'number', required: true },
//     }
// };

// class Product extends Model {
//     constructor(data) {
//         super(schema, data);
//     }
// }

class Product extends DataModel {
    constructor(){
        super();
        this.schema ={
        id: { type: 'string', required: true },
        category_id: { type: 'string', required: true },
        price: { type: 'number', required: true },
        weight: { type: 'number' },
        quantity_in_stock: { type: 'number', required: true},
        };
    }
}
module.exports = new Product();