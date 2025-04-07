const Screen = ({ pokemones }) => {
  console.log(pokemones);
  return (
    <div className="container-screen">
      <div className="screen-text">
        <div className="screen">
          {pokemones?.map((poke) => (
            <div
              key={poke.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '2%',
              }}
            >
              <img
                src={poke.sprites.front_default}
                alt="poke-image"
                width={50}
                height={50}
              />
              <p style={{ fontSize: '8px', fontFamily: 'Pokemon Classic' }}>
                {poke.name}
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
