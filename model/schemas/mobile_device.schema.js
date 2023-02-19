/* packages */
const mongoose = require("mongoose");

/* Schema creations */
const mobile_deviceSchema = new mongoose.Schema({
    serial:{
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true
    },
    os:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_os",
        type: "String",
        required: true
    },
    ram:{
        type: "String",
        required: true
    },
    rom:{
        type: "String",
        required: true
    },
    model:{
        type: "String",
        required: true
    },
    memory:{
        type: "String",
        required: true
    },
    battery:{
        type: "String",
        required: true
    }

});

/* schema exportation */
module.exports = mobile_deviceSchema;