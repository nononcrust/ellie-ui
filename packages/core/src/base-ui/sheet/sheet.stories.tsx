import { Meta, StoryObj } from "@storybook/react-vite";
import { Sheet } from ".";
import { TextField } from "../../components/text-field";
import { Button } from "../button";
import { CheckSelectBox } from "../check-select-box";
import { Checkbox } from "../checkbox";
import { Form } from "../form";
import { Select } from "../select";
import { Tabs } from "../tabs";

const meta = {
  title: "base-ui/Sheet",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Sheet>
        <Sheet.Trigger render={<Button>열기</Button>} />
        <Sheet.Content className="w-[400px]">
          <Sheet.Header>
            <Sheet.Title>시트 제목</Sheet.Title>
            <Sheet.Description>시트 설명이 여기에 표시됩니다.</Sheet.Description>
          </Sheet.Header>
        </Sheet.Content>
      </Sheet>
    );
  },
};

export const ServiceFee: Story = {
  render: () => {
    return (
      <Sheet open>
        <Sheet.Trigger render={<Button>열기</Button>} />
        <Sheet.Content className="w-[400px]">
          <Sheet.Header>
            <Sheet.Title>서비스 수수료</Sheet.Title>
            <Sheet.Description>서비스 가격 정책에 대한 자세한 정보를 확인하세요.</Sheet.Description>
            <Tabs defaultValue="info" className="mt-4">
              <Tabs.List fullWidth>
                <Tabs.Tab value="info">수수료 정보</Tabs.Tab>
                <Tabs.Tab value="policy">환불 정책</Tabs.Tab>
                <Tabs.Tab value="customer">고객 지원</Tabs.Tab>
              </Tabs.List>
            </Tabs>
          </Sheet.Header>
          <Sheet.Body>
            <TextField label={<TextField.Label>가격</TextField.Label>}>
              <TextField.Prefix>
                <span className="">$</span>
              </TextField.Prefix>
              <TextField.Input defaultValue="$29.99" />
            </TextField>
            <Form.Field className="mt-8">
              <Form.Label>구독 기간</Form.Label>
              <Select
                items={[{ label: "구독 기간", value: "subscription-period" }]}
                defaultValue="monthly"
              >
                <Select.Option value="monthly">월간 구독 - $29.99/월</Select.Option>
                <Select.Option value="yearly">연간 구독 - $299.99/년 (2개월 무료)</Select.Option>
              </Select>
            </Form.Field>
            <Checkbox className="mt-4">기존 계정을 보유하고 있습니다.</Checkbox>
            <CheckSelectBox className="mt-8">
              <CheckSelectBox.Option>
                <CheckSelectBox.Label>계좌 이체</CheckSelectBox.Label>
                <CheckSelectBox.Description>
                  은행 계좌를 통해 직접 결제합니다.
                </CheckSelectBox.Description>
              </CheckSelectBox.Option>
              <CheckSelectBox.Option>
                <CheckSelectBox.Label>신용/직불 카드</CheckSelectBox.Label>
                <CheckSelectBox.Description>
                  Visa, MasterCard, American Express 등을 포함한 주요 카드를 사용합니다.
                </CheckSelectBox.Description>
              </CheckSelectBox.Option>
              <CheckSelectBox.Option>
                <CheckSelectBox.Label>PayPal</CheckSelectBox.Label>
                <CheckSelectBox.Description>
                  PayPal 계정을 통해 안전하게 결제합니다.
                </CheckSelectBox.Description>
              </CheckSelectBox.Option>
            </CheckSelectBox>
          </Sheet.Body>
          <Sheet.Footer>
            <Button className="w-full" variant="outlined" size="large">
              취소
            </Button>
            <Button className="w-full" size="large">
              다음으로
            </Button>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet>
    );
  },
};
