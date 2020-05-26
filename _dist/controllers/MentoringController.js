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
const Mentoring_1 = __importDefault(require("../schemas/Mentoring"));
class MentoringController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let contentResponse;
            try {
                const mentoring = yield Mentoring_1.default.find();
                const totalMentoring = mentoring.length;
                contentResponse = {
                    message: `Total de mentorias marcadas: ${totalMentoring}`,
                    mentoringList: mentoring
                };
                return response.status(200).json(contentResponse);
            }
            catch (error) {
                contentResponse = {
                    message: 'Ops! Não foi possivel listar as mmentorias, tente novamente.',
                    error
                };
                return response.status(400).json(contentResponse);
            }
        });
    }
    getById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let contentResponse;
            try {
                const mentoringId = request.params.id;
                const mentoring = yield Mentoring_1.default.findById(mentoringId);
                const mentoringNew = mentoring === null || mentoring === void 0 ? void 0 : mentoring.toObject();
                contentResponse = {
                    message: 'Mentoria atualizada com sucesso.',
                    mentoring: mentoringNew
                };
                return response.status(200).json(contentResponse);
            }
            catch (error) {
                contentResponse = {
                    message: 'Ops! Não foi possivel atualizar a mentoria, tente novamente.',
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
                const { mentor, team, date, area } = request.body;
                const mentoring = yield Mentoring_1.default.create({
                    mentor,
                    team,
                    date,
                    area,
                    state: 'Marked'
                });
                contentResponse = {
                    message: 'Mentoria cadastrada com sucesso.',
                    mentoring
                };
                return response.status(200).json(contentResponse);
            }
            catch (error) {
                contentResponse = {
                    message: 'Ops! Não foi possivel marcar a mentoria, tente novamente.',
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
                const mentoringId = request.params.id;
                const data = request.body;
                const validKeys = ['mentor', 'team', 'date', 'area', 'state', 'feedbackMentor'];
                const mentoring = yield Mentoring_1.default.findById(mentoringId);
                const mentoringNew = mentoring === null || mentoring === void 0 ? void 0 : mentoring.toObject();
                validKeys.forEach(item => {
                    if (data[item])
                        mentoringNew[item] = data[item];
                });
                yield Mentoring_1.default.updateOne({ _id: mentoringId }, mentoringNew);
                contentResponse = {
                    message: 'Mentoria atualizada com sucesso.',
                    mentoring: mentoringNew
                };
                return response.status(200).json(contentResponse);
            }
            catch (error) {
                contentResponse = {
                    message: 'Ops! Não foi possivel atualizar a mentoria, tente novamente.',
                    error
                };
                return response.status(400).json(contentResponse);
            }
        });
    }
}
exports.default = new MentoringController();
