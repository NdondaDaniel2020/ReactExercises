import { useState } from 'react';
import { useCreateProduct } from '../hooks/useCreateProduct';

export function CreateProductModal({ isOpen, onClose }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('smartphones');
  const [description, setDescription] = useState('');

  const createProductMutation = useCreateProduct();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !price) return;

    createProductMutation.mutate(
      {
        title: title.trim(),
        price: parseFloat(price),
        category,
        description: description.trim() || 'Produto cadastrado via useMutation do TanStack Query.',
      },
      {
        onSuccess: () => {
          setTitle('');
          setPrice('');
          setDescription('');
          onClose();
        },
      }
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Cadastrar Novo Produto</h2>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        <p className="modal-description">
          Dispara uma mutação (<code>useMutation</code>) chamando <code>POST /products/add</code> e em seguida
          invalida a query <code>['products']</code> para revalidar a lista automaticamente.
        </p>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="title">Título do Produto</label>
            <input
              id="title"
              type="text"
              placeholder="Ex: iPhone 16 Pro Max"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="price">Preço ($)</label>
              <input
                id="price"
                type="number"
                step="0.01"
                min="0.01"
                placeholder="Ex: 999.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Categoria</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops</option>
                <option value="fragrances">Fragrances</option>
                <option value="skincare">Skincare</option>
                <option value="groceries">Groceries</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              rows={3}
              placeholder="Breve descrição do produto..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {createProductMutation.isError && (
            <div className="error-alert">
              Erro: {createProductMutation.error.message}
            </div>
          )}

          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              disabled={createProductMutation.isPending}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={createProductMutation.isPending}
            >
              {createProductMutation.isPending ? 'Cadastrando...' : 'Salvar Produto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
