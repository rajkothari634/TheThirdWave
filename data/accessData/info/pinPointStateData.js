const IndianState = require("../../models/indianStateModel");
const Test = require("../../models/testModel");
const UpdatedCount = require("../../models/updatedCountModel");

exports.getDateInfoData = async (query) => {
    try {
        let state = query.state;
        let date = new Date(query.date);
        const indianStateData = await IndianState.find({
            state: state,
            date: date
        })
        const testData = await Test.find({
            state: state,
            date: date
        })
        const updatedCount = await UpdatedCount.find({
            state: state,
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

