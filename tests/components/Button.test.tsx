import { screen } from "@testing-library/dom";
import { describe, expect, test, vi } from "vitest";
import { Button } from "../../src/components/Title/Button";
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

describe('<Button/>', ()=>{
    test('should to render default button component.',()=>{
        const buttonContent = 'DefaultButton'
        render(<Button>{buttonContent}</Button>)
        const button = screen.getByRole('button')
        expect(button).toBeTruthy()
        expect(button.textContent).toBe(buttonContent)
    })
    test('should to render full with button component.',()=>{
        const buttonContent = 'DefaultButton'
        render(<Button full>{buttonContent}</Button>)
        const button = screen.getByRole('button')
        expect(button).toBeTruthy()
        expect(button.classList).toContain('w-full')
        expect(button.textContent).toBe(buttonContent)
    })
    test('should to do click.',async ()=>{
        const clickedButton = vi.fn(()=>{})
        const buttonContent = 'DefaultButton'
        render(<Button onClick={clickedButton}>{buttonContent}</Button>)
        const button = screen.getByRole('button')
        await userEvent.click(button)
        expect(button).toBeTruthy()
        expect(clickedButton).toHaveBeenCalled()
    })
})