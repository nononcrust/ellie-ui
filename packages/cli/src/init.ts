import { select } from "@clack/prompts";
import { Command } from "commander";

export const init = new Command().name("init").action(async () => {
  await select({
    message: "사용 중인 프레임워크를 선택해주세요.",
    options: [
      { value: "nextjs", label: "Next.js" },
      { value: "vite", label: "Vite" },
    ],
  });
});
