// Are You Old Enough?
var age = 10;
if (age >= 65) {
    console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}

// Days of the week
var day = "Sunday";
switch (day) {
    case "Monday":
        console.log('Go to work');
        break;
    case "Tuesday":
        console.log('Go to work');
        break;
    case "Wednesday":
        console.log('Go to work');
        break;
    case "Thursday":
        console.log('Go to work');
        break;
    case "Friday":
        console.log('Go to work');
        break;
    case "Saturday":
        console.log('Shower');
        break;
    case "Sunday":
        console.log('Relax');
        break;
    default:
        console.log('There is no such day');
}