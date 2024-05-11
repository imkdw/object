import Customer from "./customer";
import Money from "./money";
import Screening from "./screening";

export default class Reservation {
  private customer: Customer;
  private screening: Screening;
  private fee: Money;
  private audienceCount: number;

  constructor(customer: Customer, screening: Screening, fee: Money, audienceCount: number) {
    this.customer = customer;
    this.screening = screening;
    this.fee = fee;
    this.audienceCount = audienceCount;
  }

  getCustomer(): Customer {
    return this.customer;
  }

  getScreening(): Screening {
    return this.screening;
  }

  getFee(): Money {
    return this.fee;
  }

  getAudienceCount(): number {
    return this.audienceCount;
  }

  setCustomer(customer: Customer): void {
    this.customer = customer;
  }

  setScreening(screening: Screening): void {
    this.screening = screening;
  }

  setFee(fee: Money): void {
    this.fee = fee;
  }

  setAudienceCount(audienceCount: number): void {
    this.audienceCount = audienceCount;
  }
}
