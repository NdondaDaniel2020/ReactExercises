import { create } from 'zustand';

export interface FavoritosState {
  favoritos: string[];
  toggleFavorito: (nomeDoPokemon: string) => void;
}

export const useFavoritosStore = create<FavoritosState>((set) => ({
  favoritos: [],

  toggleFavorito: (nomeDoPokemon: string) =>
    set((estadoAtual) => {
      const jaExiste = estadoAtual.favoritos.includes(nomeDoPokemon);

      if (jaExiste) {
        return {
          favoritos: estadoAtual.favoritos.filter((nome) => nome !== nomeDoPokemon),
        };
      } else {
        return {
          favoritos: [...estadoAtual.favoritos, nomeDoPokemon],
        };
      }
    }),
}));
