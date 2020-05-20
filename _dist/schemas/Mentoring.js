"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MentoringSchema = new mongoose_1.Schema({
    mentor: { type: String, required: true },
    team: { type: String, required: true },
    date: { type: Date, required: true },
    area: { type: String, required: true },
    state: { type: String },
    feedbackMentor: { type: String }
}, { timestamps: true });
exports.default = mongoose_1.model('Mentoring', MentoringSchema);
