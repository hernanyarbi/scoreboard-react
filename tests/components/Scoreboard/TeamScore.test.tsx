import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { TeamScore } from "../../../src/components/Scoreboard/TeamScore";

describe("<TeamScore/>", () => {
  test("Should render default component", async () => {
    const teamName: string = "Equipo1";
    const score: number = 0;
    render(<TeamScore teamName={teamName} score={score} />);
    const teamScoreTitle = await screen.findByRole("heading");
    const teamScoreValue = await screen.findByRole("paragraph");
    expect(teamScoreTitle.textContent).toBe(teamName);
    expect(parseInt(teamScoreValue.textContent as string)).toBe(score);
  });
});
