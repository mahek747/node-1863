const { Admin } = require("../models");

const createAdmin = async (reqBody) => {
    return Admin.create(reqBody);
}

const getAdminList = async (req, res) => {
    return Admin.find();
}


const getAdminById = async (adminId) => {
    return Admin.findById(adminId);
}

const updateAdmin = async (adminId, updateBody) => {
    return Admin.findByIdAndUpdate(adminId, { $set: updateBody });
}

const deleteAdmin = async (adminId) => {
    return Admin.findByIdAndDelete(adminId);
}

module.exports = {
    createAdmin,
    getAdminList,
    getAdminById,
    updateAdmin,
    deleteAdmin
}