const GetDateInfoData = require("../../data/accessData/info/getDateInfoData");
exports.getDateInfo = async (req,res) => {
    var errorCode = 500;
    try {
        const query = req.query;
        if(!query["date"]){
            errorCode = 404;
            throw Error("date is not provided")
        }
        const result = await GetDateInfoData.getDateInfoData({
            date: query["date"]
        });
        if(result.status){
            res.status(200).json({
                status: true,
                data: result.data
            })
        }else{
            errorCode = result.errorCode;
            throw Error(result.errorMessage)
        }

    } catch (error) {
        res.status(errorCode).json({
            errorMessage : error.message,
        });  
    }
}