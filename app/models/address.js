var mongoose = require('mongoose');
var schema = mongoose.Schema;

var addressSchema = new schema({
    employeeId: {
        type: String,
        ref: "Employee",
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    zip: {
        type: Number
    }
});

module.exports = mongoose.model('Address', addressSchema);