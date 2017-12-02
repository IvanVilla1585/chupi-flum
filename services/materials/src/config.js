module.exports = {
  db: process.env.MONGO_URL || 'mongodb://localhost/chupiflum',
  env: process.env.ENV || 'dev'
}
