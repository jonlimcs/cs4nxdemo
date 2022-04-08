import Koa from 'koa';
import { router } from './router';

const app = new Koa();

app.use(router.allowedMethods());
app.use(router.routes());

export const App = app;
