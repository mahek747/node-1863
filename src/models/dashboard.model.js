const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user"
        },
        order:{
            type:mongoose.Types.ObjectId,
            ref:"order"
        },
        favourite: {
            type: String,
            trim: true
        },
        notification: {
            type: String,
            trim: true
        },
        account_settings: {
            type: String,
            trim: true
        },
        search: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Dashboard = mongoose.model("dashboard", dashboardSchema);
module.exports = Dashboard;
