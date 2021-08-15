const mongoose = require("mongoose");
const validator = require("validator");

const updatedCountSchema = new mongoose.Schema({
    updatedOn: {
        type: Date,
        required: [true, "updated O is required"]
    },
    state: {
        type: String,
        required: [true, "State name is required"]
    },
    totalDosesAdministered: Number,
    totalSessionsConducted: Number,
    totalSites: Number,
    firstDoseAdministered: Number,
    secondDoseAdministered: Number,
    male: Number,
    female: Number,
    transgender: Number,
    totalCovaxinAdministered: Number,
    totalCoviShieldAdministered: Number,
    totalSputnikVAdministered: Number,
    AEFI: Number,
    ageCategoryA: Number, // age between 18 to 45
    ageCategoryB: Number, //age between 45 to 60
    ageCategoryC: Number, // 60 +
    totalIndividualsVaccinated: Number
},{ timestamps: true});

const UpdatedCountSchema = mongoose.model("UpdatedCount",updatedCountSchema);
module.exports = UpdatedCountSchema;