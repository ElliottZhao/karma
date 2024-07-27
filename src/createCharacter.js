import inquirer from "inquirer";
import ora from "ora";
import fs from "node:fs/promises";

export async function greeting() {
  const { name } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "你好，请问怎么称呼？",
      default: "无名氏",
    },
  ]);
  const documentCreationSpin = ora("创建档案中……").start();
  await fs.mkdir(name);
  documentCreationSpin.succeed("档案创建成功！");
  return name;
}
