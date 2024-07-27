import chalk from "chalk";
import { greeting } from "./src/createCharacter.js";

async function main() {
  const name = await greeting();
  console.log(chalk.green(`你好，${name}！`));
  console.log(chalk.blue(`欢迎来到 ${chalk.bold("CyberPunk")} 世界！`));
}

main();
