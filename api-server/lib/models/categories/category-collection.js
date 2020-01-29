'use strict';

const DataModel = require('../memory-data-model.js');

// const schema = {
//     fields: {
//         id: { type: 'string', required: true },
//         name: { type: 'string', required: true },
//     }
//   };

// class Category extends DataModel {
//     constructor(data) {
//         super(schema, data);
//     }
// }

class Category extends DataModel {
    constructor() {
        super();
        this.schema ={
            id: { type: 'string', required: true },
            name: { type: 'string', required: true },
        };
    }
}

module.exports = new Category();