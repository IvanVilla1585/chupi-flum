module.exports = {
  db: process.env.MONGO_URL || 'mongodb://localhost/chupiflum',
  env: process.env.ENV || 'dev',
	secretToken: 'Secret chupiflum',
	sendGridApiKey: process.env.SEND_GRID_API_KEY || "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"
}
