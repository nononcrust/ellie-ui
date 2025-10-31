import { StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import { Skeleton } from "../../components/skeleton";
import { Combobox } from "./combobox";

const meta = {
  title: "base-ui/Combobox",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Combobox value={value} onChange={setValue}>
        <Combobox.Trigger className="w-[16rem]" placeholder="은행을 선택해주세요.">
          {value}
        </Combobox.Trigger>
        <Combobox.Content>
          <Combobox.Input />
          <Combobox.List>
            {BANKS.map((bank) => (
              <Combobox.Option key={bank} value={bank}>
                {bank}
              </Combobox.Option>
            ))}
            <Combobox.Empty>검색 결과가 없습니다.</Combobox.Empty>
          </Combobox.List>
        </Combobox.Content>
      </Combobox>
    );
  },
};

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const AsyncSearch: Story = {
  render: () => {
    const [inputValue, setInputValue] = useState("");
    const [value, setValue] = useState("");
    const [banks, setBanks] = useState<string[]>();
    const [isPending, setIsPending] = useState(false);

    useEffect(() => {
      const fetchBanks = async (search: string) => {
        setIsPending(true);
        await sleep(1000);

        const filteredBanks = BANKS.filter((bank) => bank.includes(search));

        setBanks(filteredBanks);
        setIsPending(false);
      };

      fetchBanks(value);
    }, [inputValue, value]);

    return (
      <Combobox value={value} onChange={setValue}>
        <Combobox.Trigger className="w-[16rem]" placeholder="은행을 선택해주세요.">
          {value}
        </Combobox.Trigger>
        <Combobox.Content>
          <Combobox.Input value={inputValue} onValueChange={setInputValue} />
          <Combobox.List>
            {banks &&
              !isPending &&
              banks.map((bank) => (
                <Combobox.Option key={bank} value={bank}>
                  {bank}
                </Combobox.Option>
              ))}
            {isPending && (
              <Combobox.Loading>
                <div className="flex flex-col gap-2 p-2">
                  <Skeleton width={240} height={28} />
                  <Skeleton width={240} height={28} />
                  <Skeleton width={240} height={28} />
                  <Skeleton width={240} height={28} />
                </div>
              </Combobox.Loading>
            )}
            {!isPending && <Combobox.Empty>검색 결과가 없습니다.</Combobox.Empty>}
          </Combobox.List>
        </Combobox.Content>
      </Combobox>
    );
  },
};

const BANKS = [
  "우리은행",
  "카카오뱅크",
  "신한은행",
  "국민은행",
  "하나은행",
  "농협은행",
  "기업은행",
  "SC제일은행",
  "케이뱅크",
  "토스뱅크",
  "KEB하나은행",
  "한국시티은행",
  "대구은행",
  "부산은행",
  "광주은행",
  "전북은행",
  "제주은행",
  "수협은행",
  "신협은행",
  "새마을금고은행",
  "우체국은행",
  "저축은행",
  "상호저축은행",
  "기타은행",
] as const;
