import readline from "readline";

export const scanf = (message: string): string => {
  let input = "";
  const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  r.on("line", (line) => {
    input = line;
    r.close();
  });

  r.on("close", () => {
    process.exit(0);
  });

  return input;
};
