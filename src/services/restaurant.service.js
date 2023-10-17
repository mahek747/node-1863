const { Restaurant } = require("../models");

const createRestaurant = async (reqBody) => {
    return Restaurant.create(reqBody);
}

const getRestaurantList = async (req, res) => {
    return Restaurant.find();
}

const getRestaurantById = async (restaurantId) => {
    return Restaurant.findById(restaurantId);
}

const updateRestaurant = async (restaurantId, updateBody) => {
    return Restaurant.findByIdAndUpdate(restaurantId, { $set: updateBody });
}

const deleteRestaurant = async (restaurantId) => {
    return Restaurant.findByIdAndDelete(restaurantId);
}

module.exports = {
    createRestaurant,
    getRestaurantList,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant
}