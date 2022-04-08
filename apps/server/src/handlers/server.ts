/* eslint-disable @typescript-eslint/no-var-requires */
import { App } from '../api';

const sls = require('serverless-http')(App);

export const handler = async (event: any, context: any) => {
  return sls(event, context);
};
