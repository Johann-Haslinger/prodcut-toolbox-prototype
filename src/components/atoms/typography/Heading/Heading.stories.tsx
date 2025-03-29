import type { Meta, StoryObj } from "@storybook/react";
import "../../../../index.css";
import Heading from "./Heading";

const meta = {
  title: "Components/Atoms/Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    children: (
      <>
        The{" "}
        <span className="text-primary-color">
          Continuous <br /> Product
        </span>{" "}
        Toolbox
      </>
    ),
  },
};
