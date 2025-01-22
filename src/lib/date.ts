import { Duration } from "./duration";

export const formatToTimeAgo = (isoDateString: string): string => {
  const date = new Date(isoDateString);

  const diffMs = Math.floor(Date.now() - date.getTime());

  if (diffMs < Duration.minutes(1)) {
    return `${Math.floor(diffMs / Duration.seconds(1))}초 전`;
  } else if (diffMs < Duration.hours(1)) {
    return `${Math.floor(diffMs / Duration.minutes(1))}분 전`;
  } else if (diffMs < Duration.days(1)) {
    return `${Math.floor(diffMs / Duration.hours(1))}시간 전`;
  } else if (diffMs < Duration.weeks(1)) {
    return `${Math.floor(diffMs / Duration.days(1))}일 전`;
  } else if (diffMs < Duration.months(1)) {
    return `${Math.floor(diffMs / Duration.weeks(1))}주 전`;
  } else if (diffMs < Duration.years(1)) {
    return `${Math.floor(diffMs / Duration.months(1))}달 전`;
  } else {
    return `${Math.floor(diffMs / Duration.years(1))}년 전`;
  }
};

// 오후 8:30
export const formatToTime = (isoDateString: string): string => {
  const date = new Date(isoDateString);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours < 12 ? "오전" : "오후";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${ampm} ${formattedHours}:${formattedMinutes}`;
};

// 2025년 1월 22일
export const formatToDate = (isoDateString: string): string => {
  const date = new Date(isoDateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};
