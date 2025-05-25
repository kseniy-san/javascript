/**
 * Проверяет, является ли объект полностью пустым.
 * @param {Object} obj - Объект для проверки.
 * @returns {boolean} - true, если объект пуст, иначе false.
 */
function isEmpty(obj) {
  const stringProps = Object.getOwnPropertyNames(obj);
  const symbolProps = Object.getOwnPropertySymbols(obj);

  return stringProps.length + symbolProps.length === 0;
}

const testObj = {
  [Symbol()]: true
};

console.log(isEmpty(testObj)); 
console.log(isEmpty({}));     