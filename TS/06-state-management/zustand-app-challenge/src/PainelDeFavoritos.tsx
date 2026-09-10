import { useFavoritosStore } from './useFavoritosStore';

export function PainelDeFavoritos(): React.JSX.Element {
  const favoritos = useFavoritosStore((state) => state.favoritos);

  return (
    <>
      {favoritos.length === 0 ? (
        'Nenhum favorito selecionado.'
      ) : (
        <ul>
          {favoritos.map((favorito) => (
            <li key={favorito}>{favorito}</li>
          ))}
        </ul>
      )}
    </>
  );
}
