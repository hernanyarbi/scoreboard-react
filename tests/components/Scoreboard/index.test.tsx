import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Scoreboard } from "../../../src/components/Scoreboard";
import userEvent from "@testing-library/user-event";

describe('<Scoreboard/>',()=>{
    test('should render with default values.',async ()=>{
        render(<Scoreboard/>)
        const teamNames = await screen.findAllByRole('heading')
        const teamScores = await screen.findAllByRole('paragraph')
        const goalButtons = await screen.findAllByRole('button')
        expect(teamNames.length).toBe(2)
        expect(teamScores.length).toBe(2)
        expect(goalButtons.length).toBe(2)
    })

    test('should add 1 in teamA score.',async ()=>{
        render(<Scoreboard/>)
        const teamAScores = (await screen.findAllByRole('paragraph'))[0]
        const teamAGoalButton = (await screen.findAllByRole('button'))[0]
        expect(parseInt(teamAScores.textContent as string)).toBe(0)
        await userEvent.click(teamAGoalButton)
        expect(parseInt(teamAScores.textContent as string)).toBe(1)
    })

    test('should add 1 in teamB score.',async ()=>{
        render(<Scoreboard/>)
        const teamBScores = (await screen.findAllByRole('paragraph'))[1]
        const teamBGoalButton = (await screen.findAllByRole('button'))[1]
        expect(parseInt(teamBScores.textContent as string)).toBe(0)
        await userEvent.click(teamBGoalButton)
        expect(parseInt(teamBScores.textContent as string)).toBe(1)  
    })
})