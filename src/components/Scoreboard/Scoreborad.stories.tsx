import { Meta, StoryObj } from "@storybook/react";
import { Scoreboard } from ".";

const meta = {
  title: "components/Scoreboard",
  component: Scoreboard,
  tags: ["autodocs"],
} satisfies Meta<typeof Scoreboard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Score: Story = {};
