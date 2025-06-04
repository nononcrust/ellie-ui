import {
  Badge,
  Button,
  Checkbox,
  DatePicker,
  DateRangePicker,
  Form,
  Input,
  Label,
  RadioGroup,
  Select,
  Textarea,
} from "@ellie-ui/core";
import { zodResolver } from "@hookform/resolvers/zod";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { noop } from "../../lib/utils";

const meta = {
  title: "components/Form",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Form onSubmit={(e) => e.preventDefault()} className="flex w-[20rem] flex-col gap-4">
        <Form.Item>
          <Form.Label>라벨</Form.Label>
          <Form.Control>
            <Input placeholder="텍스트를 입력해주세요" />
          </Form.Control>
          <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
        </Form.Item>
      </Form>
    );
  },
};

export const Error: Story = {
  render: () => {
    return (
      <Form onSubmit={(e) => e.preventDefault()} className="flex w-[20rem] flex-col gap-4">
        <Form.Item error>
          <Form.Label>라벨</Form.Label>
          <Form.Control>
            <Input placeholder="텍스트를 입력해주세요" />
          </Form.Control>
          <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
          <Form.ErrorMessage>에러 메시지가 여기에 표시됩니다.</Form.ErrorMessage>
        </Form.Item>
      </Form>
    );
  },
};

export const WithInput: Story = {
  render: () => {
    const schema = z.object({
      input: z.string().nonempty({ message: "에러 메시지가 여기에 표시됩니다." }),
    });

    const form = useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        input: "",
      },
    });

    const onSubmit = form.handleSubmit(noop);

    return (
      <Form onSubmit={onSubmit} className="flex w-[20rem] flex-col gap-4">
        <Form.Item error={!!form.formState.errors.input}>
          <Form.Label>라벨</Form.Label>
          <Controller
            name="input"
            control={form.control}
            render={({ field }) => (
              <Form.Control>
                <Input placeholder="텍스트를 입력해주세요" {...field} />
              </Form.Control>
            )}
          />
          <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
          <Form.ErrorMessage>{form.formState.errors.input?.message}</Form.ErrorMessage>
        </Form.Item>
        <Button type="submit">제출하기</Button>
      </Form>
    );
  },
};

export const WithTextarea: Story = {
  render: () => {
    const schema = z.object({
      textarea: z.string().nonempty({ message: "에러 메시지가 여기에 표시됩니다." }),
    });

    const form = useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        textarea: "",
      },
    });

    const onSubmit = form.handleSubmit(noop);

    return (
      <Form onSubmit={onSubmit} className="flex w-[20rem] flex-col gap-4">
        <Form.Item error={!!form.formState.errors.textarea}>
          <Form.Label>라벨</Form.Label>
          <Controller
            name="textarea"
            control={form.control}
            render={({ field }) => (
              <Form.Control>
                <Textarea placeholder="텍스트를 입력해주세요" {...field} />
              </Form.Control>
            )}
          />
          <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
          <Form.ErrorMessage>{form.formState.errors.textarea?.message}</Form.ErrorMessage>
        </Form.Item>
        <Button type="submit">제출하기</Button>
      </Form>
    );
  },
};

export const WithSelect = () => {
  const schema = z.object({
    select: z.string().nonempty({ message: "에러 메시지가 여기에 표시됩니다." }),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      select: "",
    },
  });

  const onSubmit = form.handleSubmit(noop);

  return (
    <Form onSubmit={onSubmit} className="flex w-[20rem] flex-col gap-4">
      <Form.Item error={!!form.formState.errors.select}>
        <Form.Label>라벨</Form.Label>
        <Controller
          name="select"
          control={form.control}
          render={({ field }) => (
            <Form.Control>
              <Select placeholder="항목을 선택해주세요" {...field}>
                <Select.Option value="1">옵션 1</Select.Option>
                <Select.Option value="2">옵션 2</Select.Option>
                <Select.Option value="3">옵션 3</Select.Option>
              </Select>
            </Form.Control>
          )}
        />
        <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
        <Form.ErrorMessage>{form.formState.errors.select?.message}</Form.ErrorMessage>
      </Form.Item>
      <Button type="submit">제출하기</Button>
    </Form>
  );
};

