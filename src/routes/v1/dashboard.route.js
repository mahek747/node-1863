const express = require("express");

const { dashbpardValidation } = require("../../validation");
const { dashboardController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/createdashboard",
    validate(dashboardValidation.createDashboard),
    dashboardController.createDashboard
);

router.get(
    "/getList",
    dashboardController.getDashboardList
);

router.get(
    "/getDetails/:dashboardId",
    dashboardController.getDashboardDetails
);

router.put(
    "/update/:dashboardId",
    dashboardController.updateRecord
);

router.delete(
    "/delete/:dashboardId",
    dashboardController.deleteRecord
);

module.exports = router;