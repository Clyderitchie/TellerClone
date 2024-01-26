import { gql } from '@apollo/client';

export const QUERY_TECH = gql`
  query allTech {
    allTech {
      _id
      name
    }
  }
`;

export const QUERY_MATCHUPS = gql`
  query getAllMatchups {
    getAllMatchups {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const QUERY_MATCHUP = gql`
  query getMatchup($matchupId: ID) {
    getMatchup(matchupId: $matchupId) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;