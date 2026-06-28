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
      const { name, duration, calories } = ctx.request.body.data;

    const entry = await strapi.entityService.create("api::activity-log.activity-log", {
        data: {
            name,
            duration,
            calories,
            users_permissions_user: user.id,
        },
        populate: {
            users_permissions_user: {
                fields: ['id', 'username', 'email']
            }
        },
    });

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
    async findOne(ctx) {
      const user = ctx.state.user;
      const { id } = ctx.params;

      const result = await strapi.entityService.findMany(
        "api::activity-log.activity-log",
        {
          filters: { id, users_permissions_user: user.id },
          populate: ["users_permissions_user"], // Populate the users_permissions_user relation
        },
      )
      if(!result.length) return ctx.notFound('Not Found')
      return result[0];
    },
  })
);
