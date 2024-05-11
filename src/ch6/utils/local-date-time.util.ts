export default class LocalDateTime {
  static of(year: number, month: number, day: number, hour: number, minute: number, second: number) {
    return new Date(year, month - 1, day, hour, minute, second);
  }
}
