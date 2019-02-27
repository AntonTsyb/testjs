let money, time,
    appData = {
        budget: null,
        timeData: null,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
    };

function start() {
    money = +prompt("Ваш бюджет на месяц?", 0);
    time = prompt("Введите дату в формате YYYY-MM-DD", '2019-01-01');

    while (isNaN(money) || money == null || money == '') {
        money = +prompt("Ваш бюджет на месяц?", 0);
    }

    appData.budget = money;
    appData.timeData = time;
}

function chooseExpenses() {
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
}

function detectDayBudget() {
    appData.moneyPerDay = +(appData.budget / 30).toFixed(2);
    alert("Ваш бюджет на 1 день будет: " + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накопления?"),
            percent = +prompt("Под какой процент?");

        appData.monthInCome = save / 100 / 12 * percent;
        alert("Доход в месяц с накопления: " + appData.monthInCome);
    }
}

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let opt = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = opt;
    }
}

start();
chooseExpenses();
detectDayBudget();
detectLevel();
checkSavings();
chooseOptExpenses();

console.log(appData);