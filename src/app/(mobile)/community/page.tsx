"use client";

import { Mobile } from "@/components/layouts/mobile";
import { Badge } from "@/components/ui/badge";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { ChipButton } from "@/components/ui/chip-button";
import { Fab } from "@/components/ui/fab";
import { RadioGroup } from "@/components/ui/radio-group";
import { formatToTimeAgo } from "@/lib/date";
import { cn } from "@/lib/utils";
import { HeartIcon, MessageCircleMoreIcon, PlusIcon, SlidersHorizontalIcon } from "lucide-react";
import { useState } from "react";

export default function CommunityPage() {
  const [sort, setSort] = useState<"latest" | "popular">("latest");

  return (
    <Mobile>
      <h1 className="mt-12 text-3xl font-semibold">커뮤니티</h1>
      <div className="mt-6 flex items-center justify-between">
        <Filter />
        <div className="flex justify-end gap-3">
          <button
            className={cn(
              "font-semibold text-subtle transition-colors",
              sort === "latest" && "text-main",
            )}
            onClick={() => setSort("latest")}
          >
            최신순
          </button>
          <button
            className={cn(
              "font-semibold text-subtle transition-colors",
              sort === "popular" && "text-main",
            )}
            onClick={() => setSort("popular")}
          >
            인기순
          </button>
        </div>
      </div>
      <ul className="mt-3 flex flex-col">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
      <div className="flex justify-center py-16">
        <span className="font-medium text-subtle">마지막 글입니다.</span>
      </div>
      <Fab.Container>
        <Fab>
          <PlusIcon />
        </Fab>
      </Fab.Container>
    </Mobile>
  );
}

type PostProps = {
  post: Post;
};

