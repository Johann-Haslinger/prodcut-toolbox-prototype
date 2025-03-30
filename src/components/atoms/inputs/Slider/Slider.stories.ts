import type { Meta, StoryObj } from "@storybook/react";
import "../../../../index.css";
import Button from "./Slider";

const meta = {
  title: "Components/Atoms/Inputs/Slider",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    labelLeft: "Currently\nLearning",
    labelRight: "Already\nBuilding",
    value: 0.4,
    onChange: (value) => console.log(value),
    descriptionDict: {
      0: "I have no experience in this area.",
      0.25: "I am currently learning this skill.",
      0.5: "I am actively practicing this skill.",
      0.75: "I am building projects with this skill.",
      1: "I have mastered this skill.",
    },
  },
};
