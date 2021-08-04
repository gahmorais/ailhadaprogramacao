import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header></header>
      <main className="flex items-center justify-center">
        <Link href="/pokedex">
          <a className="font-semibold text-6xl">Pokedex1</a>
        </Link>
      </main>
      <footer></footer>
    </div>
  );
}
