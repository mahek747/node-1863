const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
    {
        restaurant_id: {
            type: String,
            trim: true
        },
        restaurant_name: {
            type: String,
            trim: true
        },
        address: {
            type: String,
            trim: true
        },
        cuisine: {
            type: String,
            trim: true
        },
        opening_hours:{
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

const Restaurant = mongoose.model("restaurant", restaurantSchema);
module.exports = Restaurant;
