"use strict";

let input;
let total = 0;

while (true) {
  input = prompt(`Введите число`);

  if (isNaN(Number(input))) {
    alert(`Было введено не число, попробуйте еще раз`);
  } else if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  } else {
    total = Number(input) + total;
  }
}
