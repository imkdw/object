export default class Duration {
  private minutes: number;

  constructor(minutes: number) {
    this.minutes = minutes;
  }

  getMinutes() {
    return this.minutes;
  }

  getSeconds() {
    return this.minutes * 60;
  }

  static between(from: Date, to: Date): Duration {
    return new Duration((to.getTime() - from.getTime()) / 60000);
  }

  static ofSeconds(seconds: number): Duration {
    return new Duration(seconds / 60);
  }
}
