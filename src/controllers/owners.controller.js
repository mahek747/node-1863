const { userService } = require("../service");

const createOwner = async (req,res) =>{
    try{
        const reqBody = req.body;
        const owner = await ownerService.craeteOwner(reqBody);
        if(!Owner){
            throw new Error("Something went wrong,try again later!")
        }
        res.status(200).json(
            {
                success:true,
                message:reqbody,
                data:{ reqbody },
            }
        );
    }
    catch(error){
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
};
const getOwnerList = async (req, res) => {
    try {
        const getList = await ownerService.getOwnerList();
        if (!getList) {
            throw new Error("Owner not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get owner list !",
            data: getList
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const getOwnerDetails = async (req, res) => {
    try {
        const ownerId = req.params.ownerId;
        const getDetails = await ownerService.getownerById(ownerId);

        if (!getDetails) {
            throw new Error("Owner not found !");
        }

        res.status(200).json({
            success: true,
            message: "Owner details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const updateOwner = async (req, res) => {
    try {
        const ownerId = req.params.ownerId;
        const ownerExist = await ownerService.getOwnerById(ownerId);

        if (!ownerExist) {
            throw new Error("Owner not found !");
        }

        await ownerService.updateOwner(ownerId, req.body);

        res.status(200).json({
            success: true,
            message: "Owner details update successfully !"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const deleteOwner = async (req, res) => {
    try {
        const ownerExists = await OwnerService.getOwnerById
        if (!ownerExists) {
            throw new Error("Owner not found !");
        }

        await ownerService.deleteOwner(req.params.ownerId);

        res.status(200).json({
            success: true,
            message: "Owner deleted !"
        });
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error?.message
        });
    }
}

module.exports = {
    createOwner,
    getOwnerList,
    getOwnerDetails,
    updateOwner,
    deleteOwner
};