"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TeamSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    members: [{ type: String, _id: false }],
    scheduledMentoring: [{ type: String, _id: false }]
}, { timestamps: true });
exports.default = mongoose_1.model('Team', TeamSchema);
