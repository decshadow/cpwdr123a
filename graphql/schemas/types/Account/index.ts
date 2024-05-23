export default `
  type Account {
    _id: ID!
    account_id: Int!
    limit: Int!
    products: [String]
  }

  type Query {
    accounts: [Account]
    account(_id: ID!): Account
  }
`