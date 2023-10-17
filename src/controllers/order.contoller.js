const { orderService } = require("../service");

const createOrder = async (req,res) =>{
    try{
        const reqBody = req.body;
        const order = await orderService.craeteOrder(reqBody);
        if(!Order){
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
const getOrderList = async (req, res) => {
    try {
        const getList = await orderService.getOrderList();
        if (!getList) {
            throw new Error("Order not found !");
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
const getOrderDetails = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const getDetails = await orderService.getorderById(orderId);

        if (!getDetails) {
            throw new Error("Order not found !");
        }

        res.status(200).json({
            success: true,
            message: "Order details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error?.message
        })
    }
}
const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const orderExist = await orderService.getOrderById(orderId);

        if (!orderExist) {
            throw new Error("Order not found !");
        }

        await orderService.updateOrder(orderId, req.body);

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
const deleteOrder = async (req, res) => {
    try {
        const orderExists = await orderService.getorderById(req.params.orderId);
        if (!orderExists) {
            throw new Error("Order not found !");
        }

        await orderService.deleteOrder(req.params.orderId);

        res.status(200).json({
            success: true,
            message: "Order deleted !"
        });
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error?.message
        });
    }
}

module.exports = {
    createOrder,
    getOrderList,
    getOrderDetails,
    updateOrder,
    deleteOrder
};