let num1 = Math.ceil(Math.random() * 20);
let num2 = Math.ceil(Math.random() * 20);
let num3 = Math.ceil(Math.random() * 20);

let maxNum = Math.max(num1, num2, num3);

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let nthLetter = alphabet[num1 - 1] || "N/A"; 

let totalMinutes = num2 * num3;
let hours = Math.floor(totalMinutes / 60);
let minutes = totalMinutes % 60;

document.addEventListener("DOMContentLoaded", function () 
{
    document.getElementById("randomNumbers").innerText = `Generated Numbers: ${num1}, ${num2}, ${num3}`;
    document.getElementById("largestNumber").innerText = `The largest number is: ${maxNum}`;
    document.getElementById("nthLetter").innerText = `The ${num1}th letter of the alphabet is: ${nthLetter}`;
    document.getElementById("timeBreakdown").innerText = `Time breakdown: ${totalMinutes} minutes = ${hours} hr ${minutes} min`;
}
                         );