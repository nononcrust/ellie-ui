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
        <TextField.Prefix>
          <SearchIcon className="text-subtle size-[1rem]" />
        </TextField.Prefix>
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
        <TextField.Suffix>
          <SearchIcon className="text-subtle size-[1rem]" />
        </TextField.Suffix>
      </TextField>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const textField = useTextField();

    return (
      <TextField
        value={textField.value}
        onChange={textField.onChange}
        label={<TextField.Label>텍스트</TextField.Label>}
      >
        <TextField.Input />
      </TextField>
    );
  },
};

export const ErrorMessage: Story = {
  render: () => {
    return (
      <TextField
        error
        errorMessage={<TextField.ErrorMessage>필수 입력 항목입니다.</TextField.ErrorMessage>}
      >
        <TextField.Input />
      </TextField>
    );
  },
};

export const Required: Story = {
  render: () => {
    return (
      <TextField label={<TextField.Label>레이블</TextField.Label>} required>
        <TextField.Input />
      </TextField>
    );
  },
};

export const WithMaxGraphemeCount: Story = {
  render: () => {
    return (
      <TextField maxGraphemeCount={10}>
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
          render={({ field }) => (
            <TextField
              label={<TextField.Label>텍스트</TextField.Label>}
              description={<TextField.Description>텍스트를 입력해주세요.</TextField.Description>}
              value={field.value}
              onChange={field.onChange}
              error={!!form.formState.errors.input}
              errorMessage={
                <TextField.ErrorMessage>
                  {form.formState.errors.input?.message}
                </TextField.ErrorMessage>
              }
              maxGraphemeCount={100}
              required
            >
              <TextField.Input ref={field.ref} placeholder="100자 이하의 텍스트" />
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
        description={
          <TextField.Description>1000자 이하의 텍스트를 입력해주세요.</TextField.Description>
        }
        maxGraphemeCount={1000}
      >
        <TextField.Textarea placeholder="텍스트를 입력해주세요" />
      </TextField>
    );
  },
};
