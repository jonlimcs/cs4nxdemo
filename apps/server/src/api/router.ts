/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { shared } from '@jonlimcs/shared';

import Router from 'koa-router';
import { times, constant } from 'lodash';

const router = new Router();

router.get('/auth', async (ctx: any) => {
  ctx.body = 'auth';
});

router.get('/shared', async (ctx: any) => {
  ctx.body = shared();
});

router.get('/:number', async (ctx: any) => {
  const number = Number.isNaN(ctx.request.params.number)
    ? 100
    : ctx.request.params.number;
  ctx.body = times(number, constant('🔓')).join('');
});

export { router };
