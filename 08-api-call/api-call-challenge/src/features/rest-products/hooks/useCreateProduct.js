import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../../service/api';

const createProduct = async (newProduct) => {
  const response = await api.post('/products/add', newProduct);
  return response.data;
};

export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      console.log('✅ Produto cadastrado com sucesso:', data);
      // Invalida todas as consultas com a chave 'products' para disparar re-fetch automático
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: (error) => {
      console.error('❌ Erro ao cadastrar produto:', error);
    },
  });
}
