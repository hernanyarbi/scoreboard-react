import { Scoreboard } from "./components/Scoreboard";

function App() {
  return (
    <div className="flex flex-col gap-6 bg-primary h-screen p-10 pt-16">
      <h1 className="text-white text-3xl font-semibold">Resultado Fácil</h1>
      <Scoreboard/>
    </div>
  );
}

export default App;
