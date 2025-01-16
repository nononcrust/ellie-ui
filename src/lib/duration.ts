const millis = (n: number) => n;
const seconds = (n: number) => millis(n) * 1000;
const minutes = (n: number) => seconds(n) * 60;

export const Duration = {
  millis,
  seconds,
  minutes,
};
