const express = require("express");

const { orderValidation } = require("../../validation");
const { orderController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/createorder",
    validate(orderValidation.createOrder),
    orderController.createOrder
);

router.get(
    "/getList",
    orderController.getOrderList
);

router.get(
    "/getDetails/:orderId",
    orderController.getOrderDetails
);

router.put(
    "/update/:orderId",
    orderController.updateRecord
);

router.delete(
    "/delete/:orderId",
    orderController.deleteRecord
);

module.exports = router;