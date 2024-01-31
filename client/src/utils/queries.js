import { gql } from '@apollo/client';

// Client Query's
export const QUERY_CLIENT = gql`
query Query($clientId: ID) {
  getClient(clientId: $clientId) {
    _id
    firstName
    lastName
    email
    address
    phoneNumber
    accounts {
      _id
      accountType
      balance
    }
  }
}
`;

export const QUERY_CLIENTS = gql`
  query getAllClients {
  getAllClients {
    _id
    firstName
    lastName
    email
    address
    phoneNumber
  }
}
`;

export const QUERY_CLIENTNAME = gql`
query getClientByFirstName($firstName: String) {
  getClientByFirstName(firstName: $firstName) {
    _id
    firstName
    lastName
    email
    address
    phoneNumber
  }
}
`

// Account Query's 
export const QUERY_ACCOUNT = gql`
query Query($accountId: ID) {
  getAccount(accountId: $accountId) {
    _id
    accountType
    balance
    clientId {
      _id
      firstName
      lastName
      email
      address
      phoneNumber
    }
  }
}
`

export const QUERY_ACCOUNTS = gql`
 query AllAccounts {
  getAllAccounts {
    _id
    accountType
    balance
    clientId {
      _id
    }
  }
}
`;

// Teller Query's
export const QUERY_TELLER = gql`
query getTeller($tellerId: ID) {
  getTeller(tellerId: $tellerId) {
    _id
    firstName
    lastName
    email
    username
    password
    homeBranch
  }
}`;

export const QUERY_TELLERS = gql`
query getAllTellers {
  getAllTellers {
    _id
    firstName
    lastName
    email
    username
    password
    homeBranch
  }
}`;