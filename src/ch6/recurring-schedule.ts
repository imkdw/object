import DayOfWeek from "./enums/day-of-week.enum";
import LocalTime from "./utils/local-time.util";

export default class RecurringSchedule {
  private subject: string;
  private dayOfWeek: DayOfWeek;
  private from: Date;
  private duration: number;

  constructor(subject: string, dayOfWeek: DayOfWeek, from: Date, duration: number) {
    this.subject = subject;
    this.dayOfWeek = dayOfWeek;
    this.from = from;
    this.duration = duration;
  }

  getDayOfWeek(): DayOfWeek {
    return this.dayOfWeek;
  }

  getFrom(): Date {
    return this.from;
  }

  getDuration(): number {
    return this.duration;
  }
}

/**
 * 매주 수요일 10시 30분 0초에 시작해서 30분 동안 진행되는 회의
 */
const meeting = new RecurringSchedule("회의", DayOfWeek.WEDNESDAY, LocalTime.of(10, 30), 30);
console.log(meeting);
