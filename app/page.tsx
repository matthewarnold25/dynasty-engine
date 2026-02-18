export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Dynasty Engine</h1>
        <p className="mt-4 text-gray-400">
          Superflex Trade & Contender Intelligence
        </p>   
      </div>
      import players from "../data/players.json";
      <ul>
  {players.map((player) => (
    <li key={player.name}>
      {player.name} - {player.position} - {player.value}
    </li>
  ))}
</ul>

    </main>
  );
}
