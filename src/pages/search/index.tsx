import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";
import { fetcher } from "@/services/global/api";
import { toast } from "react-toastify";
import Card from "@/components/card/Card";

function Search() {
  const { name }: any = useRouter().query;
  const [data, setData] = useState([]);

  let item = { name };

  const fetchPokemom = async () => {
    // Calls the fetch API endpoint with a limit of 500 and offset of 0
    await fetcher(`/pokemon/${name}`)
      .then((res: any) => {
        // Once the data is received, log the response data to the console
        console.log(res.data);

        let description: any = {};
        description[name] = name;
        description[name] = res.data;

        console.log(description, "nnn");

        setData(description);
      })
      .catch((err: any) => {
        toast.error(err.response.data, {
          position: "top-center",
        });
      });
  };

  useEffect(() => {
    if (name) {
      console.log(name);
      fetchPokemom();
    }
  }, [name]);

  //   const RenderCard = useCallback(
  //     () => <Card id={1} item={item} pokemonsDescription={data} />,
  //     [data]
  //   );
  return (
    <div>
      <div className={styles.title}>Search results: </div>

      <div className={styles.content}>
        <Card id={1} item={item} pokemonsDescription={data} />,
      </div>
    </div>
  );
}

export default Search;
