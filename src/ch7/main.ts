import readline from "readline";
import { scanf } from "./input";

/**
 * 직원의 급여를 계싼한다
 *
 * 1. 사용자로부터 소득세율을 입력받는다.
 * 2. 직원의 급여를 계산한다
 * 3. 양식에 맞게 결과를 출력한다.
 */

const employees = ["직원A", "직원B", "직원C"];
const basePays = [400, 300, 250];

const getTaxRate = (): number => {
  // const taxRate = scanf("세율을 입력하세요: ");
  const taxRate = 0.3;
  return taxRate;
};

const calculatePayFor = (name: string, taxRate: number): number => {
  const index = employees.indexOf(name);
  const basePay = basePays[index];
  return basePay - basePay * taxRate;
};

const describeResult = (name: string, pay: number): string => {
  return `이름: ${name}, 급여 ${pay}`;
};

const main = (name: string) => {
  const taxRate = getTaxRate();
  const pay = calculatePayFor(name, taxRate);
  console.log(describeResult(name, pay));
  process.exit(0);
};

main("직원A");
