import { describe, expect, test } from "vitest";
import {render, screen} from '@testing-library/react'
import { Title } from "../../src/components/Title";

describe("<Title/>", () => {
  test("Render Title component", async () => {
    render(<Title />);
    const title = screen.getByRole('heading')
    
    expect(title).toBeTruthy()
    expect(title.textContent).toContain('Title')
  });
});
