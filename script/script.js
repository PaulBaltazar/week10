// for (let i = 0; 1 < 1000000; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(2 **i);
// }

// let i = 0
// while (i <= 10) {
//     console.log(2 **i); i++
// }

let input;
do {
    input = prompt("What is your name?");
    //prompt always returns string
    //convert input to number
    console.log(Number(input));
}
while (!isNaN(Number(input)));

// alert("Hello " + input);
alert(`Hello ${input}`)