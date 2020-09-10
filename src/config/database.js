module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'pgdb',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}