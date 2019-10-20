require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER, // definido pelo usuário na criação do container.
  password: process.env.DB_PASS, // definido pelo usuário na criação do container.
  database: process.env.DB_NAME, // definido pelo usuário na criação do container.
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
