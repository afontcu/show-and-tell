import React from 'react';
import { gql, graphql } from 'react-apollo';
import IdeaList from './IdeaList';

function IdeaListContainer({ data: { allIdeas, loading, error } }) {
  if (error) {
    console.log(error)
    return <div>Unexpected error</div>
  } 


  if (loading) {
    return <div>Loading</div>;
  } 


  return (
    <IdeaList list={allIdeas} />
  );
  
}

export default graphql(gql`
  query IdeaListQuery {
    allIdeas(orderBy: "-upvotes") {
      edges {
        node {
          id,
          userName,
          summary,
          upvotes,
          explanation,
          comments {
            edges {
              node {
                userName,
                message,
              }
            }
          }
        }
      }
    }
  }
`)(IdeaListContainer);