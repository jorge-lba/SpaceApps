"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MentorSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, brequired: true },
    discordName: { type: String },
    discordUserId: { type: Number },
    cellPhone: { type: String },
    areas: [{ type: String }],
    mentoringSchedule: [{
            area: { type: String, required: true },
            dates: [{
                    date: { type: Date, required: true },
                    state: { type: String, default: 'Open' }
                }]
        }],
    markedMentoringID: [{ type: String }]
}, {
    timestamps: true
});
exports.default = mongoose_1.model('Mentor', MentorSchema);
