export default `
  type TransactionItem {
    date: String!
    amount: Float!
    transaction_code: String!
    symbol: String!
    price: String!
    total: String!
  }
  
  type Transaction {
    _id: ID!
    account_id: Int!
    transaction_count: Int!
    bucket_start_date: String!
    bucket_end_date: String!
    transactions: [TransactionItem!]!
  }

  type Query {
    transactions(account_id: Int!): [Transaction]
    transaction(_id: ID!): Transaction
  }
`