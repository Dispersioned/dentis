import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.VERCEL_SPACE!,
  accessToken: process.env.ACCESS_TOKEN!,
});
