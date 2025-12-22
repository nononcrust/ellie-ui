import { Button, Form, TextField } from "@ellie-ui/core";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useTextField } from "../../hooks";

const meta = {
  title: "components/TextField",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[20rem]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <TextField>
        <TextField.Input />
      </TextField>
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return (
      <TextField>
        <TextField.Input placeholder="텍스트를 입력해주세요" />
      </TextField>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    return (
      <TextField label={<TextField.Label>레이블</TextField.Label>}>
        <TextField.Input />
      </TextField>
    );
  },
};

export const WithLabelAsterisk: Story = {
  render: () => {
    return (
      <TextField label={<TextField.Label asterisk>레이블</TextField.Label>}>
        <TextField.Input />
      </TextField>
    );
  },
};

export const WithDescription: Story = {
  render: () => {
    return (
      <TextField
        description={<TextField.Description>필드에 대한 설명입니다.</TextField.Description>}
      >
        <TextField.Input />
      </TextField>
    );
  },
};

export const ReadOnly: Story = {
  render: () => {
    return (
      <TextField defaultValue="읽기 전용">
        <TextField.Input readOnly />
      </TextField>
    );
  },
};

export const WithPrefix: Story = {
  render: () => {
    return (
      <TextField>
        <TextField.Prefix>https://</TextField.Prefix>
        <TextField.Input />
      </TextField>
    );
  },
};

export const WithSuffix: Story = {
  render: () => {
    return (
      <TextField>
        <TextField.Input />
        <TextField.Suffix>@gmail.com</TextField.Suffix>
      </TextField>
    );
  },
};

export const WithInlinePrefix: Story = {
  render: () => {
    return (
      <TextField>
        <TextField.InlineAffix>
          <SearchIcon className="text-subtle size-[1rem]" />
        </TextField.InlineAffix>
        <TextField.Input />
      </TextField>
    );
  },
};

export const WithInlineSuffix: Story = {
  render: () => {
    return (
      <TextField>
        <TextField.Input />
        <TextField.InlineAffix>
          <SearchIcon className="text-subtle size-[1rem]" />
        </TextField.InlineAffix>
      </TextField>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const textField = useTextField();

    return (
      <TextField {...textField.register()} label={<TextField.Label>텍스트</TextField.Label>}>
        <TextField.Input />
      </TextField>
    );
  },
};

export const ErrorMessage: Story = {
  render: () => {
    return (
      <TextField
        invalid
        errorMessage={<TextField.ErrorMessage>필수 입력 항목입니다.</TextField.ErrorMessage>}
      >
        <TextField.Input />
      </TextField>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const InputForm = z.object({
      input: z.string().min(1, "필수 입력 항목입니다."),
    });

    const form = useForm({
      resolver: zodResolver(InputForm),
      defaultValues: {
        input: "",
      },
    });

    const onSubmit = form.handleSubmit(() => {});

    return (
      <Form className="w-full" onSubmit={onSubmit}>
        <Controller
          name="input"
          control={form.control}
          render={({ field: { value, onChange, ...rest }, fieldState }) => (
            <TextField
              label={<TextField.Label asterisk>텍스트</TextField.Label>}
              description={<TextField.Description>텍스트를 입력해주세요.</TextField.Description>}
              value={value}
              onValueChange={onChange}
              invalid={fieldState.invalid}
              errorMessage={
                <TextField.ErrorMessage>{fieldState.error?.message}</TextField.ErrorMessage>
              }
            >
              <TextField.Input {...rest} placeholder="100자 이하의 텍스트" />
            </TextField>
          )}
        />
        <Button type="submit" className="mt-4">
          제출하기
        </Button>
      </Form>
    );
  },
};

export const WithTextarea: Story = {
  render: () => {
    return (
      <TextField
        label={<TextField.Label>긴 텍스트</TextField.Label>}
        description={<TextField.Description>텍스트를 입력해주세요.</TextField.Description>}
      >
        <TextField.Textarea placeholder="텍스트를 입력해주세요" />
      </TextField>
    );
  },
};
