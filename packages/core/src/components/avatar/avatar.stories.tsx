import { Avatar } from "@ellie-ui/core";
import { Meta, StoryObj } from "@storybook/react-vite";
import profileImage from "../../assets/images/avatar-profile-image.webp";

const meta = {
  title: "components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Avatar>
        <Avatar.Image src={profileImage} alt="프로필 이미지" />
        <Avatar.Fallback>U</Avatar.Fallback>
      </Avatar>
    );
  },
};

export const Fallback: Story = {
  render: () => {
    return (
      <Avatar>
        <Avatar.Image src="invalid-url" />
        <Avatar.Fallback>U</Avatar.Fallback>
      </Avatar>
    );
  },
};
