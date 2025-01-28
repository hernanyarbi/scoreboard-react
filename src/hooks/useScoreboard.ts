import { useState } from "react";

export const useScoreboard = () => {
  const [scoreTeamA, setScoreTeamA] = useState<number>(0);
  const [scoreTeamB, setScoreTeamB] = useState<number>(0);

  const handleAddPoint = (team: "A" | "B") => {
    if (team === "A") {
      setScoreTeamA(scoreTeamA + 1);
    } else {
      setScoreTeamB(scoreTeamB + 1);
    }
  };

  const handleResetScore = ()=>{
    setScoreTeamA(0)
    setScoreTeamB(0)
  }

  return {
    scoreTeamA,
    scoreTeamB,
    handleAddPoint,
    handleResetScore
  };
};
