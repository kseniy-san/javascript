'use strict';

class Book {
  constructor(title, pubYear, price) {
    this.title = title;
    this.pubYear = pubYear;
    this.price = price;
  }

  get title() {
    return this._title;
  }

  set title(text) {
    if (typeof text !== 'string' || text.trim() === '') {
      throw new Error('Title must be a non-empty string.');
    }
    this._title = text.trim();
  }

  get pubYear() {
    return this._pubYear;
  }

  set pubYear(newPubYear) {
    if (typeof newPubYear !== 'number' || newPubYear <= 0 || !Number.isInteger(newPubYear)) {
      throw new Error('pubYear must be a positive integer.');
    }
    this._pubYear = newPubYear;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    if (typeof newPrice !== 'number' || newPrice <= 0) {
      throw new Error('Price must be a positive number.');
    }
    this._price = newPrice;
  }

  show() {
    console.log(`Название: ${this._title},
Год публикации: ${this._pubYear},
Цена: ${this._price}`);
  }

  static compare(book1, book2) {
    return book1.pubYear - book2.pubYear;
  }
}

try {
  const book1 = new Book("Невеста октября", 2022, 800);
  const book2 = new Book("Бог", 2008, 3999);
  const book3 = new Book("Мы", 1920, 300);

  const books = [book1, book2, book3];
  books.sort(Book.compare);

  console.log("Отсортированные книги:");
  books.forEach(book => book.show());

} catch (error) {
  console.error("Ошибка:", error.message);
}