import Phone from "../../ch8/phone";
import Money from "../money";
import BasicRatePolicy from "./basic-rate-policy";
import { RatePolicy } from "./rate-policy.interface";

export default abstract class AdditionalRatePolicy extends BasicRatePolicy {
  private next: RatePolicy;

  constructor(next: RatePolicy) {
    super();
    this.next = next;
  }

  override calculateFee(phone: Phone): Money {
    const fee = this.next.calculateFee(phone);
    return this.afterCalculated(fee);
  }

  protected abstract afterCalculated(fee: Money): Money;
}
