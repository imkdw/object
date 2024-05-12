import Call from "../../ch8/call";
import Money from "../money";
import AdditionalRatePolicy from "./additional-rate-policy";
import { RatePolicy } from "./rate-policy.interface";

export default class RateDiscountablePolicy extends AdditionalRatePolicy {
  private discountAmount: Money;

  constructor(discountAmount: Money, next: RatePolicy) {
    super(next);
    this.discountAmount = discountAmount;
  }

  protected override afterCalculated(fee: Money): Money {
    return fee.minus(this.discountAmount);
  }

  protected override calculateCallFee(call: Call): Money {
    throw new Error("TaxablePolicy에서는 calculateCallFee 메서드를 사용할 수 없습니다.");
  }
}
