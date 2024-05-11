import DayOfWeek from "./enums/day-of-week.enum";

import DiscountConditionType from "./enums/discount-condition.enum";

export default class DiscountCondition {
  private type: DiscountConditionType;

  private sequence: number;

  private dayOfWeek: DayOfWeek;
  private startTime: Date;
  private endTime: Date;

  getType(): DiscountConditionType {
    return this.type;
  }

  setType(type: DiscountConditionType): void {
    this.type = type;
  }

  getSequence(): number {
    return this.sequence;
  }

  setSequence(sequence: number): void {
    this.sequence = sequence;
  }

  getDayOfWeek(): DayOfWeek {
    return this.dayOfWeek;
  }

  setDayOfWeek(dayOfWeek: DayOfWeek): void {
    this.dayOfWeek = dayOfWeek;
  }

  getStartTime(): Date {
    return this.startTime;
  }

  setStartTime(startTime: Date): void {
    this.startTime = startTime;
  }

  getEndTime(): Date {
    return this.endTime;
  }

  setEndTime(endTime: Date): void {
    this.endTime = endTime;
  }

  isDiscountable(dayOfWeekOrSequence: DayOfWeek | number, time?: Date) {
    if (typeof dayOfWeekOrSequence !== "number" && !time) {
      throw new Error("IllegalArgumentException");
    }

    if (this.type === DiscountConditionType.PERIOD && time) {
      return this.startTime.getTime() <= time.getTime() && this.endTime.getTime() >= time.getTime();
    }

    if (this.type === DiscountConditionType.SEQUENCE) {
      return this.sequence === dayOfWeekOrSequence;
    }
  }
}
