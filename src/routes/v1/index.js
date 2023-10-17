const express = require("express");

const userRoute = require("./user.route");
const cityRoute = require("./city.route");
const statesRoute = require("./states.route");
const dashboardRoute = require("./dashboard.route");
const orderRoute = require("./order.route");
const restaurantRoute = require("./restaurant.route");
const ownerRoute = require("./owner.route");
const adminRoute = require("./admin.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/city", cityRoute);
router.use("/states", statesRoute);
router.use("/dashboard", dashboardRoute);
router.use("/order", orderRoute);
router.use("/restaurant", restaurantRoute);
router.use("/owner", ownerRoute);
router.use("/admin", adminRoute);

module.exports = router;