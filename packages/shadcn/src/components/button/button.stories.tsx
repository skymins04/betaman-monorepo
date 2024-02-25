import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "shadcn/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  render: (props) => {
    return <Button {...props}>TEST</Button>;
  },
};
