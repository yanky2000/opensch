import gql from 'graphql-tag';

export const ADD_DELETED = gql`
  mutation AddDeleted($id: String!) {
    addDeleted(id: $id) @client{
      id
    }
  }
`;
// export const ADD_SELECTED = gql`
//   mutation AddSelected($position: String!, $id: String!) {
//     addSelected(position: $position, id: $id) @client
    
//   }
// `;
export const ADD_SELECTED = gql`
  mutation AddSelected($character: String, $position: String) {
    addSelected(character: $character, position: $position) @client
    
  }
`;