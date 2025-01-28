import { Scoreboard } from "./components/Scoreboard";

function App() {
  return (
    <div className="flex flex-col item items-center gap-6 h-screen p-10 pt-16 overflow-x-hidden">
      <h1 className="text-white text-3xl font-semibold">Resultado Fácil</h1>
      <Scoreboard />
    </div>
  );
}

export default App;
