
module.exports = {
  db: process.env.MONGO_URL || 'mongodb://localhost/chupiflum',
  env: process.env.ENV || 'dev',
  secretToken: process.env.SECRET_TOKEN || 'secret chupiflum',
  sendGridApiKey: process.env.SENDGRID_API_KEY
}
