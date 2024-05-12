import Money from "../money";
import AdditionalRatePolicy from "./additional-rate-policy";
import Call from "../../ch8/call";
import { RatePolicy } from "./rate-policy.interface";

export default class TaxablePolicy extends AdditionalRatePolicy {
  private taxRatio: number;

  constructor(taxRatio: number, next: RatePolicy) {
    super(next);
    this.taxRatio = taxRatio;
  }

  protected override afterCalculated(fee: Money): Money {
    return fee.plus(fee.times(this.taxRatio));
  }

  protected override calculateCallFee(call: Call): Money {
    throw new Error("TaxablePolicy에서는 calculateCallFee 메서드를 사용할 수 없습니다.");
  }
}
