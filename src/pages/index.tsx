import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-start justify-center container mx-auto">
        <h1 className="font-semibold text-4xl">Projetos</h1>
        <div className="mt-2 flex flex-row">
          <Card path="/pokedex">Pokedex</Card>
          <Card path="/tabela-campeonato-brasileiro">Campeonato Brasileiro</Card>
        </div>
      </main>
    </div>
  );
}
