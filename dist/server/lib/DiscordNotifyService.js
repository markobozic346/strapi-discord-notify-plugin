"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const webhookUrl = "https://discord.com/api/webhooks/1037756726499364996/_n9-5rjMsiRNNJUCpagMzUJBCR1DpkK21JMod8H5uuNLgDVOpEd499k00xB5ATvFSuIs";
class DiscordNotifyService {
    constructor(strapi) {
        this.strapi = strapi;
    }
    // logic for sending discord message
    async sendDiscordMessage(title, content) {
        const message = {
            content: `**${title}** \n ${content}`,
            components: [
                {
                    type: 1,
                    components: [
                        {
                            type: 2,
                            label: "Click me!",
                            style: 1,
                            custom_id: "click_one",
                        },
                    ],
                },
            ],
        };
        await axios_1.default.post(webhookUrl, message);
    }
    //save webhook from admin input
    async saveDiscordWebHookUrl() { }
    //get url
    async getDiscordWebHookUrl() { }
}
exports.default = DiscordNotifyService;
