const gql = String.raw;

module.exports = gql`

type Client {
	_id: ID
	firstName: String
	lastName: String
	email: String
	address: String
	phoneNumber: Int
	accounts: [Account]
}

type Account {
	_id: ID
	accountType: String
	balance: Int
	clientId: Client
}

type Teller {
	_id: ID
	firstName: String
	lastName: String
	email: String
	username: String
	password: String
	homeBranch: String
}

type Query {
	getAllClients: [Client]
	getClientByFirstName(firstName: String): [Client]
	getClient(clientId: ID): Client
	getAllAccounts: [Account]
	getAccount(accountId: ID): Account
	getAllTellers: [Teller]
	getTeller(tellerId: ID): Teller
}

type Mutation {
	createClient( firstName: String, lastName: String, email: String, address: String, phoneNumber: Int ): Client
	createAccount( accountType: String, balance: Int, clientId: ID!): Account
	createTeller( firstName: String, lastName: String, email: String, username: String, password: String, homeBranch: String ): Teller
}
`;