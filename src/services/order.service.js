const { Order } = require("../models");

const createOrder = async (reqBody) => {
    return Order.create(reqBody);
}

const getOrderList = async (req, res) => {
    return Order.find();
}

const getOrderById = async (orderId) => {
    return Order.findById(orderId);
}

const updateOrder = async (orderId, updateBody) => {
    return Order.findByIdAndUpdate(orderId, { $set: updateBody });
}

const deleteOrder = async (orderId) => {
    return Order.findByIdAndDelete(orderId);
}

module.exports = {
    createOrder,
    getOrderList,
    getOrderById,
    updateOrder,
    deleteOrder
}