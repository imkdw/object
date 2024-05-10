import Money from "../../money";
import Screening from "../../screening";
import { DiscountCondition } from "../condition/discount-condition.interface";
import DiscountPolicy from "./discount-policy";

export default class PercentDiscountPolicy extends DiscountPolicy {
  private percent: number;

  constructor(percent: number, ...conditions: DiscountCondition[]) {
    super(...conditions);
    this.percent = percent;
  }

  protected override getDiscountAmount(screening: Screening) {
    return screening.getMovieFee().times(this.percent);
  }
}
