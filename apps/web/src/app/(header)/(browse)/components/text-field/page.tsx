"use client";

import { Grid } from "@/components/layouts/grid";
import { Button, Form, TextField, toast, Tooltip } from "@ellie-ui/core";
import { useTextField } from "@ellie-ui/core/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoIcon, SearchIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

export default function TextFieldPage() {
  const textField = useTextField();

  return (
    <Grid>
      <Grid.Item>
        <TextField label={<TextField.Label>레이블</TextField.Label>}>
          <TextField.Input />
        </TextField>
      </Grid.Item>
      <Grid.Item>
        <TextField label={<TextField.Label>레이블</TextField.Label>}>
          <TextField.Input placeholder="텍스트를 입력해주세요" />
        </TextField>
      </Grid.Item>
      <Grid.Item>
        <TextField label={<TextField.Label>레이블</TextField.Label>}>
          <TextField.Input disabled placeholder="텍스트를 입력해주세요" />
        </TextField>
      </Grid.Item>
      <Grid.Item>
        <TextField label={<TextField.Label>레이블</TextField.Label>}>
          <TextField.Input readOnly placeholder="텍스트를 입력해주세요" />
        </TextField>
      </Grid.Item>
      <Grid.Item>
        <TextField defaultValue="12345678" label={<TextField.Label>비밀번호</TextField.Label>}>
          <TextField.Input type="password" placeholder="비밀번호를 입력해주세요" />
        </TextField>
      </Grid.Item>
      <Grid.Item>
        <TextField label={<TextField.Label>검색</TextField.Label>}>
          <TextField.Prefix>
            <SearchIcon className="text-subtle size-[1rem]" />
          </TextField.Prefix>
          <TextField.Input />
        </TextField>
      </Grid.Item>
      <Grid.Item>
        <TextField label={<TextField.Label>검색</TextField.Label>}>
          <TextField.Input />
          <TextField.Suffix>
            <SearchIcon className="text-subtle size-[1rem]" />
          </TextField.Suffix>
        </TextField>
      </Grid.Item>
      <Grid.Item>
        <TextField defaultValue="기본 텍스트" label={<TextField.Label>텍스트</TextField.Label>}>
          <TextField.Input />
        </TextField>
      </Grid.Item>
      <Grid.Item>
        <TextField
          value={textField.value}
          onChange={textField.onChange}
          label={<TextField.Label>텍스트</TextField.Label>}
        >
          <TextField.Input />
        </TextField>
      </Grid.Item>
      <Grid.Item>
        <TextField
          error
          label={<TextField.Label>텍스트</TextField.Label>}
          errorMessage={<TextField.ErrorMessage>필수 입력 항목입니다.</TextField.ErrorMessage>}
        >
          <TextField.Input />
        </TextField>
      </Grid.Item>
      <Grid.Item>
        <TextField
          label={<TextField.Label>이메일</TextField.Label>}
          description={<TextField.Description>이메일을 입력해주세요.</TextField.Description>}
        >
          <TextField.Input />
        </TextField>
      </Grid.Item>
      <Grid.Item>
        <TextField
          label={<TextField.Label>이메일</TextField.Label>}
          description={<TextField.Description>이메일을 입력해주세요.</TextField.Description>}
          required
        >
          <TextField.Input />
        </TextField>
      </Grid.Item>
      <Grid.Item>
        <TextField label={<TextField.Label>이메일</TextField.Label>} maxGraphemeCount={10}>
          <TextField.Input />
        </TextField>
      </Grid.Item>
      <Grid.Item>
        <TextField
          label={
            <TextField.Label>
              이메일
              <Tooltip content="계정 당 하나의 이메일만 사용할 수 있습니다.">
                <InfoIcon
                  className="text-subtle outline-hidden focus-visible:focus-ring ml-1.5 size-3.5 rounded-full"
                  tabIndex={0}
                />
              </Tooltip>
            </TextField.Label>
          }
          description={<TextField.Description>이메일을 입력해주세요.</TextField.Description>}
        >
          <TextField.Input />
        </TextField>
      </Grid.Item>
      <Grid.Item>
        <TextFieldWithForm />
      </Grid.Item>
      <Grid.Item>
        <TextField
          label={<TextField.Label>긴 텍스트</TextField.Label>}
          description={
            <TextField.Description>1000자 이하의 텍스트를 입력해주세요.</TextField.Description>
          }
          maxGraphemeCount={1000}
        >
          <TextField.Textarea placeholder="텍스트를 입력해주세요" />
        </TextField>
      </Grid.Item>
    </Grid>
  );
}

const InputForm = z.object({
  input: z.string().min(1, "필수 입력 항목입니다."),
});

const TextFieldWithForm = () => {
  const form = useForm({
    resolver: zodResolver(InputForm),
    defaultValues: {
      input: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    toast(JSON.stringify(data, null, 2), {
      position: "bottom-right",
    });
  });

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
};
