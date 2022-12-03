import {createLogger} from '@alwatr/logger';

export const config = {
  storage: {
    host: process.env.STORAGE_HOST ?? '127.0.0.1',
    port: process.env.STORAGE_PORT != null ? +process.env.STORAGE_PORT : 9000,
    name: process.env.STORAGE_NAME ?? 'order',
    token: process.env.STORAGE_TOKEN ?? 'YOUR_SECRET_TOKEN',
  },
  nanoServer: {
    host: process.env.HOST ?? '0.0.0.0',
    port: process.env.PORT != null ? +process.env.PORT : 8000,
    token: process.env.TOKEN ?? 'YOUR_SECRET_TOKEN',
  },
};

export const logger = createLogger('com-api');

logger.logProperty('config', config);
