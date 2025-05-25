class Book {
  #title;  
  #pubYear;
  #price;
  constructor(title, pubYear, price) {
    this.title = title;
    this.pubYear = pubYear;
    this.price = price;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    if (value.trim() === '') {
      throw new Error("Название не может быть пустым");
    }
    this.#title = value;
  }

  get pubYear() {
    return this.#pubYear;
  }

  set pubYear(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error("Год публикации должен быть положительным числом");
    }
    this.#pubYear = value;
  }

  get price() {
    return this.#price;
  }

  set price(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error("Цена должна быть положительным числом");
    }
    this.#price = value;
  }

  show() {
    console.log(`Название: ${this.title}, Цена: ${this.price} руб`);
  }
}
const myBook = new Book("Мы", -1920, 300);
myBook.show(); 


//   /** Статический метод для сравнения книг по году публикации */
//   static compare(a, b) {
//     return a.pubYear - b.pubYear;
//   }
// }

// // Пример использования
// try {
//   const book1 = new Book("JavaScript: The Good Parts", 2008, 29.99);
//   const book2 = new Book("Clean Code", 2008, 39.99);
//   const book3 = new Book("Design Patterns", 1994, 49.99);

//   book1.price = 19.99; 

//   const books = [book1, book2, book3];
//   books.sort(Book.compare);

//   console.log("Отсортированные книги:");
//   books.forEach(book => book.show());

// } catch (error) {
//   console.error("Ошибка:", error.message);
// }