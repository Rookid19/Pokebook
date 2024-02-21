import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/images/poke_logo.svg";
import { RiSearch2Line } from "react-icons/ri";
import { useRouter } from "next/router";
import useModal from "@/components/modal/Modal";

export default function Home() {
  const router = useRouter();
  const { colorTheme }: any = useModal();

  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <>
      <Head>
        <title>PokeBook</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Image src={logo} alt="PokeBook Logo" />
        <div className={styles.name}>
          Poké{" "}
          <span id={styles.book} style={{ color: colorTheme }}>
            book
          </span>
        </div>
        <div className={styles.info}>
          Largest Pokémon index with information <br /> about every Pokemon you
          can think of.
        </div>

        <div
          className={styles.search_container}
          style={{
            backgroundColor: colorTheme,
          }}
        >
          <input
            className={styles.search}
            placeholder="Enter pokemon name"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <div
            className={styles.search_circle}
            style={{
              backgroundColor: colorTheme,
              pointerEvents: searchInput.length > 0 ? "auto" : "none",
            }}
            onClick={() => router.push(`/search?name=${searchInput}`)}
          >
            <RiSearch2Line color={"white"} size={24} />
          </div>
        </div>
        <div className={styles.view} onClick={() => router.push("/listview")}>
          View all
        </div>
        <br />
        <br />
      </main>
    </>
  );
}
