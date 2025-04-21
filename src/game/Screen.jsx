const Screen = ({ pokemones, hoverPokemon }) => {
  console.log(pokemones);

  return (
    <div className="container-screen">
      <div className="screen-text">
        <div className="screen">
          {pokemones?.map((pokemon) => (
            <div
              style={{
                backgroundColor: `${
                  hoverPokemon === pokemon.id ? 'yellow' : ''
                }`,
              }}
            >
              <img src={pokemon.sprites.front_default} alt="pokemones" />
              <p style={{ fontFamily: 'Pokemon Classic', fontSize: '8px' }}>
                {pokemon.name}
              </p>
            </div>
          ))}
        </div>
        <div className="container-text">
          <p className="text">
            Nintendo <span>GAME BOY</span>
            <span style={{ fontSize: '8px' }}> TM</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Screen;
