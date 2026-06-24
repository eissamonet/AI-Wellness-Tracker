/**
 * activity-log controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::activity-log.activity-log",
  ({ strapi }) => ({
    async create(ctx) {
      const user = ctx.state.user;

      if (!user)
        return ctx.unauthorized(
          "You must be logged in to create an activity log.",
        );
      const body = ctx.request.body;
      body.users_permissions_user = user.id; // Assign the logged-in user's ID to the users_permissions_user field

      const entry = await strapi.entityService.create(
        "api::activity-log.activity-log",
        {
          data: body,
          populate: ["users_permissions_user"], // Populate the users_permissions_user relation
        },
      );
      return entry;
    },
    async find(ctx) {
      const user = ctx.state.user;

      const result = await strapi.entityService.findMany(
        "api::activity-log.activity-log",
        {
          filters: { users_permissions_user: user.id },
          populate: ["users_permissions_user"], // Populate the users_permissions_user relation
        },
      );
      return result;
    },
  }),
);
