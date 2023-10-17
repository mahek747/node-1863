const { stateService } = require("../services");

const createState = async (req, res) => {
  try {
    const reqBody = req.body;
    const state = await stateService.createState(reqBody);
    if (!state) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { state },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getStateList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await stateService.getStateList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of States successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getDetails = async (req, res) => {
  try {
    const getDetails = await stateService.getStateById(req.params.stateId);
    if (!getDetails) {
      throw new Error("ooppsss!... State not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of State successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateDetails = async (req, res) => {
  try {
    const stateId = req.params.stateId;
    const stateExists = await stateService.getStateById(stateId);
    if (!stateExists) {
      throw new Error("State not found!");
    }

    await stateService.updateDetails(stateId, req.body);

    res
      .status(200)
      .json({ success: true, message: "State details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteState = async (req, res) => {
  try {
    const stateId = req.params.stateId;
    const stateExists = await stateService.getStateById(stateId);
    if (!stateExists) {
      throw new Error("State not found!");
    }

    await stateService.deleteState(stateId);

    res.status(200).json({
      success: true,
      message: "State delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createState,
  getStateList,
  getDetails,
  updateDetails,
  deleteState,
};
