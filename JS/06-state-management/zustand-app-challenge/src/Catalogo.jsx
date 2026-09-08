import { useFavoritosStore } from "./useFavoritosStore";

export function Catalogo(){
    const pokemons = ['Pikachu', 'Charmander', 'Squirtle', 'Bulbasaur'];
    const toggleFavorito = useFavoritosStore(state => state.toggleFavorito);
    const favoritos = useFavoritosStore(state => state.favoritos);

    return (
        <>
            <h2>Lista de pokemons</h2>
            {
                pokemons.map(
                    pokemon => <button key={pokemon}
                                       type="button"
                                       onClick={() => toggleFavorito(pokemon)}>
                                    {favoritos.includes(pokemon) ? "Remover" : pokemon}</button>
                                    )
            }
        </>
    );
}