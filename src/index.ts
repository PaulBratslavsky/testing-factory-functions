import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */

  register({ strapi }: { strapi: Core.Strapi }) {},


  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const factoryRoutes = strapi.plugins["my-plugin"].routes["post"].routes

    console.log("Before adding custom route:", factoryRoutes.length);
    
    // Add additional routes to factory routes
    factoryRoutes.push({
      method: 'GET',
      path: '/posts/custom',
      handler: () => "hello from bootstrap",
      config: {},
      info: {
        type: 'content-api'
      }
    });

    console.log("After adding custom route:", factoryRoutes.length);
    console.log("Last route:", factoryRoutes[factoryRoutes.length - 1]);
  },
};
