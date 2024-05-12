import Duration from "../../ch8/duration";
import Money from "../money";
import BasicRatePolicy from "./basic-rate-policy";

export default class RegularPolicy extends BasicRatePolicy {
  private amount: Money;
  private seconds: Duration;

  constructor(amount: Money, seconds: Duration) {
    super();
    this.amount = amount;
    this.seconds = seconds;
  }

  protected override calculateCallFee(): Money {
    return this.amount.times(this.seconds.getSeconds() / this.seconds.getSeconds());
  }
}
