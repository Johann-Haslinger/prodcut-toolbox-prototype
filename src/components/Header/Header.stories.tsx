import type { Meta, StoryObj } from "@storybook/react";
import "../../../index.css";
import Button from "./Header";

const meta = {
  title: "Components/Header",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    heading: (
      <>
        The{" "}
        <span className="text-primary-color">
          Continuous <br />
          Product
        </span>{" "}
        Toolbox
      </>
    ),
    subHeading:
      "Optimieren Sie Ihren gesamten Produktentwicklungsprozess: Von der ersten Idee über die Umsetzung bis hin zur Messung – alles in einer zentralen Toolbox.",
  },
};
