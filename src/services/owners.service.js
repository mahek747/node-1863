const { Owner } = require("../models");

const createOwner = async (reqBody) => {
    return Owner.create(reqBody);
}

const getOwnerList = async (req, res) => {
    return Owner.find();
}

const getOwnerById = async (ownerId) => {
    return User.findById(ownerId);
}

const updateOwner = async (ownerId, updateBody) => {
    return Owner.findByIdAndUpdate(ownerId, { $set: updateBody });
}

const deleteOwner = async (ownerId) => {
    return Owner.findByIdAndDelete(ownerId);
}

module.exports = {
    createOwner,
    getOwnerList,
    getOwnerById,
    updateOwner,
    deleteOwner
}
