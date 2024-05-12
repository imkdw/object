import Call from "../ch8/call";
import Duration from "../ch8/duration";
import Money from "./money";
import NightlyDiscountPolicy from "./policy/nightly-discount-policy";
import { RatePolicy } from "./policy/rate-policy.interface";
import RegularPolicy from "./policy/regular-policy";
import TaxablePolicy from "./policy/taxable-policy";

export default class Phone {
  private ratePolicy: RatePolicy;
  private calls: Call[] = [];

  constructor(ratePolicy: RatePolicy) {
    this.ratePolicy = ratePolicy;
  }

  getCalls(): Call[] {
    return this.calls;
  }

  calculateFee(): Money {
    return this.ratePolicy.calculateFee(this);
  }
}
