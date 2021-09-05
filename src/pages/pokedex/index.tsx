import Navbar from "components/Navbar";
import Head from "next/head";

export default function Pokedex() {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/pokebola.ico" />
      </Head>
      <Navbar />
    </>
  );
}
