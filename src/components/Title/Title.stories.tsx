import { Meta, StoryObj } from "@storybook/react";
import { Title } from ".";

const meta = {
  title: "components/Title",
  component: Title,
  tags: ["autodocs"],
} satisfies Meta<typeof Title>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TitleH1: Story = {};
