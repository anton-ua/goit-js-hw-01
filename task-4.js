"use strict";

let credits = 23580;
const pricePerDroid = 3000;

const droidsToBuy = prompt(`Введите количество дроидов`);

if (droidsToBuy === null) {
  console.log(`Отменено пользователем!`);
} else {
  const totalPrice = Number(droidsToBuy) * pricePerDroid;
  if (totalPrice >= credits) {
    console.log(`Недостаточно средств на счету!`);
  } else {
    console.log(
      `Вы купили ${droidsToBuy} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`
    );
  }
}
