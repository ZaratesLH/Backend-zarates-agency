const { Schema, model } = require( 'mongoose');


const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    urlImage: String,
    date: Date,
    customer: {
        type: String,
        required: true
    },
    urlWebsite: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {           // El creador del proyecto
        type: String,
        required: true
    }
},{
    timestamps: true
});

const ProjectModel = model( 'Project', ProjectSchema );


module.exports = ProjectModel;