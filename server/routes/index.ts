const adminPolices = ["admin::isAuthenticatedAdmin"]; // only for internal use

const routes = [
  {
    method: "GET",
    path: "/webhook-url",
    handler: "discordNotifyController.getWebHookUrl",
    config: {
      policies: [...adminPolices],
    },
  },
  {
    method: "POST",
    path: "/webhook-url",
    handler: "discordNotifyController.saveWebHookUrl",
    config: {
      policies: [...adminPolices],
    },
  },
];

export default routes;
