import Call from "./call";
import Duration from "./duration";
import Money from "./money";

enum PhoneType {
  REGULAR,
  NIGHTLY,
}

export default class Phone {
  static readonly LATE_NIGHT_HOUR = 22;
  private type: PhoneType;

  private amount: Money;
  private regularAmount: Money;
  protected nightlyAmount: Money;
  private seconds: Duration;
  private calls: Call[] = [];

  constructor(amount: Money, seconds: Duration);
  constructor(nightlyAmount: Money, regularAmount: Money, seconds: Duration);
  constructor(type: PhoneType, amount: Money, nightlyAmount: Money, regularAmount: Money, seconds: Duration);
  constructor(...args: any[]) {
    if (args.length === 2) {
      this.type = PhoneType.REGULAR;
      this.amount = args[0];
      this.regularAmount = Money.ZERO;
      this.nightlyAmount = Money.ZERO;
      this.seconds = args[1];
    } else if (args.length === 3) {
      this.type = PhoneType.NIGHTLY;
      this.amount = Money.ZERO;
      this.nightlyAmount = args[0];
      this.regularAmount = args[1];
      this.seconds = args[2];
    } else if (args.length === 5) {
      this.type = args[0];
      this.amount = args[1];
      this.nightlyAmount = args[2];
      this.regularAmount = args[3];
      this.seconds = args[4];
    } else {
      throw new Error("Invalid number of arguments");
    }
  }

  getCalls(): Call[] {
    return this.calls;
  }

  getSeconds(): Duration {
    return this.seconds;
  }

  calculateFee(): Money {
    let result = Money.ZERO;

    for (const call of this.calls) {
      if (this.type === PhoneType.REGULAR) {
        result = result.plus(this.amount.times(call.getDuration().getSeconds() / this.seconds.getSeconds()));
      } else {
        if (call.getFrom().getHours() >= Phone.LATE_NIGHT_HOUR) {
          result = result.plus(this.nightlyAmount.times(call.getDuration().getSeconds() / this.seconds.getSeconds()));
        } else {
          result = result.plus(this.regularAmount.times(call.getDuration().getSeconds() / this.seconds.getSeconds()));
        }
      }
    }

    return result;
  }
}
