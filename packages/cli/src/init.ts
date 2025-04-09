import { Command } from "commander";

export const init = new Command().name("init").action(() => {
  console.log("Initializing...");
});
