const obj = {
  name: "Test",
  data: {
    values: [1, 2, 3],
    enabled: true
  }
};

const jsonString = JSON.stringify(obj, null, 2);
console.log("Сериализованный JSON:");
console.log(jsonString);

const obj2 = JSON.parse(jsonString);

const areEqual = JSON.stringify(obj) === JSON.stringify(obj2);
console.log("Объекты равны?", areEqual);