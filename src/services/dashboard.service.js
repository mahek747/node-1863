const { Dashboard } = require("../models");

const createDashboard = async (reqBody) => {
    return Dashboard.create(reqBody);
}

const getDashboardList = async (req, res) => {
    return Dashboard.find();
}


const getDashboardById = async (dashboardId) => {
    return Dashboard.findById(dashboardId);
}

const updateDashboard = async (dashboardId, updateBody) => {
    return Dashboard.findByIdAndUpdate(dashboardId, { $set: updateBody });
}

const deleteDashboard = async (dashboardId) => {
    return Dashboard.findByIdAndDelete(dashboardId);
}

module.exports = {
    createDashboard,
    getDashboardList,
    getDashboardById,
    updateDashboard,
    deleteDashboard
}