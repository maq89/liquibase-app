const Liquibase = require('liquibase').Liquibase;
const MSSQL_DEFAULT_CONFIG = require('liquibase').MSSQL_DEFAULT_CONFIG;
const dotenv = require('dotenv').config().parsed;

const myConfig = {
  ...MSSQL_DEFAULT_CONFIG,
  changeLogFile: './db/changelog.xml',
  url: 'jdbc:sqlserver://'+dotenv.dbservername+':1433;encrypt=false;databaseName='+dotenv.dbname,
  username: dotenv.dbusername,
  password: dotenv.dbpassword,
  classpath: "./node_modules/liquibase/dist/drivers/mssql-jdbc-7.4.1.jre8.jar",
}
const instTs = new Liquibase(myConfig);

instTs.update();

