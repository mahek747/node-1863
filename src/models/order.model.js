const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        order_id: {
            type: String,
            trim: true
        },
        time: {
            type: String,
            trim: true
        },
        address: {
            type: String,
            trim: true
        },
        items: {
            type: String,
            trim: true
        },
        promo_code:{
            type:String,
            trim:true
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

const Order = mongoose.model("order", orderSchema);
module.exports = Order;
