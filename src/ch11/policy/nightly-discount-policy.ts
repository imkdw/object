import Duration from "../../ch8/duration";
import Money from "../money";
import BasicRatePolicy from "./basic-rate-policy";

export default class NightlyDiscountPolicy extends BasicRatePolicy {
  private static readonly LATE_NIGHT_HOUR = 22;

  private nightlyAmount: Money;
  private regularAmount: Money;
  private seconds: Duration;

  constructor(nightlyAmount: Money, regularAmount: Money, seconds: Duration) {
    super();
    this.nightlyAmount = nightlyAmount;
    this.regularAmount = regularAmount;
    this.seconds = seconds;
  }

  protected override calculateCallFee(): Money {
    if (this.seconds.getSeconds() >= NightlyDiscountPolicy.LATE_NIGHT_HOUR) {
      return this.nightlyAmount.times(this.seconds.getSeconds() / this.seconds.getSeconds());
    }
    return this.regularAmount.times(this.seconds.getSeconds() / this.seconds.getSeconds());
  }
}
