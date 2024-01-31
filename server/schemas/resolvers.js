const { Client, Account, Teller } = require('../models');

module.exports = {
	Query: {
		getAllClients: async () => {
			return await Client.find({}); // Working in sandbox
		},
		getClient: async (_, args) => {
			return await Client.findById(args.clientId).populate("accounts"); // Working in sandbox
		},
		getClientByFirstName: async (_, args) => {
			return await Client.find({firstName: args.firstName}); // Working in sandbox
		},
		getAllAccounts: async () => {
			return await Account.find({}); // Working in sandbox
		},
		getAccount: async (_, args) => {
			return await Account.findById(args.accountId).populate("clientId"); // Working in sandbox
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
			const acct = await Account.create(args); 
			 await Client.findOneAndUpdate({_id: args.clientId}, {$push: { accounts: acct._id } }, { new: true } )
			 return acct.populate("clientId") // Working in sandbox
		},
		createTeller: async (_, args) => {
			return await Teller.create(args); // Working in sandbox
		}
	}
};