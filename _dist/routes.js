"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("./controllers/UserController"));
const UserController_2 = __importDefault(require("./controllers/UserController"));
const routes = express_1.Router();
routes.get('/users', UserController_1.default.index);
routes.post('/users', UserController_1.default.store);
routes.put('/users/:id', UserController_1.default.update);
routes.delete('/users/:id', UserController_1.default.delete);
routes.get('/mentors', UserController_2.default.index);
routes.post('/mentors', UserController_2.default.store);
routes.put('/mentors/:id', UserController_2.default.update);
routes.delete('/mentors/:id', UserController_2.default.delete);
exports.default = routes;
