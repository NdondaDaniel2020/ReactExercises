import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

export const GET_CHARACTERS = gql`
  query GetCharacters($name: String, $status: String) {
    characters(filter: { name: $name, status: $status }) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        location {
          name
        }
      }
    }
  }
`;

export function useCharacters(nameFilter = '', statusFilter = '') {
  const variables = {};
  if (nameFilter.trim()) variables.name = nameFilter.trim();
  if (statusFilter && statusFilter !== 'ALL') variables.status = statusFilter;

  return useQuery(GET_CHARACTERS, {
    variables,
    notifyOnNetworkStatusChange: true,
  });
}
