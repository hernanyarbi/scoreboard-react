import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
    args:{
        children: 'Default'
    }
};

export const FullButton: Story = {
    args:{
        children: 'Full Button',
        full: true
    }
};
