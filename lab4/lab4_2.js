function Book(title, pubYear, price) {
  let _title = title;
  let _pubYear = pubYear;
  let _price = price;

  Object.defineProperties(this, {
    title: {
      get() { return _title; },
      set(value) {
        if (value.trim() !== "") {
          _title = value;
        } else {
          console.error("Название не может быть пустым");
        }
      }
    },
    pubYear: {
      get() { return _pubYear; },
      set(value) {
        if (value > 0) {
          _pubYear = value;
        } else {
          console.error("Год издания должен быть положительным");
        }
      }
    },
    price: {
      get() { return _price; },
      set(value) {
        if (value > 0) {
          _price = value;
        } else {
          console.error("Цена должна быть положительной");
        }
      }
    }
  });
}

const book = new Book("Невеста октября", 2024, 1000);
console.log(`Название: ${book.title}, Цена: ${book.price} руб, Год выпуска: ${book.pubYear}`);

book.title = "Мы";
book.pubYear = 2021;
book.price = 1200;

console.log(`Название: ${book.title}, Цена: ${book.price} руб, Год выпуска: ${book.pubYear}`);

book.title = "";
book.pubYear = -1;
book.price = -100; 