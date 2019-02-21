let num = 50;
while (num < 55) {
    console.log(num);
    num++;
}

console.log("Reset num to 50");
num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}