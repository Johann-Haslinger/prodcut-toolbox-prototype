import { Meta, StoryObj } from "@storybook/react";
import "../../../index.css";
import SubHeading from "./SubHeading";

const meta = {
  title: "Components/Typography/SubHeading",
  component: SubHeading,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SubHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    children:
      "Optimieren Sie Ihren gesamten Produktentwicklungsprozess: Von der ersten Idee über die Umsetzung bis hin zur Messung – alles in einer zentralen Toolbox.",
  },
};
