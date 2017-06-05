import { gql } from 'react-apollo';

export const CreateIdeaMutation = gql`
  mutation createIdea ($userName: String!, $summary: String!) {
    createIdea(input: { userName: $userName, summary: $summary }) {
      ideaEdge {
          node {
            id, userName, summary, upvotes
          }
      }
    }
  }
`;