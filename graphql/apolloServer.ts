import { ApolloServer } from "@apollo/server";
import { schema } from './schemas';

const apolloServer = new ApolloServer({
  schema,
})

export default apolloServer