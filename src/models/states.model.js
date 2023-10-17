const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
    {
        city: {
            type: mongoose.Types.ObjectId,
            ref: "city"
        },
        id: {
            type: String,
            trim: true
        },
        state_name: {
            type: String,
            trim: true
        },
        abbreviation: {
            type: String,
            trim: true
        },
        capital_city: {
            type: String,
            trim: true
        },
        area:{
            type:String,
            trim:true
        },
        region:{
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

const State = mongoose.model("state", stateSchema);
module.exports = State;
