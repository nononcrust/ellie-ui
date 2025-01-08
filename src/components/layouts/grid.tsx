export const Grid = ({ children }: { children: React.ReactNode }) => {
  return <main className="mx-auto grid w-full max-w-6xl grid-cols-3">{children}</main>;
};

const GridItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-center p-12">{children}</div>;
};

Grid.Item = GridItem;
