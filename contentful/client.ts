import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.DELIVERY_ACCESS_TOKEN!,
});
