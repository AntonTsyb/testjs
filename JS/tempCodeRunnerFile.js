let num = 50;

if (num < 49) {
    console.log("Wrong");
} else if (num > 100) {
    console.log("Too much");
} else {
    console.log("It`s right");
}

(num == 50) ? console.log("It`s right"): console.log("Wrong");

switch (num) {
    case num < 49:
        console.log("Wrong");
        break;
    case num > 100:
        console.log("Too much");
        break;
    case num > 80:
        console.log("Too much");
        break;
    case 50:
        console.log("It`s right");
        break;
    default:
        console.log("Something go wrong");
        break;    
}