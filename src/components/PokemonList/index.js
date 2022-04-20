import React from "react";
import PokemonCard from "./PokemonCard";
import { Grid } from "semantic-ui-react";
import "./PokemonCard.css";

const PokemonList = () => {
  // const [pokemons, setPokemons] = useState([]);
  const pokemons = Array(20).fill("");

  return (
    <Grid className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </Grid>
  );
};

export default PokemonList;
