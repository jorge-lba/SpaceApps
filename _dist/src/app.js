"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require('dotenv/config');
const connection_1 = __importDefault(require("./database/connection"));
const routes_1 = __importDefault(require("./routes"));
class App {
    constructor() {
        this.database = connection_1.default;
        this.express = express_1.default();
        this.middlewares();
        this.database();
        this.routes();
    }
    middlewares() {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
    }
    routes() {
        this.express.use(routes_1.default);
    }
}
exports.default = new App().express;
