"use client";

import { Mobile } from "@/components/layouts/mobile";
import { ChipButton } from "@/components/ui/chip-button";
import { ChevronLeftIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SearchInput } from "../_components/search-input";

const initialRecentSearches = ["회덮밥", "커피", "피자", "치킨", "햄버거", "초밥", "라면"];

export default function SearchPage() {
  const [recentSearches, setRecentSearches] = useState(initialRecentSearches);

  const removeRecentSearch = (search: string) => {
    setRecentSearches((prev) => prev.filter((prevSearch) => prevSearch !== search));
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  return (
    <Mobile>
      <div className="mt-4 flex items-center gap-3">
        <Link
          className="flex size-10 items-center justify-center"
          href="/products"
          aria-label="뒤로 가기"
        >
          <ChevronLeftIcon size={28} />
        </Link>
        <SearchInput placeholder="먹고 싶은 메뉴나 가게를 찾아보세요" />
      </div>
      {recentSearches.length > 0 && (
        <section className="my-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">최근 검색어</h2>
            <button className="text-sm font-semibold text-subtle" onClick={clearRecentSearches}>
              전체 삭제
            </button>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {recentSearches.map((search) => (
              <li key={search}>
                <ChipButton variant="secondary" onClick={() => removeRecentSearch(search)}>
                  {search}
                  <XIcon size={16} />
                </ChipButton>
              </li>
            ))}
          </ul>
        </section>
      )}
      <section className="mt-6">
        <h2 className="text-xl font-semibold">인기 검색어</h2>
        <ul className="mt-3 flex flex-col px-3">
          {popularSearches.map((search, index) => (
            <PopularSearch key={search} rank={index + 1} title={search} />
          ))}
        </ul>
      </section>
    </Mobile>
  );
}

type PopularSearchProps = {
  rank: number;
  title: string;
};

const PopularSearch = ({ rank, title }: PopularSearchProps) => {
  return (
    <li className="flex items-center py-3 text-lg font-semibold">
      <span className="w-8 text-primary">{rank}</span>
      <span>{title}</span>
    </li>
  );
};

const popularSearches = [
  "회덮밥",
  "커피",
  "피자",
  "치킨",
  "햄버거",
  "초밥",
  "라면",
  "파스타",
  "맥주",
  "아이스크림",
] as const;
