module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'still:BQRNLcJAvGlgPjko@strapi-designsys-db.cnwox.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'strapi-designsys-db'),
        username: env('DATABASE_USERNAME', 'still'),
        password: env('DATABASE_PASSWORD', 'BQRNLcJAvGlgPjko'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
