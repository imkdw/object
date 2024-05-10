import Audience from "./audience";
import TicketOffice from "./ticket-office";

/**
 * 판매원이라는 개념을 구현한 클래스
 */
export default class TicketSeller {
  private ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  sellTo(audience: Audience): void {
    this.ticketOffice.sellTicketTo(audience);
  }
}
