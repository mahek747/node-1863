const { State } = require("../models");

const createState = async (reqBody) => {
    return State.create(reqBody);
}

const getStateList = async (req, res) => {
    return State.find();
}

const getStateById = async (stateId) => {
    return State.findById(stateId);
}

const updateState = async (stateId, updateBody) => {
    return State.findByIdAndUpdate(stateId, { $set: updateBody });
}

const deleteState = async (stateId) => {
    return State.findByIdAndDelete(stateId);
}

module.exports = {
    createState,
    getStateList,
    getStateById,
    updateState,
    deleteState
}