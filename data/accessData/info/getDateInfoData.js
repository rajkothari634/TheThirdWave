const IndianState = require("../../models/indianStateModel");
const Test = require("../../models/testModel");
const UpdatedCount = require("../../models/updatedCountModel");

exports.getDateInfoData = async (query) => {
    try {
        let date = new Date(query.date);
        const indianStateData = await IndianState.find({
            date: date
        })
        const testData = await Test.find({
            date: date
        })
        const updatedCount = await UpdatedCount.find({
            date: date
        })
        return {
            status: true,
            data: {
                indianStateData: indianStateData,
                testData: testData,
                updatedCount: updatedCount
            }
        }
    } catch (error) {
        return {
            status: false,
            errorMessage: error.message,
            errorCode: 500
        }
    }
    
     

}

