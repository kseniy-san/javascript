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