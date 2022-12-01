import {AlwatrStorageClient} from '@alwatr/storage-client';

import {config} from './config.js';

import type {Order} from './type';

export const storage = new AlwatrStorageClient<Order>(config.storage);
