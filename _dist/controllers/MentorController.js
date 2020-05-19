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
const Mentor_1 = __importDefault(require("../schemas/Mentor"));
class MentorController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let contentResponse;
            try {
                const mentors = yield Mentor_1.default.find();
                const totalMentors = mentors.length;
                contentResponse = {
                    message: `Total de usuários: ${totalMentors}`,
                    userList: mentors
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
                const mentor = yield Mentor_1.default.create({ name, email, cellPhone });
                contentResponse = {
                    message: 'Usuário cadastrado com sucesso.',
                    user: {
                        name: mentor.name,
                        email: mentor.email
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
                const mentorId = request.params.id;
                const data = request.body;
                const validKeys = ['email', 'name', 'discordName', 'discordUserId', 'cellPhone', 'areas', 'mentoringSchedule', 'markedMentoring'];
                const mentor = yield Mentor_1.default.findById(mentorId);
                const mentorNew = mentor === null || mentor === void 0 ? void 0 : mentor.toObject();
                validKeys.forEach(item => {
                    if (data[item])
                        mentorNew[item] = data[item];
                });
                yield Mentor_1.default.updateOne({ _id: mentorId }, mentorNew);
                contentResponse = {
                    message: 'Usuário atualizado com sucesso.',
                    user: {
                        name: mentorNew.name,
                        email: mentorNew.email,
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
                const mentorId = request.params.id;
                const mentor = yield Mentor_1.default.findByIdAndDelete(mentorId);
                const mentorDeleted = mentor === null || mentor === void 0 ? void 0 : mentor.toObject();
                contentResponse = {
                    message: 'Usuário cadastrado com sucesso.',
                    user: {
                        name: mentorDeleted.name,
                        email: mentorDeleted.email
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
exports.default = new MentorController();
