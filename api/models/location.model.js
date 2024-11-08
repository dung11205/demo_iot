const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema(
    {
        id: {  // Keep the lowercase field name in schema
            type: String,
            required: true,
            lowercase: true,  // Converts input to lowercase
        },
        name: {  // Keep the lowercase field name in schema
            type: String,
            required: true,
            lowercase: true,  // Converts input to lowercase
        },
    },
    { timestamps: true }  
);

module.exports = mongoose.model('Location', locationSchema);
