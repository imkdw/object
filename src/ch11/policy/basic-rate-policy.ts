import Call from "../../ch8/call";
import Phone from "../../ch8/phone";
import Money from "../money";
import { RatePolicy } from "./rate-policy.interface";

export default abstract class BasicRatePolicy implements RatePolicy {
  calculateFee(phone: Phone): Money {
    let result = Money.ZERO;
    for (const call of phone.getCalls()) {
      result = result.plus(this.calculateCallFee(call));
    }
    return result;
  }

  protected abstract calculateCallFee(call: Call): Money;
}
