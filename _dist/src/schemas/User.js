"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    email: String,
    fristName: String,
    lastName: String
}, {
    timestamps: true
});
UserSchema.methods.fullName = function () {
    return this.fristName + " " + this.lastName;
};
exports.default = mongoose_1.model('User', UserSchema);
