"use strict";
class Book {
    /**
     * Создает экземпляр книги.
     * @param {string} title - Название книги.
     * @param {number} pubYear - Год публикации.
     * @param {number} price - Цена книги.
     */
    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    show() {
        console.log(`Название: ${this.title}, Цена: ${this.price} руб`);
    }
}

const myBook = new Book("Мы", 1920, 300);
myBook.show(); 

