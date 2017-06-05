import { gql } from 'react-apollo';

export const UpvoteIdeaMutation = gql`
  mutation upvoteIdea ($IdeaID: String!) {
    upvoteIdea(input: { id: $IdeaID }) {
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

export const DownvoteIdeaMutation = gql`
  mutation downvoteIdea ($IdeaID: String!) {
    downvoteIdea(input: { id: $IdeaID }) {
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