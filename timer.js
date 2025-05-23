function r(){
let a = prompt("Enter Hour of Timer");
let b = prompt("Enter Minutes of Timer");
let c = prompt("Enter Seconds of Timer");
function times(){
    hour = a.toString().padStart(2, '0');
    min = b.toString().padStart(2, '0');
    sec = c.toString().padStart(2, '0');
    const time = `${hour} : ${min} : ${sec}`;
if(b>0 && c==0){
 c=60;
 b--;   
}
if(a>0 && b==0 && c==0){
    b=59;
    c=60;
    a--;
}
if(a==0 && b==0 && c==0){
    sec = 0;
   clearInterval(i);
   alert("Time has Reached 0");
}
if(c>0)
c--;
document.getElementById('timer').innerHTML = time;
}
const i = setInterval(times, 1000);
times();
}


// function r() {
//   let a = parseInt(prompt("Enter Hour of Timer"), 10);
//   let b = parseInt(prompt("Enter Minutes of Timer"), 10);
//   let c = parseInt(prompt("Enter Seconds of Timer"), 10);

//   function times() {
//     // Check if timer has reached 0
//     if (a === 0 && b === 0 && c === 0) {
//       clearInterval(i);
//       document.getElementById('timer').innerHTML = `00 : 00 : 00`;
//       alert("Time has Reached 0");
//       return;
//     }

//     // Decrement logic
//     if (c > 0) {
//       c--;
//     } else {
//       if (b > 0) {
//         b--;
//         c = 59;
//       } else if (a > 0) {
//         a--;
//         b = 59;
//         c = 59;
//       }
//     }

//     // Format for display
//     const hour = a.toString().padStart(2, '0');
//     const min = b.toString().padStart(2, '0');
//     const sec = c.toString().padStart(2, '0');
//     const time = `${hour} : ${min} : ${sec}`;
//     document.getElementById('timer').innerHTML = time;
//   }

//   const i = setInterval(times, 1000);
//   times();
// }
