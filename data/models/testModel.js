const mongoose = require("mongoose");
const validator = require("validator");

const testSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true,"date is required"]
    },
    state: {
        type: String,
        required: [true, "State name is required"]
    },
    totalSamples: Number,
    negative: Number,
    positive: Number
},{ timestamps: true});

const Test = mongoose.model("Test",testSchema);
module.exports = Test;