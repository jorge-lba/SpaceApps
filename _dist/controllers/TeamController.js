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
const Team_1 = __importDefault(require("../schemas/Team"));
class TeamController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let contentResponse;
            try {
                const teams = yield Team_1.default.find();
                const totalTeams = teams.length;
                contentResponse = {
                    message: `Total de times cadastrados: ${totalTeams}`,
                    teamList: teams
                };
                return response.status(200).json(contentResponse);
            }
            catch (error) {
                contentResponse = {
                    message: 'Ops! Ouve um erro ao listar os times, tente novamente.',
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
                const { name, members } = request.body;
                const team = yield Team_1.default.create({ name, members });
                contentResponse = {
                    message: 'Time criado com sucesso.',
                    team
                };
                return response.status(200).json(contentResponse);
            }
            catch (error) {
                contentResponse = {
                    message: "Ops! Não foi possivel cadastra o time, tente novamente!",
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
                const teamId = request.params.id;
                const data = request.body;
                const validKeys = ['name', 'members', 'scheduledMentoring'];
                const team = yield Team_1.default.findById(teamId);
                const teamNew = team === null || team === void 0 ? void 0 : team.toObject();
                validKeys.forEach(item => {
                    if (data[item])
                        teamNew[item] = data[item];
                });
                yield Team_1.default.updateOne({ _id: teamId }, teamNew);
                contentResponse = {
                    message: 'Time atualizado com sucesso.',
                    team: {
                        name: teamNew.name,
                        members: teamNew.members,
                        scheduledMentoring: teamNew.scheduledMentoring
                    }
                };
                return response.status(200).json(contentResponse);
            }
            catch (error) {
                contentResponse = {
                    message: 'Ops! Não foi possivel atualizar o time, tente novamente.',
                    error
                };
                return response.status(400).json(contentResponse);
            }
        });
    }
}
exports.default = new TeamController();
