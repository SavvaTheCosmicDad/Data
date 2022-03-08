
// Формат даты:YYYY-MM-DD

let data = new Date("2006-03-18");
let day = [
    "Воскресенье", "Понедельник", "Вторник",
    "Среда", "Четверг", "Пятница", "Суббота"
];
let monthName = [
    "Январь", "Февраль", "Март",
    "Апрель", "Мая", "Июнь", "Июль",
    "Август", "Сентябрь", "Октябрь",
    "Ноябрь", "Декабрь"
];
let weekday = data.getDay();
weekday = day[weekday];
let month = data.getMonth();
month = monthName[month];
let year = data.getFullYear()
console.log(weekday, month, year + "года");