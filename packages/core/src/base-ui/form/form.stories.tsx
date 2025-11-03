import { zodResolver } from "@hookform/resolvers/zod";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../../components/input";
import { Textarea } from "../../components/textarea";
import { noop } from "../../lib/utils";
import { Button } from "../button";
import { CheckSelectBox } from "../check-select-box";
import { Checkbox } from "../checkbox";
import { DatePicker, DateRangePicker } from "../date-picker";
import { RadioGroup } from "../radio-group";
import { RadioSelectBox } from "../radio-select-box";
import { Select } from "../select";
import { Form } from "./form";

const meta = {
  title: "base-ui/Form",
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
          <Form.Label>레이블</Form.Label>
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
          <Form.Label>레이블</Form.Label>
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
              <Form.Label>레이블</Form.Label>
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
              <Form.Label>레이블</Form.Label>
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
        render={({ field: { value, onChange, ...rest }, fieldState }) => (
          <Form.Field invalid={fieldState.invalid}>
            <Form.Label>레이블</Form.Label>
            <Form.Control>
              <Select
                placeholder="항목을 선택해주세요"
                value={value}
                onValueChange={onChange}
                {...rest}
              >
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
          render={({ field: { value, onChange, ...rest }, fieldState }) => (
            <Form.Field invalid={fieldState.invalid}>
              <Form.Label>레이블</Form.Label>
              <Form.Control>
                <DatePicker
                  placeholder="날짜를 선택해주세요."
                  value={value}
                  onValueChange={onChange}
                  {...rest}
                />
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
          render={({ field: { value, onChange, ...rest }, fieldState }) => (
            <Form.Field invalid={fieldState.invalid}>
              <Form.Label>레이블</Form.Label>
              <Form.Control>
                <DateRangePicker
                  placeholder="날짜 범위를 선택해주세요."
                  value={value}
                  onValueChange={onChange}
                  {...rest}
                />
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
          render={({ field: { value, onChange, ...rest }, fieldState }) => (
            <Form.Field invalid={fieldState.invalid}>
              <Form.Label>레이블</Form.Label>
              <Form.Control>
                <RadioGroup value={value} onValueChange={onChange} {...rest}>
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
          render={({ field: { value, onChange, ...rest }, fieldState }) => (
            <Form.Field invalid={fieldState.invalid}>
              <Form.Control>
                <Checkbox checked={value} onCheckedChange={onChange} {...rest}>
                  서비스 이용약관에 동의합니다.
                </Checkbox>
              </Form.Control>
              <Form.ErrorMessage>{fieldState.error?.message}</Form.ErrorMessage>
            </Form.Field>
          )}
        />
        <Button type="submit">제출하기</Button>
      </Form>
    );
  },
};

export const WithCheckSelectBox: Story = {
  render: () => {
    const schema = z.object({
      checkSelectBox: z.array(z.string()).min(1, { message: "에러 메시지가 여기에 표시됩니다." }),
    });

    const form = useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        checkSelectBox: [],
      },
    });

    const onSubmit = form.handleSubmit(noop);

    return (
      <Form onSubmit={onSubmit} className="flex w-[20rem] flex-col gap-4">
        <Controller
          name="checkSelectBox"
          control={form.control}
          render={({ field: { value, onChange, ...rest }, fieldState }) => (
            <Form.Field invalid={fieldState.invalid}>
              <Form.Label>레이블</Form.Label>
              <Form.Control>
                <CheckSelectBox value={value} onValueChange={onChange} {...rest}>
                  <CheckSelectBox.Option value="1">
                    <CheckSelectBox.Label>옵션 1</CheckSelectBox.Label>
                    <CheckSelectBox.Description>
                      설명이 여기에 표시됩니다.
                    </CheckSelectBox.Description>
                  </CheckSelectBox.Option>
                  <CheckSelectBox.Option value="2">
                    <CheckSelectBox.Label>옵션 2</CheckSelectBox.Label>
                    <CheckSelectBox.Description>
                      설명이 여기에 표시됩니다.
                    </CheckSelectBox.Description>
                  </CheckSelectBox.Option>
                </CheckSelectBox>
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

export const WithRadioSelectBox: Story = {
  render: () => {
    const schema = z.object({
      radioSelectBox: z.string().nonempty({ message: "에러 메시지가 여기에 표시됩니다." }),
    });

    const form = useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        radioSelectBox: "",
      },
    });

    const onSubmit = form.handleSubmit(noop);

    return (
      <Form onSubmit={onSubmit} className="flex w-[20rem] flex-col gap-4">
        <Controller
          name="radioSelectBox"
          control={form.control}
          render={({ field: { value, onChange, ...rest }, fieldState }) => (
            <Form.Field invalid={fieldState.invalid}>
              <Form.Label>레이블</Form.Label>
              <Form.Control>
                <RadioSelectBox value={value} onValueChange={onChange} {...rest}>
                  <RadioSelectBox.Option value="1">
                    <RadioSelectBox.Label>옵션 1</RadioSelectBox.Label>
                    <RadioSelectBox.Description>
                      설명이 여기에 표시됩니다.
                    </RadioSelectBox.Description>
                  </RadioSelectBox.Option>
                  <RadioSelectBox.Option value="2">
                    <RadioSelectBox.Label>옵션 2</RadioSelectBox.Label>
                    <RadioSelectBox.Description>
                      설명이 여기에 표시됩니다.
                    </RadioSelectBox.Description>
                  </RadioSelectBox.Option>
                </RadioSelectBox>
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
