import { Tab, Tabs } from "fumadocs-ui/components/tabs";

const Demo = ({ children }: { children: React.ReactNode }) => {
  return <Tabs items={["미리보기", "코드"]}>{children}</Tabs>;
};

const DemoPreview = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tab value="미리보기" tabIndex={-1}>
      <div className="bg-background not-prose flex items-center justify-center rounded-lg p-[3rem] leading-normal">
        {children}
      </div>
    </Tab>
  );
};

const DemoCode = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tab value="코드" tabIndex={-1}>
      {children}
    </Tab>
  );
};

Demo.Code = DemoCode;
Demo.Preview = DemoPreview;

export { Demo };
