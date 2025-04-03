import type { Meta, StoryObj } from "@storybook/react";
import "../../../index.css";
import { ButtonColor } from "../../../types/enums";
import IconButton from "./IconButton";

const meta = {
  title: "Components/Inputs/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    tooltip: "Click me!",
    color: ButtonColor.BLUE,
  },
};
