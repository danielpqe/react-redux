import React, { useEffect } from "react";
import { connect } from "react-redux";
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList/index";
import { getPokemons } from "../../api/getPokemons";
import { setPokemon } from "../../actions/index";
import axios from "axios";

import "./styles.css";

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemon(value)),
});

//const URL = process.env.POKEAPI || "https://pokeapi.co/api/v2/";
const URL = "https://pokeapi.co/api/v2//pokemon?limit=10";

// const axiosInstance = axios.create({
//   baseURL: URL,
// });

const myInit = {
  method: "HEAD",
  mode: "no-cors",
};

const myRequest = new Request(URL, myInit);

fetch(myRequest)
  .then(function (response) {
    return response;
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (e) {
    console.log(e);
  });

function Home({ list, setPokemons }) {
  // useEffect(() => {
  //   getPokemons().then((res) => console.log("RES", res));
  // });

  return (
    <div className="Home">
      <Searcher />
      <PokemonList />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
