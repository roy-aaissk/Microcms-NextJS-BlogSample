import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'bask',
  apiKey: process.env.API_KEY,
});