import Audience from "./audience";
import Ticket from "./ticket";

/**
 * 매표소라는 개념을 구현한 클래스
 */
export default class TicketOffice {
  private amount: number;
  private tickets: Ticket[] = [];

  constructor(amount: number, ...tickets: Ticket[]) {
    this.amount = amount;
    this.tickets.push(...tickets);
  }

  getTicket(): Ticket {
    return this.tickets.shift()!;
  }

  minusAmount(amount: number): void {
    this.amount -= amount;
  }

  plusAmount(amount: number): void {
    this.amount += amount;
  }

  sellTicketTo(audience: Audience) {
    this.plusAmount(audience.buy(this.getTicket()));
  }
}
