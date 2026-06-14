const sql = require('mssql/msnodesqlv8');

const config = {
  connectionString: `
    Driver={ODBC Driver 18 for SQL Server};
    Server=DESKTOP-L8RK598\\SQLEXPRESS;
    Database=inventario_Paisabor;
    Trusted_Connection=Yes;
    TrustServerCertificate=Yes;
  `
};

module.exports = {
  sql,
  config
};