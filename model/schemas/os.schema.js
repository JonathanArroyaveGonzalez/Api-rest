/* packages */
const mongoose = require("mongoose");

/* Schema creations */
const osSchema = new mongoose.Schema({
    name:{
        type: "String",
        required: true,
        unique: true
    },
    kernel:{
        type: "String",
        required: true
    },
    driver:{
        type: "String",
        required: true
    },
    devices:{
        type: "String",
        required: true,
    },
    memory:{
        type: "String",
        required: true
    },
    requirements:{
        type: "String",
        required: true,
        unique: true
    },
    interface:{
        type: "String",
        required: true
    },
    cache:{
        type: "String",
        required: true
    }

});

/* schema exportation */
module.exports = osSchema;