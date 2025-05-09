type Order<T> = (a: T, b: T) => 0 | 1 | -1;

const make =
  <A>(compare: (self: A, that: A) => -1 | 0 | 1): Order<A> =>
  (self, that) =>
    self === that ? 0 : compare(self, that);

const string: Order<string> = make((self, that) => (self < that ? -1 : 1));

const number: Order<number> = make((self, that) => (self < that ? -1 : 1));

const boolean: Order<boolean> = make((self, that) => (self < that ? -1 : 1));

const date: Order<Date> = make((a, b) => {
  const timeA = a.getTime();
  const timeB = b.getTime();

  if (timeA === timeB) return 0;

  return timeA > timeB ? 1 : -1;
});

export const Order = {
  make,
  string,
  number,
  boolean,
  date,
};
