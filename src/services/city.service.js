const { City } = require("../models");

const createCity = async (reqBody) => {
    return City.create(reqBody);
}

const getCityList = async (req, res) => {
    return City.find();
}

const getCityById = async (cityId) => {
    return City.findById(cityId);
}

const updateCity = async (cityId, updateBody) => {
    return City.findByIdAndUpdate(cityId, { $set: updateBody });
}

const deleteCity = async (cityId) => {
    return City.findByIdAndDelete(cityId);
}

module.exports = {
    createCity,
    getCityList,
    getCityById,
    updateCity,
    deleteCity
}