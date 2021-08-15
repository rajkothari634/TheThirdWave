const GetStateInfoData = require("../../data/accessData/info/getStateInfoData");
exports.getStateInfo = async (req,res) => {
    var errorCode = 500;
    try {
        const query = req.query;
        if(!query["state"]){
            errorCode = 404;
            throw Error("state is not provided")
        }
        const result = await GetStateInfoData.getStateInfoData(query);
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