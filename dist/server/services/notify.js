"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DiscordNotifyService_1 = __importDefault(require("../lib/DiscordNotifyService"));
exports.default = ({ strapi }) => {
    const discordNotifyService = new DiscordNotifyService_1.default(strapi);
    return {
        async sendDiscordMessageService(title, content) {
            await discordNotifyService.sendDiscordMessage(title, content);
        },
        async getWebHookUrl() { },
        async saveWebHookUrl() { },
    };
};
