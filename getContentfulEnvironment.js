/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const contentfulManagement = require('contentful-management');

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.MANAGEMENT_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT));
};
