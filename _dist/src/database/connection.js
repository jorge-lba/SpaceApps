"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var env_1 = __importDefault(require("../../env"));
function database() {
    mongoose_1.default.connect(env_1.default.URL_DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
exports.default = database;
