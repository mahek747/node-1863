const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            trim: true
        },
        password: {
            type: String,
            trim: true
        },
        username: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        role:{
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

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
