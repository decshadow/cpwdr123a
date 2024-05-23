import { mergeResolvers } from "@graphql-tools/merge";
import hello from "./hello";
import Account from "./Account";
import Customer from "./Customer";

const resolvers = [
  hello,
  Account,
  Customer
]

export default mergeResolvers(resolvers)