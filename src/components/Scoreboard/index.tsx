import { useScoreboard } from "../../hooks/useScoreboard";
import { Button } from "../Button";
import { TeamScore } from "./TeamScore";

export const Scoreboard = () => {
  const { scoreTeamA, scoreTeamB, handleAddPoint } = useScoreboard();
  return (
    <div className="w-full max-w-md flex flex-col gap-3">
      <div className=" bg-secondary text-white p-4 rounded-2xl">
        <div className="grid grid-cols-3">
          <TeamScore teamName="Equipo 1" score={scoreTeamA} />
          <div className="flex justify-center items-center"> VS</div>
          <TeamScore teamName="Equipo 2" score={scoreTeamB} />
        </div>
      </div>
      <div className="flex justify-between px-5">
        <Button id="teamA" onClick={() => handleAddPoint("A")}>Gol</Button>
        <Button id="teamB" onClick={() => handleAddPoint("B")}>Gol</Button>
      </div>
    </div>
  );
};
