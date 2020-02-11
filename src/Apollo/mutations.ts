import gql from 'graphql-tag';

export const ADD_DELETED = gql`
  mutation AddDeleted($id: String!) {
    addDeleted(id: $id) @client{
      id
    }
  }
`;