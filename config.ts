interface Config {
    [key: string]: any;
}

const config: Config = {
    db: {
      development: 'mongodb://127.0.0.1:27017',
    },
    port: {
      development: process.env.PORT || 8080,
    },
};
  
export default config;
