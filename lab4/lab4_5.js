'use strict';
let obj = {
  className: 'open menu',
  
  /**
   * Добавляет класс в список, если его там нет.
   * @param {string} cls - Добавляемый класс.
   * @returns {Object} - Возвращает сам объект.
   */
  addClass(cls) {
    const classes = this.className.split(' ');
    if (!classes.includes(cls)) {
      classes.push(cls);
    }
    this.className = classes.join(' ');
    return this;
  },
  
  /**
   * Удаляет класс из списка, если он есть.
   * @param {string} cls - Удаляемый класс.
   * @returns {Object} - Возвращает сам объект.
   */
  removeClass(cls) {
    const classes = this.className.split(' ').filter(c => c !== '' && c !== cls);
    this.className = classes.join(' ');
    return this;
  }
};

console.log(obj.className);

obj.addClass('new').removeClass('open');
console.log(obj.className); 
