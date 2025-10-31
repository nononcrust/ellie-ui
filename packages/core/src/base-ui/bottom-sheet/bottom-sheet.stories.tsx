import { useBottomSheet, useSelect } from "@ellie-ui/core/hooks";
import { Meta, StoryObj } from "@storybook/react-vite";
import { BottomSheet } from ".";
import { Button } from "../button";

const meta = {
  title: "base-ui/BottomSheet",
  component: BottomSheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const select = useSelect("1");

    return (
      <BottomSheet>
        <BottomSheet.Trigger render={<Button>바텀시트</Button>} />
        <BottomSheet.Content>
          <BottomSheet.Header>
            <BottomSheet.Title>바텀시트 제목</BottomSheet.Title>
            <BottomSheet.Description className="sr-only">바텀시트 설명</BottomSheet.Description>
          </BottomSheet.Header>
          <BottomSheet.Body>
            <BottomSheet.SelectGroup {...select.register()}>
              <BottomSheet.SelectItem value="1">선택 1</BottomSheet.SelectItem>
              <BottomSheet.SelectItem value="2">선택 2</BottomSheet.SelectItem>
              <BottomSheet.SelectItem value="3">선택 3</BottomSheet.SelectItem>
              <BottomSheet.SelectItem value="4">선택 4</BottomSheet.SelectItem>
            </BottomSheet.SelectGroup>
          </BottomSheet.Body>
        </BottomSheet.Content>
      </BottomSheet>
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    const select = useSelect("1");

    return (
      <BottomSheet>
        <BottomSheet.Trigger render={<Button>바텀시트</Button>} />
        <BottomSheet.Content>
          <BottomSheet.Header>
            <BottomSheet.Title>바텀시트 제목</BottomSheet.Title>
            <BottomSheet.Description>바텀시트 설명이 여기에 들어갑니다.</BottomSheet.Description>
          </BottomSheet.Header>
          <BottomSheet.Body>
            <BottomSheet.SelectGroup {...select.register()}>
              <BottomSheet.SelectItem value="1">선택 1</BottomSheet.SelectItem>
              <BottomSheet.SelectItem value="2">선택 2</BottomSheet.SelectItem>
              <BottomSheet.SelectItem value="3">선택 3</BottomSheet.SelectItem>
              <BottomSheet.SelectItem value="4">선택 4</BottomSheet.SelectItem>
            </BottomSheet.SelectGroup>
          </BottomSheet.Body>
        </BottomSheet.Content>
      </BottomSheet>
    );
  },
};

export const ScrollBody: Story = {
  render: () => {
    const select = useSelect("1");

    return (
      <BottomSheet>
        <BottomSheet.Trigger render={<Button>바텀시트</Button>} />
        <BottomSheet.Content>
          <BottomSheet.Header>
            <BottomSheet.Title>바텀시트 제목</BottomSheet.Title>
            <BottomSheet.Description>바텀시트 설명이 여기에 들어갑니다.</BottomSheet.Description>
          </BottomSheet.Header>
          <BottomSheet.Body>
            <BottomSheet.SelectGroup {...select.register()}>
              {Array.from({ length: 20 }).map((_, index) => (
                <BottomSheet.SelectItem key={index} value={index.toString()}>
                  선택 {index}
                </BottomSheet.SelectItem>
              ))}
            </BottomSheet.SelectGroup>
          </BottomSheet.Body>
        </BottomSheet.Content>
      </BottomSheet>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const select = useSelect("1");

    return (
      <BottomSheet>
        <BottomSheet.Trigger render={<Button>바텀시트</Button>} />
        <BottomSheet.Content>
          <BottomSheet.Header>
            <BottomSheet.Title>바텀시트 제목</BottomSheet.Title>
            <BottomSheet.Description>바텀시트 설명이 여기에 들어갑니다.</BottomSheet.Description>
          </BottomSheet.Header>
          <BottomSheet.Body>
            <BottomSheet.SelectGroup {...select.register()}>
              <BottomSheet.SelectItem value="1">선택 1</BottomSheet.SelectItem>
              <BottomSheet.SelectItem value="2">선택 2</BottomSheet.SelectItem>
              <BottomSheet.SelectItem value="3">선택 3</BottomSheet.SelectItem>
              <BottomSheet.SelectItem value="4">선택 4</BottomSheet.SelectItem>
            </BottomSheet.SelectGroup>
          </BottomSheet.Body>
          <BottomSheet.Footer className="gap-2">
            <BottomSheet.Close
              render={
                <Button className="w-full" size="xlarge" variant="secondary">
                  취소
                </Button>
              }
            />
            <BottomSheet.Close
              render={
                <Button className="w-full" size="xlarge">
                  확인
                </Button>
              }
            />
          </BottomSheet.Footer>
        </BottomSheet.Content>
      </BottomSheet>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const bottomSheet = useBottomSheet();
    const select = useSelect("1");

    return (
      <BottomSheet {...bottomSheet.register()}>
        <BottomSheet.Trigger render={<Button>바텀시트</Button>} />
        <BottomSheet.Content>
          <BottomSheet.Header>
            <BottomSheet.Title>바텀시트 제목</BottomSheet.Title>
            <BottomSheet.Description className="sr-only">바텀시트 설명</BottomSheet.Description>
          </BottomSheet.Header>
          <BottomSheet.Body>
            <BottomSheet.SelectGroup {...select.register()}>
              <BottomSheet.SelectItem value="1">선택 1</BottomSheet.SelectItem>
              <BottomSheet.SelectItem value="2">선택 2</BottomSheet.SelectItem>
              <BottomSheet.SelectItem value="3">선택 3</BottomSheet.SelectItem>
              <BottomSheet.SelectItem value="4">선택 4</BottomSheet.SelectItem>
            </BottomSheet.SelectGroup>
          </BottomSheet.Body>
        </BottomSheet.Content>
      </BottomSheet>
    );
  },
};
