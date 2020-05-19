"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("./controllers/UserController"));
const MentorController_1 = __importDefault(require("./controllers/MentorController"));
const routes = express_1.Router();
routes.get('/users', UserController_1.default.index);
routes.post('/users', UserController_1.default.store);
routes.put('/users/:id', UserController_1.default.update);
routes.delete('/users/:id', UserController_1.default.delete);
routes.get('/mentors', MentorController_1.default.index);
routes.post('/mentors', MentorController_1.default.store);
routes.put('/mentors/:id', MentorController_1.default.update);
routes.delete('/mentors/:id', MentorController_1.default.delete);
exports.default = routes;
