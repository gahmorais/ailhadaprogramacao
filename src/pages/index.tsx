import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <header></header>
      <main className="flex flex-col items-start justify-center container mx-auto">
        <h1 className="font-semibold text-4xl">Projetos</h1>
        <div className="mt-2">
          <Card path="/pokedex">Pokedex</Card>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
