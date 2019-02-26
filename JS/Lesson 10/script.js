// let num = 20;

// function showFirstMessage(text){
//     alert(text);
//     console.log(num);
// }

// showFirstMessage("Hello world"); 
// console.log(num);



let calc =  (a,b)=> (a+b);

function retVar(){
    let num = 50;
    return num;
}

// console.log(calc(3,4));
// console.log(calc(5,6));
// console.log(calc(11,22));

let anotherNum = retVar();
console.log(anotherNum);

let str = "TeSt";
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.8px";
//console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));