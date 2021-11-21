class Book {
  constructor(author, title, publisher, releaseDate, pages, genre, series) {
    this.author = author;
    this.title = title;
    this.publisher = publisher;
    this.releaseDate = releaseDate;
    this.pages = pages;
    this.genre = genre;
    this.series = series;
  }
  isBookSeries(seriesNum) {
    this.series = seriesNum;
  }
  bookAge() {
    let now = new Date();
    let release = new Date(this.releaseDate);
    console.log(release);
    let elapsed = now - release; // elapsed time in milliseconds
    let numDays = Math.floor(elapsed / (1000 * 3600 * 24));
    return numDays;
  }
}

export default Book;
