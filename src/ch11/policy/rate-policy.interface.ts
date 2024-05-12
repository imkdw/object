import Money from "../money";

export interface RatePolicy {
  calculateFee(phone: Phone): Money;
}
