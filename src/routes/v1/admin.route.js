const express = require("express");

const { adminValidation } = require("../../validation");
const { adminController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/createadmin",
    validate(adminValidation.createAdmin),
    adminController.createAdmins
);

router.get(
    "/getList",
    adminController.getAdminList
);

router.get(
    "/getDetails/:adminId",
    adminController.getAdminDetails
);

router.put(
    "/update/:adminId",
    adminController.updateRecord
);

router.delete(
    "/delete/:adminId",
    adminController.deleteRecord
);

module.exports = router;