const express = require("express");

const { stateValidation } = require("../../validation");
const { stateController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/createstate",
    validate(stateValidation.createState),
    stateController.createState
);

router.get(
    "/getList",
    stateController.getStateList
);

router.get(
    "/getDetails/:stateId",

    stateController.getStateDetails
);

router.put(
    "/update/:stateId",
    stateController.updateRecord
);

router.delete(
    "/delete/:stateId",
    stateController.deleteRecord
);

module.exports = router;