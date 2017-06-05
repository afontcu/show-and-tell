import React from 'react';
import { graphql } from 'react-apollo';
import IdeaList from './IdeaList';
import { IdeaListQuery } from '../../queries/IdeaListQuery';

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

export default graphql(IdeaListQuery)(IdeaListContainer);