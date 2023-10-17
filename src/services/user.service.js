const { User } = require("../models");

const createUser = async (reqBody) => {
    return User.create(reqBody);
}

const getUserList = async (req, res) => {
    return User.find();
}

const getUserById = async (userId) => {
    return User.findById(userId);
}

const updateUser = async (userId, updateBody) => {
    return User.findByIdAndUpdate(userId, { $set: updateBody });
}

const deleteUser = async (userId) => {
    return User.findByIdAndDelete(userId);
}

module.exports = {
    createUser,
    getUserList,
    getUserById,
    updateUser,
    deleteUser
}