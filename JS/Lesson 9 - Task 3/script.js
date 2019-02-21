let money = +prompt("Ваш бюджет на месяц?", 0);

if ((typeof(money))!='number' || money==null || money == ''){
    money = +prompt("Ваш бюджет на месяц?", 0);
}

let time = prompt("Введите дату в формате YYYY-MM-DD", '2019-01-01');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", 0);

    if ((typeof (a)) === 'string' && (typeof (a) != null &&
            (typeof (b) != null)) && a != '' && b != '' &&
        a.length < 50) {
        console.log("Done");
        appData.expenses[a] = b;
    } else {
        i--;
        continue;
    }
}

// let i2 = 0;
// while (i2 < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = +prompt("Во сколько обойдется?", 0);

//     if ((typeof (a)) === 'string' && (typeof (a) != null &&
//             (typeof (b) != null)) && a != '' && b != '' &&
//         a.length < 50) {
//         console.log("Done");
//         appData.expenses[a] = b;
//         i2++;
//     } else {
//         continue;
//     }
// }

// let i3 = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = +prompt("Во сколько обойдется?", 0);

//     if ((typeof (a)) === 'string' && (typeof (a) != null &&
//             (typeof (b) != null)) && a != '' && b != '' &&
//         a.length < 50) {
//         console.log("Done");
//         appData.expenses[a] = b;
//         i2++;
//     } else {
//         continue;
//     }
// } while (i3 < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ваш бюджет на 1 день будет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

console.log(appData);