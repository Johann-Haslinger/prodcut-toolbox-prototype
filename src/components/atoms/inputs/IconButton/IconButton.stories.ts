import type { Meta, StoryObj } from "@storybook/react";
import { EyeClosed } from "lucide-react";
import "../../../index.css";
import { ButtonColor } from "../../../types/enums";
import Button from "./IconButton";

const meta = {
  title: "Atoms/IconButton",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    icon: EyeClosed,
    tooltip: "Click me!",
    color: ButtonColor.BLUE,
  },
};
