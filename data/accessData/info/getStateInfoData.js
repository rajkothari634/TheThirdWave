const IndianState = require("../../models/indianStateModel");
const Test = require("../../models/testModel");
const UpdatedCount = require("../../models/updatedCountModel");

exports.getDateInfoData = async (query) => {
    try {
        let state = query.state;
        const indianStateData = await IndianState.find({
            state: state
        })
        const testData = await Test.find({
            state: state
        })
        const updatedCount = await UpdatedCount.find({
            state: state
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

