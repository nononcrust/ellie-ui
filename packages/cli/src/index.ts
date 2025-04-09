#!/usr/bin/env node
import { init } from "@/init";
import { Command } from "commander";
import packageJson from "../package.json";

const main = async () => {
  const program = new Command()
    .name("@ellie-ui/cli")
    .version(packageJson.version || "1.0.0", "-v, --version");

  program.addCommand(init);

  program.parse();
};

main();
