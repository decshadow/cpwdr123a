import gql from "graphql-tag";

export const GET_CUSTOMERS = gql`
  query getCustomers($input: SearchCustomersInput) {
    customers(input: $input) {
      customers {
        _id
        username
        name
        address
        birthdate
        email
      }
      skip
      limit
      totalCustomers
    }
  }
`;

export const GET_CUSTOMER = gql`
  query getCustomer($_id: ID!) {
    customer(_id: $_id) {
      _id
      username
      name
      address
      birthdate
      email
      accounts {
        _id
        account_id
        limit
        products
      }
      tier_and_details {
        tier
        benefits
        active
        id
      }
    }
  }
`;
