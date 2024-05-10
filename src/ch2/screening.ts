import Money from "./money";
import Movie from "./movie";
import Reservation from "./reservation";

/**
 * 상영에 대한 정보를 담고 있는 클래스
 */
export default class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  constructor(movie: Movie, sequence: number, whenScreened: Date) {
    this.movie = movie;
    this.sequence = sequence;
    this.whenScreened = whenScreened;
  }

  getStartTime(): Date {
    return this.whenScreened;
  }

  isSequence(sequence: number): boolean {
    return this.sequence === sequence;
  }

  getMovieFee(): Money {
    return this.movie.getFee();
  }

  reserve(customer: Customer, audienceCount: number): Reservation {
    new Reservation(customer, this, this.calculateFee(audienceCount), audienceCount);
  }

  private calculateFee(audienceCount: number): Money {
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }
}
