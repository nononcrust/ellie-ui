"use client";

import { BoardListItem } from "@/components/board/board-list-item";
import { Pagination } from "@/components/board/pagination";
import { useState } from "react";

export default function BoardPage() {
  const [page, setPage] = useState(1);

  return (
    <main className="mx-auto my-16 max-w-6xl">
      <main className="divide-y divide-border border-y border-border">
        <BoardListItem
          title="생성형 AI 그림 제작 사이트 제작 같이 하실 디자이너/ 프론트 팀원 구합니다."
          content="[개발 프로젝트 모집 내용 예시]프로젝트 주제 : 생성형 AI 그림 제작 사이트프로젝트 목표 : 생성형 AI 그림 제작 사이트 운..."
        />
        <BoardListItem
          title="생성형 AI 그림 제작 사이트 제작 같이 하실 디자이너/ 프론트 팀원 구합니다."
          content="[개발 프로젝트 모집 내용 예시]프로젝트 주제 : 생성형 AI 그림 제작 사이트프로젝트 목표 : 생성형 AI 그림 제작 사이트 운..."
        />
        <BoardListItem
          title="생성형 AI 그림 제작 사이트 제작 같이 하실 디자이너/ 프론트 팀원 구합니다."
          content="[개발 프로젝트 모집 내용 예시]프로젝트 주제 : 생성형 AI 그림 제작 사이트프로젝트 목표 : 생성형 AI 그림 제작 사이트 운..."
        />
        <BoardListItem
          title="생성형 AI 그림 제작 사이트 제작 같이 하실 디자이너/ 프론트 팀원 구합니다."
          content="[개발 프로젝트 모집 내용 예시]프로젝트 주제 : 생성형 AI 그림 제작 사이트프로젝트 목표 : 생성형 AI 그림 제작 사이트 운..."
        />
        <BoardListItem
          title="생성형 AI 그림 제작 사이트 제작 같이 하실 디자이너/ 프론트 팀원 구합니다."
          content="[개발 프로젝트 모집 내용 예시]프로젝트 주제 : 생성형 AI 그림 제작 사이트프로젝트 목표 : 생성형 AI 그림 제작 사이트 운..."
        />
        <BoardListItem
          title="생성형 AI 그림 제작 사이트 제작 같이 하실 디자이너/ 프론트 팀원 구합니다."
          content="[개발 프로젝트 모집 내용 예시]프로젝트 주제 : 생성형 AI 그림 제작 사이트프로젝트 목표 : 생성형 AI 그림 제작 사이트 운..."
        />
      </main>
      <div className="mt-8 flex justify-center">
        <Pagination page={page} total={32} onChange={setPage} />
      </div>
    </main>
  );
}
