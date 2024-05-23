import { mergeTypeDefs } from "@graphql-tools/merge"; 
import hello from "./hello";
import Account from "./Account";
import Transaction from "./Transaction";
import Customer from "./Customer";

const typeDefs = [
    hello,
    Account,
    Customer,
    Transaction,
]

export default mergeTypeDefs(typeDefs)