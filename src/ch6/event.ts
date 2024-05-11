import RecurringSchedule from "./recurring-schedule";
import LocalDateTime from "./utils/local-date-time.util";

export default class Event {
  private subject: string;
  private from: Date;
  private duration: number;

  constructor(subject: string, from: Date, duration: number) {
    this.subject = subject;
    this.from = from;
    this.duration = duration;
  }

  isStatisfied(schedule: RecurringSchedule) {
    return (
      this.from.getDay() === schedule.getDayOfWeek() &&
      this.from.getHours() === schedule.getFrom().getHours() &&
      this.from.getMinutes() === schedule.getFrom().getMinutes()
    );
  }
}

/**
 * 2019년 5월 8일 10시 30분 0초에 시작해서 30분 동안 진행되는 회의
 */
const meeting = new Event("회의", LocalDateTime.of(2019, 5, 8, 10, 30, 0), 30);
console.log(meeting);
