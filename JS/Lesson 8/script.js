let money,
    time;

money = prompt("Ваш бюджет на месяц?", 0);
time = prompt("Введите дату в формате YYYY-MM-DD", '2019-01-01');

let appData = {
    budget: +money,
    timeData: new Date(time),
    expenses: {
        name: "",
        sum: 0
    },
    optionalExpenses: {
        name: "",
        sum: 0
    },
    income: [],
    savings: true
};

appData.expenses.name =
    prompt("Введите обязательную статью расходов в этом месяце", "");

appData.expenses.sum =
    prompt("Во сколько обойдется?", 0);

appData.optionalExpenses.name =
    prompt("Введите обязательную статью расходов в этом месяце", "");

appData.optionalExpenses.sum =
    prompt("Во сколько обойдется?", 0);

let monthResult = appData.budget - appData.expenses.sum - 
    appData.optionalExpenses.sum;

alert("Ваш бюджет на 1 день будет: " + monthResult / 30);