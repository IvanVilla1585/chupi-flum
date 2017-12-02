// @flow
import dotenv from 'dotenv';

dotenv.config({ silent: true });

export default {
  port: process.env.PORT || 3110,
  jwtSecret: process.env.JWTSECRET || 'your secret',
  jwtSession: { session: false },
  db: process.env.MONGO_URL || 'mongodb://localhost/chupiflum',
  userUrl: process.env.USER_URL || 'http://localhost:3000',
  categoryUrl: process.env.CATEGORY_URL || 'http://localhost:3001',
  unitUrl: process.env.UNIT_URL || 'http://localhost:3002',
  presentationUrl: process.env.PRESENTATION_URL || 'http://localhost:3003',
  machineUrl: process.env.MACHINE_URL || 'http://localhost:3004',
  processUrl: process.env.PROCESS_URL || 'http://localhost:3005',
  sengridApiKey: process.env.SENGRID_API_KEY || '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'
};
