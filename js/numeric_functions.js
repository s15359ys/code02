function add(a, b){
  return a + b;
}

function subtract(a, b){
  return add(a, -1 * b);
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

function mod(a, b){
  return a % b;
}
function R(a){
 var b = multiply(2,a);
 var c = multiply(b,Math.PI);
 return c;
}
function A(a){
 var b = multiply(a,a);
 var c = multiply(b,Math.PI);
 return c;
}