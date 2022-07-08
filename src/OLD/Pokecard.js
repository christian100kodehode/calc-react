import Textstyle1 from "./Textstyle1";

const Pokecard = ({ data }) => {
  return (
    <>
      <Textstyle1>
        <p>{data && `${data.name}`.toUpperCase()}</p>
      </Textstyle1>
      <div id="infocard">
        <p>Height: {data.height * 10} cm</p>
        <p>Weight: {data.weight / 10} kg</p>
      </div>
      <img id="PokemonImg" alt="PokemonImage" src={data.sprites && data.sprites.front_default}></img>
    </>
  );
};

export default Pokecard;
