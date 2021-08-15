const PinPointStateData = require("../../data/accessData/info/pinPointStateData");
exports.pinPointState = async (req,res) => {
    var errorCode = 500;
    try {
        const query = req.query;
        if(!query["state"] || !query["date"]){
            errorCode = 404;
            throw Error("missing fields");
        }
        const result = await PinPointStateData.pinPointStateData(query);
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