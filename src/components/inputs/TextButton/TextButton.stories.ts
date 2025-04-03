import type { Meta, StoryObj } from "@storybook/react";
import "../../../index.css";
import { ButtonColor } from "../../../types/enums";
import TextButton from "./TextButton";

const meta = {
  title: "Components/Inputs/TextButton",
  component: TextButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    children: "Click Me!",
    color: ButtonColor.BLUE,
  },
};
