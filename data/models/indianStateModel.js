const mongoose = require("mongoose");
const validator = require("validator");

const indianStateSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true,"date is required"]
    },
    state: {
        type: String,
        required: [true, "State name is required"]
    },
    confirmedIndianNational: Number,
    confirmedForeignNational: Number,
    cured: Number,
    deaths: Number,
    confirmed: Number
},{ timestamps: true});

const IndianState = mongoose.model("IndianState",indianStateSchema);
module.exports = IndianState;