import { gql } from '@apollo/client';

// Client Query's
export const QUERY_CLIENT = gql`
query getClient($clientId: ID) {
  getClient(clientId: $clientId) {
    _id
    firstName
    lastName
    email
    address
    phoneNumber
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

// Account Query's 
export const QUERY_ACCOUNT = gql`
 query getAccount($accountId: ID) {
  getAccount(accountId: $accountId) {
    _id
    accountType
    balance
  }
}
`;

export const QUERY_ACCOUNTS = gql`
  query getAllAccounts {
  getAllAccounts {
    _id
    accountType
    balance
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