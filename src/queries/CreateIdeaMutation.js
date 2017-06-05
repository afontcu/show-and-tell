import { gql } from 'react-apollo';

export const CreateIdeaMutation = gql`
  mutation createIdea ($userName: String!, $summary: String!, $explanation: String!) {
    createIdea(input: { userName: $userName, summary: $summary, explanation: $explanation }) {
      ideaEdge {
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