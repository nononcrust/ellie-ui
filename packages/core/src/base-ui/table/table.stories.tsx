import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ChevronDownIcon,
  ChevronsUpDownIcon,
  MoreVerticalIcon,
  PencilIcon,
  SearchIcon,
  Trash2Icon,
} from "lucide-react";
import { useState } from "react";
import { Chip } from "../../components/chip";
import { Pagination } from "../../components/pagination";
import { Tag } from "../../components/tag";
import { TextField } from "../../components/text-field";
import { useDatePicker } from "../../hooks";
import { Checkbox } from "../checkbox";
import { DatePicker } from "../date-picker";
import { DropdownMenu } from "../dropdown-menu";
import { IconButton } from "../icon-button";
import { Select } from "../select";
import { Table } from "./table";

const meta = {
  title: "base-ui/Table",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const datePicker = useDatePicker();
    const [page, setPage] = useState(1);

    return (
      <div>
        <div className="mb-3 flex justify-end gap-3">
          <Select placeholder="필터" className="w-[100px]">
            <Select.Option value="all">전체</Select.Option>
            <Select.Option value="user">사용자</Select.Option>
            <Select.Option value="admin">관리자</Select.Option>
          </Select>
          <DatePicker
            value={datePicker.value}
            onChange={datePicker.onChange}
            placeholder="YYYY-MM-DD"
            className="w-[160px]"
          />
          <TextField className="w-[240px]">
            <TextField.Prefix>
              <SearchIcon className="text-subtle size-4" />
            </TextField.Prefix>
            <TextField.Input placeholder="클라이언트 검색" />
          </TextField>
        </div>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>
                <Checkbox />
              </Table.Head>
              <Table.Head className="w-[120px]">
                <button className="flex items-center gap-1">
                  이름
                  <ChevronsUpDownIcon className="text-subtle size-3.5" />
                </button>
              </Table.Head>
              <Table.Head className="w-[240px]">
                <button className="flex items-center gap-1">
                  이메일
                  <ChevronDownIcon className="text-subtle size-3.5" />
                </button>
              </Table.Head>
              <Table.Head className="w-[100px]">
                <button className="flex items-center gap-1">
                  나이
                  <ChevronsUpDownIcon className="text-subtle size-3.5" />
                </button>
              </Table.Head>
              <Table.Head className="w-[100px]">
                <button className="flex items-center gap-1">
                  역할
                  <ChevronsUpDownIcon className="text-subtle size-3.5" />
                </button>
              </Table.Head>
              <Table.Head className="w-[180px]">
                <button className="flex items-center gap-1">
                  전화번호
                  <ChevronsUpDownIcon className="text-subtle size-3.5" />
                </button>
              </Table.Head>
              <Table.Head />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>
                  <Tag variant="outlined">{item.email}</Tag>
                </Table.Cell>
                <Table.Cell>{item.age}</Table.Cell>
                <Table.Cell>
                  <Chip size="xsmall" variant="secondary">
                    {item.role}
                  </Chip>
                </Table.Cell>
                <Table.Cell>
                  <Tag variant="outlined">{item.phone}</Tag>
                </Table.Cell>
                <Table.Cell>
                  <DropdownMenu>
                    <DropdownMenu.Trigger
                      render={
                        <IconButton aria-label="메뉴 열기" variant="ghost" size="xsmall">
                          <MoreVerticalIcon className="size-4" />
                        </IconButton>
                      }
                    />
                    <DropdownMenu.Content>
                      <DropdownMenu.Item>
                        <PencilIcon className="size-4" />
                        수정하기
                      </DropdownMenu.Item>
                      <DropdownMenu.Item variant="danger">
                        <Trash2Icon className="size-4" />
                        삭제하기
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <div className="mt-4 flex justify-center">
          <Pagination page={page} onChange={setPage} total={100} />
        </div>
      </div>
    );
  },
};

type User = {
  name: string;
  email: string;
  age: number;
  role: "USER" | "ADMIN";
  phone: string;
};

const users: User[] = [
  {
    name: "김민준",
    email: "kim.minjun@toss.im",
    age: 28,
    role: "USER",
    phone: "010-1234-5678",
  },
  {
    name: "이서연",
    email: "lee.seoyeon@toss.im",
    age: 32,
    role: "ADMIN",
    phone: "010-2345-6789",
  },
  {
    name: "박지훈",
    email: "park.jihoon@toss.im",
    age: 25,
    role: "USER",
    phone: "010-3456-7890",
  },
  {
    name: "최예은",
    email: "choi.yeeun@toss.im",
    age: 29,
    role: "USER",
    phone: "010-4567-8901",
  },
  {
    name: "정우진",
    email: "jung.woojin@toss.im",
    age: 34,
    role: "USER",
    phone: "010-5678-9012",
  },
  {
    name: "한소희",
    email: "han.sohee@toss.im",
    age: 26,
    role: "USER",
    phone: "010-6789-0123",
  },
  {
    name: "임태현",
    email: "lim.taehyun@toss.im",
    age: 31,
    role: "USER",
    phone: "010-7890-1234",
  },
  {
    name: "강민아",
    email: "kang.mina@toss.im",
    age: 27,
    role: "USER",
    phone: "010-8901-2345",
  },
  {
    name: "윤도영",
    email: "yoon.doyoung@toss.im",
    age: 30,
    role: "USER",
    phone: "010-9012-3456",
  },
  {
    name: "송하린",
    email: "song.harin@toss.im",
    age: 24,
    role: "USER",
    phone: "010-0123-4567",
  },
];
