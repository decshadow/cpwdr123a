import { NextApiRequest, NextApiResponse } from 'next';
import apolloServer from "@/graphql/apolloServer";
import connectToDatabase from "@/graphql/database";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import Cors from 'micro-cors';
import { RequestHandler } from 'micro';


apolloServer.start().catch(error => {
  console.error('Failed to start Apollo Server:', error);
});

const cors = Cors({
  allowMethods: ['POST', 'GET'],
  allowHeaders: ['X-Requested-With', 'Access-Control-Allow-Origin', 'Content-Type'],
  allowCredentials: true,
  origin: '*'
});

const startHandler = startServerAndCreateNextHandler<NextApiRequest>(apolloServer, {
  context: async () => {
    await connectToDatabase();
    return { req: undefined };
  },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return startHandler(req, res);
};

export default cors(handler as unknown as RequestHandler);
