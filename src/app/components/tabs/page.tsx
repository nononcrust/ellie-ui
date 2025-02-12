"use client";

import { Grid } from "@/components/layouts/grid";
import { Tabs } from "@/components/ui/tabs";

export default function TabsPage() {
  return (
    <Grid>
      <Grid.Item>
        <Tabs defaultValue="1">
          <Tabs.List>
            <Tabs.Trigger value="1">전체</Tabs.Trigger>
            <Tabs.Trigger value="2">인기글</Tabs.Trigger>
            <Tabs.Trigger value="3">공지사항</Tabs.Trigger>
          </Tabs.List>
        </Tabs>
      </Grid.Item>
      <Grid.Item>
        <Tabs defaultValue="1">
          <Tabs.List size="large">
            <Tabs.Trigger value="1">전체</Tabs.Trigger>
            <Tabs.Trigger value="2">인기글</Tabs.Trigger>
            <Tabs.Trigger value="3">공지사항</Tabs.Trigger>
          </Tabs.List>
        </Tabs>
      </Grid.Item>
    </Grid>
  );
}
