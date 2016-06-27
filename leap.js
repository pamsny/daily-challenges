# daily-challenges
var year = prompt('Enter a year');
function leapYear(year) 
{

    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
        return console.log(year + ' is a leap year!!!');         
    }
    else {
        return console.log(year + ' is NOT a leap year');        
    }

}

document.write(leapYear(year));
//console.log(leapYear(year));
