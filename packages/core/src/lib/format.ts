export type NumberFormatType =
  | "phoneNumberSpaced"
  | "phoneNumberDashed"
  | "currency"
  | "dateStringDotted"
  | "dateStringDashed";

export const formatter: Record<NumberFormatType, (value: string) => string> = {
  phoneNumberSpaced: (value) => formatAsPhoneNumberSpaced(numberOnly(value)),
  phoneNumberDashed: (value) => formatAsPhoneNumberDashed(numberOnly(value)),
  currency: (value) => formatAsCurrency(numberOnly(value)),
  dateStringDotted: (value) => formatAsDateStringDotted(numberOnly(value)),
  dateStringDashed: (value) => formatAsDateStringDashed(numberOnly(value)),
};

const numberOnly = (value: string) => {
  return value.replace(/[^0-9]/g, "");
};

// 000 0000 0000
const formatAsPhoneNumberSpaced = (value: string) => {
  if (value.length <= 3) return value;
  if (value.length <= 7) return `${value.slice(0, 3)} ${value.slice(3)}`;

  return `${value.slice(0, 3)} ${value.slice(3, 7)} ${value.slice(7, 11)}`;
};

// 000-0000-0000
const formatAsPhoneNumberDashed = (value: string) => {
  if (value.length <= 3) return value;
  if (value.length <= 7) return `${value.slice(0, 3)}-${value.slice(3)}`;

  return `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`;
};

// YYYY-MM-DD
const formatAsDateStringDashed = (value: string) => {
  if (value.length <= 4) return value;
  if (value.length <= 6) return `${value.slice(0, 4)}-${value.slice(4)}`;

  return `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`;
};

// YYYY.MM.DD
const formatAsDateStringDotted = (value: string) => {
  if (value.length <= 4) return value;
  if (value.length <= 6) return `${value.slice(0, 4)}.${value.slice(4)}`;

  return `${value.slice(0, 4)}.${value.slice(4, 6)}.${value.slice(6, 8)}`;
};

// 1,000,000,000
const formatAsCurrency = (value: string) => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
