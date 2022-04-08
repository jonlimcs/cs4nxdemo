import express from 'express';
import { ApolloServer } from 'apollo-server-lambda';
import { graphqlSchema } from '../graphql';

const server = new ApolloServer({
  schema: graphqlSchema,
  context: ({ event, context, express }) => ({
    headers: express.req.headers,
    functionName: context.functionName,
    event,
    context,
    expressRequest: express.req,
    requestConext: express.req,
  }),
});

export const handler = server.createHandler({
  expressAppFromMiddleware(middleware) {
    const app = express();
    app.disable('x-powered-by');
    app.use(middleware);
    return app;
  },
});
