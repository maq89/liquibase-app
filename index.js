const Liquibase = require('liquibase').Liquibase;
const MSSQL_DEFAULT_CONFIG = require('liquibase').MSSQL_DEFAULT_CONFIG;

const myConfig = {
  ...MSSQL_DEFAULT_CONFIG,
  changeLogFile: './changelog.xml',
  url: 'jdbc:sqlserver://host:1433;encrypt=false;databaseName=db-name',
  username: 'db-username',
  password: '123456',
  classpath: "C:/projects/liquibase-app/node_modules/liquibase/dist/drivers/mssql-jdbc-7.4.1.jre8.jar"
}
const instTs = new Liquibase(myConfig);

instTs.status();

