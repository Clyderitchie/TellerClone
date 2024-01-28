const { Client, Account, Teller } = require('../models');

module.exports = {
	Query: {
		getAllClients: async () => {
			return await Client.find({}); // Working in sandbox
		},
		getClient: async (_, args) => {
			return await Client.findById(args.clientId); // Working in sandbox
		},
		getAllAccounts: async () => {
			return await Account.find({}); // Working in sandbox
		},
		getAccount: async (_, args) => {
			return await Account.findById(args.accountId); // Working in sandbox
		},
		getAllTellers: async () => {
			return await Teller.find({}); // Working in sandbox
		},
		getTeller: async (_, args) => {
			return await Teller.findById(args.tellerId); // Working in sandbox
		}
	},
	Mutation: {
		createClient: async (_, args) => {
			return await Client.create(args); // Working in sandbox
		},
		createAccount: async (_, args) => {
			return await Account.create(args); // Working in sandbox
		},
		createTeller: async (_, args) => {
			return await Teller.create(args); // Working in sandbox
		}
	}
};