export default class LocalTime {
  static of(hour: number, minute: number, second: number = 0) {
    return new Date(0, 0, 0, hour, minute, second);
  }
}
