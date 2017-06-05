import { gql } from 'react-apollo';

export const createIdeaQuery = gql`
  mutation createIdea ($userName: String!, $summary: String!) {
    createIdea(input: { userName: $userName, summary: $summary }) {
      idea {
          id, userName, summary, upvotes
      }
    }
  }
`;