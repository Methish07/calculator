function input(num){
document.getElementById("calculator").value+=num;
}
function result()
{
let x = document.getElementById("calculator").value;
let y = eval(x)
document.getElementById("calculator").value = y;
}
function clear()
{
document.getElementById("calculator").value = "0";
console.log(document.getElementById("calculator").value);
}