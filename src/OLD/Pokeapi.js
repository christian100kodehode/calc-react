import { useEffect, useState } from "react";
import axios from "axios";
import Pokecard from "./Pokecard";

const GetPokeData = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      const API_URL = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 600) + 1}`;
      const response = await axios.get(API_URL);
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div id="Container">
        <p id="smallinfo">Order: {data && data.order} </p>
        <p id="Loading">{isLoading ? "Loading new Pokemon" : "PokeDeck"} </p>
        <Pokecard data={data} />
        <br></br>
        <button onClick={() => fetchData()}>Get new Pokemon</button>
      </div>
    </div>
  );
};

export default GetPokeData;
