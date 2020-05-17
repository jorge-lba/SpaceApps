"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    discordName: {
        type: String
    },
    discordUserId: {
        type: Number,
        unique: true
    },
    cellPhone: {
        type: String
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model('User', UserSchema);
