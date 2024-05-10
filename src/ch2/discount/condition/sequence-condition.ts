import Screening from "../../screening";
import { DiscountCondition } from "./discount-condition.interface";

/**
 * 순번 할인 정책을 위한 조건
 */
export default class SequenceCondition implements DiscountCondition {
  private sequence: number;

  constructor(sequence: number) {
    this.sequence = sequence;
  }

  isSatisfiedBy(screening: Screening): boolean {
    return screening.isSequence(this.sequence);
  }
}
