import Invitation from "./invitation";
import Ticket from "./ticket";

/**
 * 소지품이라는 개념을 구현한 클래스
 *
 * 이벤트 당첨자 : 티켓으로 교환할 초대장을 가짐
 * 이벤트 미당첨자 : 티켓을 구매할 수 있는 현금을 보유함
 *
 * 관람객이 가질수 있는 소지품 : 초대장, 현금, 티켓
 *
 * 상태1 : 현금과 초대장을 함께 소유
 * 상태2 : 초대장없이 현금만 보유
 * 위 상태에 제약을 걸기위해 생성자를 여러개 선언함
 */
export default class Bag {
  private amount: number;
  private invitation: Invitation | null;
  private ticket: Ticket | null;

  constructor(amount: number);
  constructor(invitation: Invitation, amount: number);
  constructor(invitationOrAmount: Invitation | number, amount?: number) {
    if (typeof invitationOrAmount === "number") {
      this.invitation = null;
      this.amount = invitationOrAmount;
    } else {
      this.invitation = invitationOrAmount;
      this.amount = amount!;
    }

    this.ticket = null;
  }

  private hasInvitation(): boolean {
    return this.invitation !== null;
  }

  private hasTicket(): boolean {
    return this.ticket !== null;
  }

  private setTicket(ticket: Ticket): void {
    this.ticket = ticket;
  }

  private minusAmount(amount: number): void {
    this.amount -= amount;
  }

  private plusAmount(amount: number): void {
    this.amount += amount;
  }

  hold(ticket: Ticket): number {
    if (this.hasInvitation()) {
      this.setTicket(ticket);
      return 0;
    } else {
      this.setTicket(ticket);
      this.minusAmount(ticket.getFee());
      return ticket.getFee();
    }
  }
}
