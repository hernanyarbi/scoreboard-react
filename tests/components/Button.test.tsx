import { screen } from "@testing-library/dom";
import { describe, test } from "vitest";
import { Button } from "../../src/components/Title/Button";

describe('<Button/>', ()=>{
    test('Default render',()=>{
        screen(<Button>Button</Button>)
    })
})