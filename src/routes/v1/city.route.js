const express = require("express");

const { cityValidation } = require("../../validation");
const { cityController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/createcity",
    validate(cityValidation.createCity),
    cityController.createCity
);

router.get(
    "/getList",
    cityController.getCityList
);

router.get(
    "/getDetails/:stateId",
    cityController.getCityDetails
);

router.put(
    "/update/:cityId",
    cityController.updateRecord
);

router.delete(
    "/delete/:stateId",
    cityController.deleteRecord
);

module.exports = router;