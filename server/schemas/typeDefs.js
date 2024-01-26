const gql = String.raw;

module.exports = gql`

type Tech {
	_id: ID
	name: String
}

type Matchup {
	_id: ID
	tech1: String
	tech2: String
	tech1_votes: Int
	tech2_votes: Int
}

type Query {
	allTech: [Tech]
	getAllMatchups: [Matchup]
	getMatchup(matchupId: ID): Matchup
}

type Mutation {
	createMatchup(tech1: String, tech2: String): Matchup
	createVote(matchupId: ID, techNum: Int): Matchup
}
`;