// Check whether a given year is a leap year in the Gregorian calendar
function leapYear(year)
{
    return (year % 100 === 0)?(year % 400 === 0):(year % 4 === 0);
}
console.log(leapYear(2016));
console.log(leapYear(2000));
console.log(leapYear(1700));