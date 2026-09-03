import { create } from 'zustand';

export const useFavoritosStore = create((set) => ({

    favoritos: [],

    toggleFavorito: (nomeDoPokemon) => set((estadoAtual) => {
        const jaExist = estadoAtual.favoritos.includes(nomeDoPokemon);

        if (jaExist) {
            return {
                favoritos: estadoAtual.favoritos.filter(nome => nome !== nomeDoPokemon)
            };
        } else {
            return {
                favoritos: [...estadoAtual.favoritos, nomeDoPokemon]
            };
        }

    })
}));