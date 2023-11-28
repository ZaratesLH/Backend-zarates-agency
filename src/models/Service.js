const { Schema, model } = require( 'mongoose');


const ServiceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    userId: {           // El creador del servicio
        type: String,
        required: true
    }
},{
    timestamps: true
});

const ServiceModel = model( 'Service', ServiceSchema );


module.exports = ServiceModel, {
    ServiceSchema
};
