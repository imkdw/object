import MovieType from "./enums/movie-type.enum";
import Money from "./money";
import Movie from "./movie";

export default class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  getMovie(): Movie {
    return this.movie;
  }

  setMovie(movie: Movie): void {
    this.movie = movie;
  }

  getSequence(): number {
    return this.sequence;
  }

  setSequence(sequence: number): void {
    this.sequence = sequence;
  }

  getWhenScreened(): Date {
    return this.whenScreened;
  }

  setWhenScreened(whenScreened: Date): void {
    this.whenScreened = whenScreened;
  }

  calculateFee(audienceCount: number): Money {
    switch (this.movie.getMovieType()) {
      case MovieType.AMOUNT_DISCOUNT:
        if (this.movie.isDiscountable(this.whenScreened, this.sequence)) {
          return this.movie.calculateAmountDiscountedFee().times(audienceCount);
        }
        break;
      case MovieType.PERCENT_DISCOUNT:
        if (this.movie.isDiscountable(this.whenScreened, this.sequence)) {
          return this.movie.calculatePercentDiscountedFee().times(audienceCount);
        }
        break;
      case MovieType.NONE_DISCOUNT:
        return this.movie.calculateNoneDiscountedFee().times(audienceCount);
    }

    return this.movie.getFee().times(audienceCount);
  }
}
