export default `
  type TierDetails {
    tier: String!
    benefits: [String!]!
    active: Boolean!
    id: ID!
  }

  type Customer {
    _id: ID!
    username: String!
    name: String!
    address: String!
    birthdate: String!
    email: String!
    accounts: [Account]
    tier_and_details: [TierDetails]
  }

  input SearchCustomersInput {
    limit: Int
    skip: Int
  }

  type Customers {
    customers: [Customer!]
    skip: Int
    limit: Int
    totalCustomers: Int
  }
  

  type Query {
    customers(input: SearchCustomersInput): Customers
    customer(_id: ID!): Customer
  }
`