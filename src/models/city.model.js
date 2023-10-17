const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
    {
        id: {
            type: String,
            trim: true
        },
        city_name: {
            type: String,
            trim: true
        },
        population: {
            type: String,
            trim: true
        },
        region: {
            type: String,
            trim: true
        },
        coordinates:{
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

const City = mongoose.model("city", citySchema);
module.exports = City;
