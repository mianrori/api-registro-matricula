const config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  dbSid: process.env.DB_SID,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  oracleClient: process.env.ORACLE_CLIENT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
};

export { config };
export default config;
