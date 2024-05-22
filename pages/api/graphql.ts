import apolloServer from "@/graphql/apolloServer";
import connectToDatabase from "@/graphql/database";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from 'next/server';

export default startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async req => {
    await connectToDatabase();
    return { req };
  },
});