import {
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
        <Form.Field>
          <Form.Label>라벨</Form.Label>
          <Form.Control>
            <Input placeholder="텍스트를 입력해주세요" />
          </Form.Control>
          <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
        </Form.Field>
      </Form>
    );
  },
};

export const Invalid: Story = {
  render: () => {
    return (
      <Form onSubmit={(e) => e.preventDefault()} className="flex w-[20rem] flex-col gap-4">
        <Form.Field invalid>
          <Form.Label>라벨</Form.Label>
          <Form.Control>
            <Input placeholder="텍스트를 입력해주세요" />
          </Form.Control>
          <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
          <Form.ErrorMessage>에러 메시지가 여기에 표시됩니다.</Form.ErrorMessage>
        </Form.Field>
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
        <Controller
          name="input"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.Field invalid={fieldState.invalid}>
              <Form.Label>라벨</Form.Label>
              <Form.Control>
                <Input placeholder="텍스트를 입력해주세요" {...field} />
              </Form.Control>
              <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
              <Form.ErrorMessage>{fieldState.error?.message}</Form.ErrorMessage>
            </Form.Field>
          )}
        />
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
        <Controller
          name="textarea"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.Field invalid={fieldState.invalid}>
              <Form.Label>라벨</Form.Label>
              <Form.Control>
                <Textarea placeholder="텍스트를 입력해주세요" {...field} />
              </Form.Control>
              <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
              <Form.ErrorMessage>{fieldState.error?.message}</Form.ErrorMessage>
            </Form.Field>
          )}
        />
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
      <Controller
        name="select"
        control={form.control}
        render={({ field, fieldState }) => (
          <Form.Field invalid={fieldState.invalid}>
            <Form.Label>라벨</Form.Label>
            <Form.Control>
              <Select placeholder="항목을 선택해주세요" {...field}>
                <Select.Option value="1">옵션 1</Select.Option>
                <Select.Option value="2">옵션 2</Select.Option>
                <Select.Option value="3">옵션 3</Select.Option>
              </Select>
            </Form.Control>
            <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
            <Form.ErrorMessage>{fieldState.error?.message}</Form.ErrorMessage>
          </Form.Field>
        )}
      />
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
        <Controller
          name="date"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.Field invalid={fieldState.invalid}>
              <Form.Label>라벨</Form.Label>
              <Form.Control>
                <DatePicker placeholder="날짜를 선택해주세요." {...field} />
              </Form.Control>
              <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
              <Form.ErrorMessage>{fieldState.error?.message}</Form.ErrorMessage>
            </Form.Field>
          )}
        />
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
        <Controller
          name="date"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.Field invalid={fieldState.invalid}>
              <Form.Label>라벨</Form.Label>
              <Form.Control>
                <DateRangePicker placeholder="날짜 범위를 선택해주세요." {...field} />
              </Form.Control>
              <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
              <Form.ErrorMessage>{fieldState.error?.message}</Form.ErrorMessage>
            </Form.Field>
          )}
        />
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
        <Controller
          name="radioGroup"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.Field invalid={fieldState.invalid}>
              <Form.Label>라벨</Form.Label>
              <Form.Control>
                <RadioGroup {...field}>
                  <RadioGroup.Option value="1">옵션 1</RadioGroup.Option>
                  <RadioGroup.Option value="2">옵션 2</RadioGroup.Option>
                  <RadioGroup.Option value="3">옵션 3</RadioGroup.Option>
                </RadioGroup>
              </Form.Control>
              <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
              <Form.ErrorMessage>{fieldState.error?.message}</Form.ErrorMessage>
            </Form.Field>
          )}
        />
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
        <Controller
          name="checkbox"
          control={form.control}
          render={({ field: { value, ...rest }, fieldState }) => (
            <Form.Field invalid={fieldState.invalid}>
              <Label className="flex items-center gap-2 text-sm">
                <Form.Control>
                  <Checkbox checked={value} {...rest} />
                </Form.Control>
                서비스 이용약관에 동의합니다.
              </Label>
              <Form.ErrorMessage>{fieldState.error?.message}</Form.ErrorMessage>
            </Form.Field>
          )}
        />
        <Button type="submit">제출하기</Button>
      </Form>
    );
  },
};
