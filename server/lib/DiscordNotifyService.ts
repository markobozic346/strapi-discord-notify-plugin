import { Strapi } from "@strapi/strapi";
import axios from "axios";

const webhookUrl = "TESTING_URL_HERE";

class DiscordNotifyService {
  readonly strapi: Strapi;

  constructor(strapi: Strapi) {
    this.strapi = strapi;
  }

  // logic for sending discord message
  async sendDiscordMessage(title: string, content: string) {
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

    await axios.post(webhookUrl, message);
  }

  //save webhook from admin input
  async saveDiscordWebHookUrl() {}

  //get url
  async getDiscordWebHookUrl() {}
}

export default DiscordNotifyService;
