import { gql } from 'react-apollo';

export const IdeaListQuery = gql`
  query IdeaListQuery {
    allIdeas(orderBy: "-upvotes") {
      edges {
        node {
          id,
          userName,
          summary,
          upvotes,
          explanation,
        }
      }
    }
  }
`;
