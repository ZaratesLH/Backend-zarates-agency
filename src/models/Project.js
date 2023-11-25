const { Schema, model } = require( 'mongoose');


const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    urlImage: String,
    date: Date,
    client: {
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
    }
},{
    timestamps: true
});

const ProjectModel = model( 'Project', ProjectSchema );


module.exports = ProjectModel;