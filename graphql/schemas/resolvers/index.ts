import { mergeResolvers } from "@graphql-tools/merge";
import hello from "./hello";

const resolvers = [
  hello
]

export default mergeResolvers(resolvers)