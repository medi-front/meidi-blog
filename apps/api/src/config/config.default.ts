export = (appInfo: any) => {
  const config: any = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533201820393_3738';

  // add your config here
  config.middleware = [];

  config.orm = {
    type: 'mysql',
    host: '8.135.135.96',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'boke',
    synchronize: true,
    entities: ['src/entity/*.ts'],
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };
  return config;
};
