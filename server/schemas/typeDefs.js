const gql = String.raw;

module.exports = gql`

type Client {
	_id: ID
	firstName: String
	lastName: String
	email: String
	address: String
	phoneNumber: Int
}

type Account {
	_id: ID
	accountType: String
	balance: Int
}

type Query {
	getAllClients: [Client]
	getClient(clientId: ID): Client
	getAllAccounts: [Account]
	getAccount(accountId: ID): Account 
}

type Mutation {
	createClient( firstName: String, lastName: String, email: String, address: String, phoneNumber: Int ): Client
	createAccount( accountType: String, balance: Int ): Account
}
`;