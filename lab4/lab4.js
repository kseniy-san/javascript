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
            throw new Error('Название не может быть пустым');
        }
        this._title = text.trim();
    }

    get pubYear() {
        return this._pubYear;
    }

    set pubYear(newPubYear) {
        if (typeof newPubYear !== 'number' || newPubYear <= 0 || !Number.isInteger(newPubYear)) {
            throw new Error('Год публикации должен быть положительным числом');
        }
        this._pubYear = newPubYear;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        if (typeof newPrice !== 'number' || newPrice <= 0) {
            throw new Error('Цена должна быть положительным числом');
        }
        this._price = newPrice;
    }

    show() {
        console.log(`Название: ${this._title},
Год публикации: ${this._pubYear},
Цена: ${this._price}`);
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