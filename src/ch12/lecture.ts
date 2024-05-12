import Grade from "./grade";
import GradeLecture from "./grade-lecture";

/**
 * 수강생들의 성적을 계산하는 간단한 에제 프로그램
 */
export default class Lecture {
  private pass: number;
  private title: string;
  private scores: number[] = [];

  constructor(title: string, pass: number, scores: number[]) {
    this.pass = pass;
    this.title = title;
    this.scores = scores;
  }

  average(): number {
    return this.scores.reduce((a, b) => a + b) / this.scores.length;
  }

  getScores(): number[] {
    return this.scores;
  }

  evaluate(): string {
    return `Pass: ${this.passCount()} Fail: ${this.failCount()}`;
  }

  private passCount(): number {
    return this.scores.filter((score) => score >= this.pass).length;
  }

  private failCount(): number {
    return this.scores.length - this.passCount();
  }
}

const lecture = new Lecture("객체지향 프로그래밍", 70, [81, 95, 75, 50, 45]);
console.log(lecture.evaluate());

const lecture2 = new GradeLecture(
  "객체지향 프로그래밍",
  70,
  [
    new Grade("A", 100, 90),
    new Grade("B", 89, 80),
    new Grade("C", 79, 70),
    new Grade("D", 69, 60),
    new Grade("F", 59, 0),
  ],
  [81, 95, 75, 50, 45]
);

console.log(lecture2.evaluate());
