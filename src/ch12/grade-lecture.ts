import Grade from "./grade";
import Lecture from "./lecture";

/**
 * Lecture 클래스의 출력 결과에 등급별 통계를 추가한 클래스
 */
export default class GradeLecture extends Lecture {
  private grades: Grade[];

  constructor(name: string, pass: number, grades: Grade[], scores: number[]) {
    super(name, pass, scores);
    this.grades = grades;
  }

  override evaluate(): string {
    return super.evaluate() + " " + this.gradesStatistics();
  }

  gradesStatistics(): string {
    return this.grades.map((grade) => this.format(grade) + this.gradeCount(grade)).join(" ");
  }

  format(grade: Grade) {
    return `${grade.getName()}:`;
  }

  private gradeCount(grade: Grade): number {
    return super.getScores().filter((score) => grade.include(score)).length;
  }
}
