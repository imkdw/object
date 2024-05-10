import Screening from "../../screening";
import { DiscountCondition } from "./discount-condition.interface";
import DayOfWeek from "../../enums/day-of-week";

/**
 * 기간 할인조건
 */
export default class PeriodCondition implements DiscountCondition {
  private dayOfWeek: DayOfWeek;
  private startTime: Date;
  private endTime: Date;

  constructor(dayOfWeek: DayOfWeek, startTime: Date, endTime: Date) {
    this.dayOfWeek = dayOfWeek;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  isSatisfiedBy(screening: Screening): boolean {
    return (
      screening.getStartTime().getDay() === this.dayOfWeek &&
      this.startTime <= screening.getStartTime() &&
      this.endTime >= screening.getStartTime()
    );
  }
}
