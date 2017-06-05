import { gql } from 'react-apollo';

export const UpvoteIdeaQuery = gql`
  mutation upvoteIdea ($IdeaID: String!) {
    upvoteIdea(input: { id: $IdeaID }) {
      idea {
          upvotes
      }
    }
  }
`;