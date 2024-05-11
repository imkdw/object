import Duration from "./duration";
import Money from "./money";
import Phone from "./phone";

export default class NightlyDiscountPhone extends Phone {
  constructor(nightlyAmount: Money, regularAmount: Money, seconds: Duration) {
    super(regularAmount, seconds);
    this.nightlyAmount = nightlyAmount;
  }

  override calculateFee(): Money {
    let result = super.calculateFee();

    let nightlyFee = Money.ZERO;
    for (const call of super.getCalls()) {
      if (call.getFrom().getHours() >= Phone.LATE_NIGHT_HOUR) {
        nightlyFee = nightlyFee.plus(
          this.nightlyAmount.times(call.getDuration().getSeconds() / super.getSeconds().getSeconds())
        );
      }
    }

    return result.minus(nightlyFee);
  }
}
