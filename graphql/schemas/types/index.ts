import { mergeTypeDefs } from "@graphql-tools/merge"; 
import hello from "./hello";

const typeDefs = [
    hello
]

export default mergeTypeDefs(typeDefs)