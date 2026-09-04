import { useQuery } from '@tanstack/react-query';
import { api } from '../../../service/api';

const fetchProducts = async (search = '') => {
  const cleanSearch = search.trim();
  const endpoint = cleanSearch
    ? `/products/search?q=${encodeURIComponent(cleanSearch)}`
    : '/products?limit=12';

  const response = await api.get(endpoint);
  return response.data;
};

export function useProducts(search = '') {
  return useQuery({
    queryKey: ['products', search.trim()],
    queryFn: () => fetchProducts(search),
    placeholderData: (previousData) => previousData, // Mantém dados anteriores suaves durante busca
  });
}
