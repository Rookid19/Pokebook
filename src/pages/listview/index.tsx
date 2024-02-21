/* eslint-disable react-hooks/exhaustive-deps */
import Card from "@/components/card/Card";
import Navbar from "@/components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Pagination from "@/components/pagination/Pagination";
import Dropdown from "@/components/dropdown/Dropdown";
import {
  fetchPokemonData,
  fetchPokemonDescription,
  pokemonsData,
  pokemonsDescriptions,
} from "@/slices/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetcher } from "@/services/global/api";

function ListView() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const pokemons = useSelector(pokemonsData);
  const pokemonsDescription = useSelector(pokemonsDescriptions); // {name: 'bulbasaur', abilities: [], cries:{}, .....}
  const dispatch = useDispatch();

  // Pagination
  // const itemsPerPage = 1;
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = pokemons?.slice(indexOfFirstItem, indexOfLastItem);
  let totalPages = Math.ceil(pokemons.length / itemsPerPage);

  useEffect(() => {
    currentItems = pokemons?.slice(indexOfFirstItem, indexOfLastItem);
    totalPages = Math.ceil(pokemons.length / itemsPerPage);
  }, [pokemons]);

  // const fetchPokemom = async () => {
  //   // Calls the fetch API endpoint and logs the response data.
  //   await fetcher(`/pokemon?limit=500&offset=0`).then((res: any) => {
  //     console.log(res.data);
  //     // Dispatches the fetched notes data to the Redux store.
  //     dispatch(fetchPokemonData(res.data?.results));
  //   });
  // };

  // Define an asynchronous function to fetch Pokemon data
  const fetchPokemom = async () => {
    // Calls the fetch API endpoint with a limit of 500 and offset of 0
    await fetcher(`/pokemon?limit=500&offset=0`).then((res: any) => {
      // Once the data is received, log the response data to the console
      console.log(res.data);

      // Assuming you have a Redux store and action creator named fetchPokemonData,
      // dispatch the fetched Pokemon data to the Redux store
      dispatch(fetchPokemonData(res.data?.results));
    });
  };

  const fetchGamesDescriptions = async () => {
    let currentItemsUrls = currentItems.map((item: any) => {
      if (pokemonsDescription.hasOwnProperty(item.name)) {
        console.log("already fetched");
        return;
      }
      return fetcher(item.url);
    });

    const filteredArray = currentItemsUrls.filter(
      (item: any) => item !== null && item !== undefined
    );
    console.log(filteredArray);

    if (filteredArray.length === 0) {
      return;
    }

    const results: any = await Promise.all(filteredArray);

    let descriptions: any = {};

    results.map((item: any, index: number) => {
      descriptions[item.data.name] = item.data;
    });

    console.log(descriptions);

    dispatch(fetchPokemonDescription(descriptions));
  };

  useEffect(() => {
    // fetchPokemom()
  }, []);

  useEffect(() => {
    fetchGamesDescriptions();
  }, [currentItems]);

  return (
    <div>
      <Navbar />
      <div className={styles.card_container}>
        {currentItems.map((item: any, i: number) => (
          <Card
            key={i}
            id={i}
            item={item}
            pokemonsDescription={pokemonsDescription}
          />
        ))}
      </div>
      {/* {currentItems.length !== } */}
      length {(Object.keys(pokemonsDescription) || []).length}{" "}
      <button onClick={fetchGamesDescriptions}>fetchGamesDescriptions</button>
      <br />
      <button onClick={fetchPokemom}>fetch</button>
      <div className={styles.pagination_offset}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <Dropdown
          selectedOption={itemsPerPage}
          setSelectedOption={setItemsPerPage}
        />
      </div>
    </div>
  );
}

export default ListView;
