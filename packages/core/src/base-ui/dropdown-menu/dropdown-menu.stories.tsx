import { useDropdownMenu } from "@ellie-ui/core/hooks";
import { Meta, StoryObj } from "@storybook/react-vite";
import { LogOutIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { DropdownMenu } from ".";
import { Button } from "../button";

const meta = {
  title: "base-ui/DropdownMenu",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenu.Trigger render={<Button>열기</Button>} />
        <DropdownMenu.Content>
          <DropdownMenu.Item>드랍다운 메뉴 1</DropdownMenu.Item>
          <DropdownMenu.Item>드랍다운 메뉴 2</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
  },
};

export const WithSeparator: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenu.Trigger render={<Button>열기</Button>} />
        <DropdownMenu.Content>
          <DropdownMenu.Item>드랍다운 메뉴 1</DropdownMenu.Item>
          <DropdownMenu.Item>드랍다운 메뉴 2</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>드랍다운 메뉴 3</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
  },
};

export const WithIcon: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenu.Trigger render={<Button>열기</Button>} />
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            <PencilIcon className="size-4" />
            드랍다운 메뉴 1
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Trash2Icon className="size-4" />
            드랍다운 메뉴 2
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <LogOutIcon className="size-4" />
            드랍다운 메뉴 3
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
  },
};

export const WithGroup: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenu.Trigger render={<Button>열기</Button>} />
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            <DropdownMenu.GroupLabel>그룹 1</DropdownMenu.GroupLabel>
            <DropdownMenu.Item>드랍다운 메뉴 1</DropdownMenu.Item>
            <DropdownMenu.Item>드랍다운 메뉴 2</DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.GroupLabel>그룹 2</DropdownMenu.GroupLabel>
            <DropdownMenu.Item>드랍다운 메뉴 3</DropdownMenu.Item>
            <DropdownMenu.Item>드랍다운 메뉴 4</DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
  },
};

export const WithCheckboxItem: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenu.Trigger render={<Button>열기</Button>} />
        <DropdownMenu.Content>
          <DropdownMenu.CheckboxItem>체크박스 메뉴 1</DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem>체크박스 메뉴 2</DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem>체크박스 메뉴 3</DropdownMenu.CheckboxItem>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const dropdownMenu = useDropdownMenu();

    return (
      <DropdownMenu {...dropdownMenu.register()}>
        <DropdownMenu.Trigger render={<Button>열기</Button>} />
        <DropdownMenu.Content>
          <DropdownMenu.Item>드랍다운 메뉴 1</DropdownMenu.Item>
          <DropdownMenu.Item>드랍다운 메뉴 2</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
  },
};
