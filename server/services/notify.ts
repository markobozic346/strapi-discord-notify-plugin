import { Strapi } from "@strapi/strapi";
import DiscordNotifyService from "../lib/DiscordNotifyService";

export default ({ strapi }: { strapi: Strapi }) => {
  const discordNotifyService = new DiscordNotifyService(strapi);

  return {
    async sendDiscordMessageService(title: string, content: string) {
      await discordNotifyService.sendDiscordMessage(title, content);
    },

    async getWebHookUrl() {},

    async saveWebHookUrl() {},
  };
};
