import { useDropdownMenu } from "@/hooks/use-dropdown-menu";
import { Button, DropdownMenu } from "@ellie-ui/core";
import { Meta, StoryObj } from "@storybook/react";
import { LogOutIcon, PencilIcon, Trash2Icon } from "lucide-react";

const meta = {
  title: "components/DropdownMenu",
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
        <DropdownMenu.Trigger asChild>
          <Button>열기</Button>
        </DropdownMenu.Trigger>
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
        <DropdownMenu.Trigger asChild>
          <Button>열기</Button>
        </DropdownMenu.Trigger>
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
        <DropdownMenu.Trigger asChild>
          <Button>열기</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            <PencilIcon size={16} />
            드랍다운 메뉴 1
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Trash2Icon size={16} />
            드랍다운 메뉴 2
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <LogOutIcon size={16} />
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
        <DropdownMenu.Trigger asChild>
          <Button>열기</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            <DropdownMenu.Label>그룹 1</DropdownMenu.Label>
            <DropdownMenu.Item>드랍다운 메뉴 1</DropdownMenu.Item>
            <DropdownMenu.Item>드랍다운 메뉴 2</DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Label>그룹 2</DropdownMenu.Label>
            <DropdownMenu.Item>드랍다운 메뉴 3</DropdownMenu.Item>
            <DropdownMenu.Item>드랍다운 메뉴 4</DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const dropdownMenu = useDropdownMenu();

    return (
      <DropdownMenu isOpen={dropdownMenu.isOpen} onOpenChange={dropdownMenu.onOpenChange}>
        <DropdownMenu.Trigger asChild>
          <Button>열기</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>드랍다운 메뉴 1</DropdownMenu.Item>
          <DropdownMenu.Item>드랍다운 메뉴 2</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
  },
};
