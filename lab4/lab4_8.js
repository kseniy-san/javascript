'use strict';
function formatDate(date) {
  const padZero = (n) => n.toString().padStart(2, '0');
  
  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1); 
  const year = date.getFullYear().toString().slice(-2); 
  
  return `${day}.${month}.${year}`;
}

console.log(formatDate(new Date(2025, 9, 5))); 
const today = new Date();
console.log(formatDate(today));