const Post = ({ post }: PostProps) => {
  return (
    <li className="flex flex-col py-3">
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <p className="line-clamp-2 text-[15px] font-medium text-sub">{post.content}</p>
      <div className="mt-2 flex gap-1">
        {post.tags.map((tag) => (
          <Chip key={tag} variant="secondary">
            {tag}
          </Chip>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-1">
          <span className="text-sm font-medium text-subtle">{post.user.nickname}</span>
          <span className="text-sm font-medium text-subtle">·</span>
          <span className="text-sm font-medium text-subtle">{formatToTimeAgo(post.createdAt)}</span>
        </div>
        <div className="flex gap-3">
          <span className="flex items-center gap-1 text-sm font-medium text-subtle">
            <HeartIcon size={16} />
            12
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-subtle">
            <MessageCircleMoreIcon size={16} />
            12
          </span>
        </div>
      </div>
    </li>
  );
};

const Filter = () => {
  return (
    <BottomSheet>
      <div className="relative">
        <BottomSheet.Trigger asChild>
          <ChipButton variant="primaryLow">
            <SlidersHorizontalIcon size={16} />
            필터
          </ChipButton>
        </BottomSheet.Trigger>
        <Badge className="absolute -top-2 left-full -translate-x-4">3</Badge>
      </div>
      <BottomSheet.Content>
        <BottomSheet.Header>
          <BottomSheet.Title>게시글 필터</BottomSheet.Title>
        </BottomSheet.Header>
        <BottomSheet.Body className="pb-8">
          <span className="mt-4 font-semibold">지역</span>
          <RadioGroup className="mt-3" size="large" defaultValue="서울시">
            <RadioGroup.Option value="서울시">서울시</RadioGroup.Option>
            <RadioGroup.Option value="경기도">경기도</RadioGroup.Option>
            <RadioGroup.Option value="인천시">인천시</RadioGroup.Option>
            <RadioGroup.Option value="대전시">대전시</RadioGroup.Option>
            <RadioGroup.Option value="대구시">대구시</RadioGroup.Option>
            <RadioGroup.Option value="부산시">부산시</RadioGroup.Option>
          </RadioGroup>
          <span className="mt-4 font-semibold">카테고리</span>
          <ul className="mt-3 flex flex-wrap gap-2">
            {categories.map((category) => (
              <li key={category}>
                <ChipButton variant="secondary">{category}</ChipButton>
              </li>
            ))}
          </ul>
          <span className="mt-4 font-semibold">정렬</span>
          <RadioGroup className="mt-3 flex" size="large" defaultValue="latest">
            <RadioGroup.Option value="latest">최신순</RadioGroup.Option>
            <RadioGroup.Option value="popular">인기순</RadioGroup.Option>
          </RadioGroup>
        </BottomSheet.Body>
        <BottomSheet.Footer className="gap-4">
          <Button className="w-1/2" size="xlarge" variant="secondary">
            전체 해제
          </Button>
          <Button className="w-full" size="xlarge" variant="primary">
            필터 적용
          </Button>
        </BottomSheet.Footer>
      </BottomSheet.Content>
    </BottomSheet>
  );
};

const categories = [
  "전체",
  "운동",
  "자기계발",
  "취미",
  "음식",
  "여행",
  "공부",
  "책",
  "영화",
  "드라마",
  "게임",
  "애완동물",
  "기타",
];

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  tags: string[];
  user: {
    nickname: string;
  };
};

const posts: Post[] = [
  {
    id: "1",
    title: "블.로.그 작성 알.바 구해요",
    content: `블,로,그, 작성 도움 주실분?
간단 이미지와 글 작성 도움 요청드립니다
블,로,그에 이미지와 글작성 대행 구해요
건당 1만원 재택 가능 초보 가능
하루 1건이상
성실 꾸준이 오래 하실분만요
많이 쓰시면 많이 지급해요
불법 아닙니다
제 블,로,그 작성 대행 구합니다
공,일,공,사삼이오 사칠팔공`,
    createdAt: "2025-01-16T12:37:32.683Z",
    tags: ["블로그", "알바", "작성"],
    user: {
      nickname: "사니",
    },
  },
  {
    id: "2",
    title: "오늘 보라동 효성해링턴에 호떡아저씨 계실까요??",
    content: "혹시 보신분 알려주세요 ㅜㅜ",
    createdAt: "2024-12-17T12:37:32.683Z",
    tags: ["보라동", "효성해링턴", "호떡아저씨"],
    user: {
      nickname: "이쁜여우",
    },
  },
  {
    id: "3",
    title: "서천마을3단지 하얀 강아지 잃어버리신 분",
    content: `오늘 오전 서천마을 3단지 주변에서
하얀 비숑(푸들?) 강아지를 발견하였습니다.
강아지는 임시 보호중입니다
잃어버리신 분은 댓글 혹은 메세지 주세요!`,
    createdAt: "2024-09-17T12:37:32.683Z",
    tags: ["서천마을3단지", "하얀 강아지", "잃어버림"],
    user: {
      nickname: "느리게걷기",
    },
  },
  {
    id: "4",
    title: "용인 기흥레스피아 조기 축구회원 모집",
    content: `1. 조기축구팀 팀원 모집
2. 팀 명. FC한마음
3. 팀 회원수. 6~70명 유지중
4. 활동지역. 경기도 용인 기흥레스피아
5. 활동시간. 토요일 08:00~12:00
(2~4시간 예약상황에 따라 유동적)`,
    createdAt: "2023-01-17T12:37:32.683Z",
    tags: ["용인", "기흥레스피아", "조기 축구회원"],
    user: {
      nickname: "행복한날",
    },
  },
  {
    id: "5",
    title: "블.로.그 작성 알.바 구해요",
    content: `블,로,그, 작성 도움 주실분?
간단 이미지와 글 작성 도움 요청드립니다
블,로,그에 이미지와 글작성 대행 구해요
건당 1만원 재택 가능 초보 가능
하루 1건이상
성실 꾸준이 오래 하실분만요
많이 쓰시면 많이 지급해요
불법 아닙니다
제 블,로,그 작성 대행 구합니다
공,일,공,사삼이오 사칠팔공`,
    createdAt: "2025-01-16T12:37:32.683Z",
    tags: ["블로그", "알바", "작성"],
    user: {
      nickname: "레인메이커",
    },
  },
  {
    id: "6",
    title: "오늘 보라동 효성해링턴에 호떡아저씨 계실까요??",
    content: "혹시 보신분 알려주세요 ㅜㅜ",
    createdAt: "2024-12-17T12:37:32.683Z",
    tags: ["보라동", "효성해링턴", "호떡아저씨"],
    user: {
      nickname: "가을67m",
    },
  },
  {
    id: "7",
    title: "서천마을3단지 하얀 강아지 잃어버리신 분",
    content: `오늘 오전 서천마을 3단지 주변에서
하얀 비숑(푸들?) 강아지를 발견하였습니다.
강아지는 임시 보호중입니다
잃어버리신 분은 댓글 혹은 메세지 주세요!`,
    createdAt: "2024-09-17T12:37:32.683Z",
    tags: ["서천마을3단지", "하얀 강아지", "잃어버림"],
    user: {
      nickname: "코코아",
    },
  },
  {
    id: "8",
    title: "용인 기흥레스피아 조기 축구회원 모집",
    content: `1. 조기축구팀 팀원 모집
2. 팀 명. FC한마음
3. 팀 회원수. 6~70명 유지중
4. 활동지역. 경기도 용인 기흥레스피아
5. 활동시간. 토요일 08:00~12:00
(2~4시간 예약상황에 따라 유동적)`,
    createdAt: "2023-01-17T12:37:32.683Z",
    tags: ["용인", "기흥레스피아", "조기 축구회원"],
    user: {
      nickname: "아리사",
    },
  },
  {
    id: "9",
    title: "블.로.그 작성 알.바 구해요",
    content: `블,로,그, 작성 도움 주실분?
간단 이미지와 글 작성 도움 요청드립니다
블,로,그에 이미지와 글작성 대행 구해요
건당 1만원 재택 가능 초보 가능
하루 1건이상
성실 꾸준이 오래 하실분만요
많이 쓰시면 많이 지급해요
불법 아닙니다
제 블,로,그 작성 대행 구합니다
공,일,공,사삼이오 사칠팔공`,
    createdAt: "2025-01-16T12:37:32.683Z",
    tags: ["블로그", "알바", "작성"],
    user: {
      nickname: "방방록",
    },
  },
  {
    id: "10",
    title: "오늘 보라동 효성해링턴에 호떡아저씨 계실까요??",
    content: "혹시 보신분 알려주세요 ㅜㅜ",
    createdAt: "2024-12-17T12:37:32.683Z",
    tags: ["보라동", "효성해링턴", "호떡아저씨"],
    user: {
      nickname: "두잇두잇두잇",
    },
  },
  {
    id: "11",
    title: "서천마을3단지 하얀 강아지 잃어버리신 분",
    content: `오늘 오전 서천마을 3단지 주변에서
하얀 비숑(푸들?) 강아지를 발견하였습니다.
강아지는 임시 보호중입니다
잃어버리신 분은 댓글 혹은 메세지 주세요!`,
    createdAt: "2024-09-17T12:37:32.683Z",
    tags: ["서천마을3단지", "하얀 강아지", "잃어버림"],
    user: {
      nickname: "포비",
    },
  },
  {
    id: "12",
    title: "용인 기흥레스피아 조기 축구회원 모집",
    content: `1. 조기축구팀 팀원 모집
2. 팀 명. FC한마음
3. 팀 회원수. 6~70명 유지중
4. 활동지역. 경기도 용인 기흥레스피아
5. 활동시간. 토요일 08:00~12:00
(2~4시간 예약상황에 따라 유동적)`,
    createdAt: "2023-01-17T12:37:32.683Z",
    tags: ["용인", "기흥레스피아", "조기 축구회원"],
    user: {
      nickname: "펑글",
    },
  },
];
