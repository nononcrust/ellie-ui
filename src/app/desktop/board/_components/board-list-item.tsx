import { Chip } from "@/components/ui/chip";

type BoardListItemProps = {
  title: string;
  content: string;
};

export const BoardListItem = ({ title, content }: BoardListItemProps) => {
  return (
    <li className="list-none">
      <button className="hover:bg-background-hover flex flex-col p-4 py-3">
        <span className="text-left">
          <Chip size="xsmall" className="mr-2">
            모집중
          </Chip>
          <span className="align-middle font-semibold">{title}</span>
        </span>
        <div className="text-sub mt-1 text-left text-sm">{content}</div>
        <div className="mt-4 flex">
          <span className="text-subtle text-[13px]">다온미로 15시간 전</span>
        </div>
      </button>
    </li>
  );
};
