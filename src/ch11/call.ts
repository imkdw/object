import Duration from "./duration";

export default class Call {
  private from: Date;
  private to: Date;

  constructor(from: Date, to: Date) {
    this.from = from;
    this.to = to;
  }

  getDuration(): Duration {
    return Duration.between(this.from, this.to);
  }

  getFrom() {
    return this.from;
  }
}
