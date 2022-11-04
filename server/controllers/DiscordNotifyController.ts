import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  getWebHookUrl(ctx) {
    // ctx.body = strapi.plugin("discord-notify").service("notify").getDiscordWebHookUrl();
  },

  saveWebHookUrl(ctx) {},
});
