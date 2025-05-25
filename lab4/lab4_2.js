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
const myBook = new Book("Clean Code", 2008, 3999);
myBook.show(); 

try {
  myBook.title = 'Clean Code';
  myBook.pubYear = -2008;
  myBook.price = 3999;
  myBook.show(); 
} catch (error) {
  console.error('Ошибка:', error.message);
}
try {
    myBook.title = ''; 
    myBook.pubYear = 2008; 
   myBook.price = 3999; 
}catch (error) {
  console.error('Ошибка:', error.message);
}
try {
  myBook.title = 'Clean Code';
  myBook.pubYear = 2008;
  myBook.price = -3999;
  myBook.show(); 
} catch (error) {
  console.error('Ошибка:', error.message);
}