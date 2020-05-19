"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../schemas/User"));
class UserController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let contentResponse;
            try {
                const users = yield User_1.default.find();
                const totalUsers = users.length;
                contentResponse = {
                    message: `Total de usuários: ${totalUsers}`,
                    userList: users
                };
                return response.status(200).json(contentResponse);
            }
            catch (error) {
                contentResponse = {
                    message: 'Ops! Ouve um erro ao listar os usuários, tente novamente.',
                    error
                };
                return response.status(400).json(contentResponse);
            }
        });
    }
    store(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let contentResponse;
            try {
                const { name, email, cellPhone } = request.body;
                const user = yield User_1.default.create({ name, email, cellPhone });
                contentResponse = {
                    message: 'Usuário cadastrado com sucesso.',
                    user: {
                        name: user.name,
                        email: user.email
                    }
                };
                return response.status(200).json(contentResponse);
            }
            catch (error) {
                contentResponse = {
                    message: 'Ops! Não conseguimos cadastrar o usuário, tente novamente.',
                    error
                };
                return response.status(400).json(contentResponse);
            }
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let contentResponse;
            try {
                const userId = request.params.id;
                const data = request.body;
                const validKeys = ['email', 'name', 'discordName', 'discordUserId', 'cellPhone', 'team'];
                const user = yield User_1.default.findById(userId);
                const userNew = user === null || user === void 0 ? void 0 : user.toObject();
                validKeys.forEach(item => {
                    if (data[item])
                        userNew[item] = data[item];
                });
                yield User_1.default.updateOne({ _id: userId }, userNew);
                contentResponse = {
                    message: 'Usuário atualizado com sucesso.',
                    user: {
                        name: userNew.name,
                        email: userNew.email,
                    }
                };
                return response.status(200).json(contentResponse);
            }
            catch (error) {
                contentResponse = {
                    message: 'Ops! Não foi possivel atualizar o usuário, tente novamente',
                    error
                };
                return response.status(400).json(contentResponse);
            }
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let contentResponse;
            try {
                const userId = request.params.id;
                const user = yield User_1.default.findByIdAndDelete(userId);
                const userDeleted = user === null || user === void 0 ? void 0 : user.toObject();
                contentResponse = {
                    message: 'Usuário cadastrado com sucesso.',
                    user: {
                        name: userDeleted.name,
                        email: userDeleted.email
                    }
                };
                return response.status(200).json(contentResponse);
            }
            catch (error) {
                contentResponse = {
                    message: 'Ops! Não conseguimos cadastrar o usuário, tente novamente.',
                    error
                };
                return response.status(400).json(contentResponse);
            }
        });
    }
}
exports.default = new UserController();
