/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'vtasks',
    environment: environment,
    contentSecurityPolicy: {
      'connect-src': "'self' wss://*firebaseio.com"
    },
    // firebase: 'https://vtasks-e1aa1.firebaseio.com/',
    firebase: {
      apiKey: "AIzaSyD_UGttCy0lqnDmzEiDa5gP-2gD4I7yv2w",
      authDomain: "vtasks-e1aa1.firebaseapp.com",
      databaseURL: "https://vtasks-e1aa1.firebaseio.com",
      projectId: "vtasks-e1aa1",
      storageBucket: "vtasks-e1aa1.appspot.com",
      messagingSenderId: "209480960440"
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
