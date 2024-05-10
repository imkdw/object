export default class LocalTime {
  static of(hours: number, minutes: number): Date {
    return new Date(0, 0, 0, hours, minutes, 0, 0);
  }
}
