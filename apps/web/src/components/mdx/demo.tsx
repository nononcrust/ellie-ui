import { Tab, Tabs } from "fumadocs-ui/components/tabs";

export const Demo = ({ children }: { children: React.ReactNode }) => {
  return <Tabs items={["미리보기", "코드"]}>{children}</Tabs>;
};

export const DemoPreview = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tab value="미리보기" tabIndex={-1}>
      <div className="bg-background flex items-center justify-center rounded-lg p-[3rem]">
        {children}
      </div>
    </Tab>
  );
};

export const DemoCode = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tab value="코드" tabIndex={-1}>
      {children}
    </Tab>
  );
};

Demo.Code = DemoCode;
Demo.Preview = DemoPreview;
