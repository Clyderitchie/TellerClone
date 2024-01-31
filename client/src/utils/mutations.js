import { gql } from '@apollo/client';

// Client Mutation
export const CREATE_CLIENT = gql`
mutation createClient($firstName: String, $lastName: String, $email: String, $address: String, $phoneNumber: Int) {
  createClient(firstName: $firstName, lastName: $lastName, email: $email, address: $address, phoneNumber: $phoneNumber) {
    _id
    firstName
    lastName
    email
    address
    phoneNumber
  }
}
`;

// Account Mutation
export const CREATE_ACCOUNT = gql`
mutation Mutation($accountType: String, $balance: Int, $clientId: ID!) {
  createAccount(accountType: $accountType, balance: $balance, clientId: $clientId) {
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
`;

// Teller Mutation
export const CREATE_TELLER = gql`
mutation createTeller($firstName: String, $lastName: String, $email: String, $username: String, $password: String, $homeBranch: String) {
  createTeller(firstName: $firstName, lastName: $lastName, email: $email, username: $username, password: $password, homeBranch: $homeBranch) {
    _id
    firstName
    lastName
    email
    username
    password
    homeBranch
  }
}
`;