export const WithDatePicker: Story = {
  render: () => {
    const schema = z.object({
      date: z.date({ message: "에러 메시지가 여기에 표시됩니다." }),
    });

    const form = useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        date: undefined,
      },
    });

    const onSubmit = form.handleSubmit(noop);

    return (
      <Form onSubmit={onSubmit} className="flex w-[20rem] flex-col gap-4">
        <Form.Item error={!!form.formState.errors.date}>
          <Form.Label>라벨</Form.Label>
          <Controller
            name="date"
            control={form.control}
            render={({ field }) => (
              <Form.Control>
                <DatePicker placeholder="날짜를 선택해주세요." {...field} />
              </Form.Control>
            )}
          />
          <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
          <Form.ErrorMessage>{form.formState.errors.date?.message}</Form.ErrorMessage>
        </Form.Item>
        <Button type="submit">제출하기</Button>
      </Form>
    );
  },
};

export const WithDateRangePicker: Story = {
  render: () => {
    const schema = z.object({
      date: z.object(
        {
          from: z.date(),
          to: z.date(),
        },
        { message: "에러 메시지가 여기에 표시됩니다." },
      ),
    });

    const form = useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        date: undefined,
      },
    });

    const onSubmit = form.handleSubmit(noop);

    return (
      <Form onSubmit={onSubmit} className="flex w-[20rem] flex-col gap-4">
        <Form.Item error={!!form.formState.errors.date}>
          <Form.Label>라벨</Form.Label>
          <Controller
            name="date"
            control={form.control}
            render={({ field }) => (
              <Form.Control>
                <DateRangePicker placeholder="날짜 범위를 선택해주세요." {...field} />
              </Form.Control>
            )}
          />
          <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
          <Form.ErrorMessage>{form.formState.errors.date?.message}</Form.ErrorMessage>
        </Form.Item>
        <Button type="submit">제출하기</Button>
      </Form>
    );
  },
};

export const WithRadioGroup: Story = {
  render: () => {
    const schema = z.object({
      radioGroup: z.string().nonempty({ message: "에러 메시지가 여기에 표시됩니다." }),
    });

    const form = useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        radioGroup: "",
      },
    });

    const onSubmit = form.handleSubmit(noop);

    return (
      <Form onSubmit={onSubmit} className="flex w-[20rem] flex-col gap-4">
        <Form.Item error={!!form.formState.errors.radioGroup}>
          <Form.Label>라벨</Form.Label>
          <Controller
            name="radioGroup"
            control={form.control}
            render={({ field }) => (
              <Form.Control>
                <RadioGroup size="small" {...field}>
                  <RadioGroup.Option value="1">옵션 1</RadioGroup.Option>
                  <RadioGroup.Option value="2">옵션 2</RadioGroup.Option>
                  <RadioGroup.Option value="3">옵션 3</RadioGroup.Option>
                </RadioGroup>
              </Form.Control>
            )}
          />
          <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
          <Form.ErrorMessage>{form.formState.errors.radioGroup?.message}</Form.ErrorMessage>
        </Form.Item>
        <Button type="submit">제출하기</Button>
      </Form>
    );
  },
};

export const WithCheckbox: Story = {
  render: () => {
    const schema = z.object({
      checkbox: z.boolean().refine((data) => data === true, {
        message: "에러 메시지가 여기에 표시됩니다.",
      }),
    });

    const form = useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        checkbox: false,
      },
    });

    const onSubmit = form.handleSubmit(noop);

    return (
      <Form onSubmit={onSubmit} className="flex w-[20rem] flex-col gap-4">
        <Form.Item error={!!form.formState.errors.checkbox}>
          <Controller
            name="checkbox"
            control={form.control}
            render={({ field: { value, ...rest } }) => (
              <Label className="flex items-center gap-2 text-sm">
                <Form.Control>
                  <Checkbox size="small" checked={value} {...rest} />
                </Form.Control>
                서비스 이용약관에 동의합니다.
              </Label>
            )}
          />
          <Form.ErrorMessage>{form.formState.errors.checkbox?.message}</Form.ErrorMessage>
        </Form.Item>
        <Button type="submit">제출하기</Button>
      </Form>
    );
  },
};
