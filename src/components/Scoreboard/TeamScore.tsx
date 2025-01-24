interface TeamScoreProps {
  teamName: string;
  score: number;
}

export const TeamScore = ({ teamName, score }: TeamScoreProps) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold">{teamName}</h2>
      <p className="text-5xl font-bold">{score}</p>
    </div>
  );
};
