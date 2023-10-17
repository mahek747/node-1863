const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        restaurant:{
            type:mongoose.Types.ObjectId,
            ref:"restaurant"
        },
        owner_id: {
            type: String,
            trim: true
        },
        name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        restaurant_id: {
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

const User = mongoose.model("user", userSchema);
module.exports = User
