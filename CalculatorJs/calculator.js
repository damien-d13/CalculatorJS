/** take the Element id calculator in the html document */
var calculator = document.getElementById("calculator");

/** Create node for Button and Input */
var rowInput = document.createElement("article");
calculator.appendChild(rowInput);
var rowBtn = document.createElement("article");
calculator.appendChild(rowBtn);

/** Create Row for Button */
var divRowBtn1 = document.createElement("div");
rowBtn.appendChild(divRowBtn1);
var divRowBtn2 = document.createElement("div");
rowBtn.appendChild(divRowBtn2);
var divRowBtn3 = document.createElement("div");
rowBtn.appendChild(divRowBtn3);
var divRowBtn4 = document.createElement("div");
rowBtn.appendChild(divRowBtn4);
var divRowBtn5 = document.createElement("div");
rowBtn.appendChild(divRowBtn5);

/** Create Input */
var input = document.createElement("input");
input.id = "input";
rowInput.appendChild(input);

/** Create Button */

/** First Row */
var btnDelete = document.createElement("button");
btnDelete.id = "btn-reset";
btnDelete.classList.add("button");
btnDelete.innerHTML = "C";
divRowBtn1.appendChild(btnDelete);
var btnDel = document.createElement("button");
btnDel.id = "delete";
btnDel.classList.add("button");
btnDel.innerHTML = "<-";
divRowBtn1.appendChild(btnDel);
var btnDivide = document.createElement("button");
btnDivide.classList.add("button");
btnDivide.innerHTML = "/";
btnDivide.setAttribute("value", "/");
btnDivide.setAttribute("name", "btn");
divRowBtn1.appendChild(btnDivide);
var btnPercent = document.createElement("button");
btnPercent.classList.add("button");
btnPercent.innerHTML = "%";
btnPercent.setAttribute("value", "%");
btnPercent.setAttribute("name", "btn");
divRowBtn1.appendChild(btnPercent);

/** Second Row */
var btn7 = document.createElement("button");
btn7.classList.add("button");
btn7.innerHTML = "7";
btn7.setAttribute("value", "7");
btn7.setAttribute("name", "btn");
divRowBtn2.appendChild(btn7);
var btn8 = document.createElement("button");
btn8.classList.add("button");
btn8.innerHTML = "8";
btn8.setAttribute("value", "8");
btn8.setAttribute("name", "btn");
divRowBtn2.appendChild(btn8);
var btn9 = document.createElement("button");
btn9.classList.add("button");
btn9.innerHTML = "9";
btn9.setAttribute("value", "9");
btn9.setAttribute("name", "btn");
divRowBtn2.appendChild(btn9);
var btnMultiplication = document.createElement("button");
btnMultiplication.classList.add("button");
btnMultiplication.innerHTML = "*";
btnMultiplication.setAttribute("value", "*");
btnMultiplication.setAttribute("name", "btn");
divRowBtn2.appendChild(btnMultiplication);

/** Third Row */
var btn4 = document.createElement("button");
btn4.classList.add("button");
btn4.innerHTML = "4";
btn4.setAttribute("value", "4");
btn4.setAttribute("name", "btn");
divRowBtn3.appendChild(btn4);
var btn5 = document.createElement("button");
btn5.classList.add("button");
btn5.innerHTML = "5";
btn5.setAttribute("value", "5");
btn5.setAttribute("name", "btn");
divRowBtn3.appendChild(btn5);
var btn6 = document.createElement("button");
btn6.classList.add("button");
btn6.innerHTML = "6";
btn6.setAttribute("value", "6");
btn6.setAttribute("name", "btn");
divRowBtn3.appendChild(btn6);
var btnMinus = document.createElement("button");
btnMinus.classList.add("button");
btnMinus.innerHTML = "-";
btnMinus.setAttribute("value", "-");
btnMinus.setAttribute("name", "btn");
divRowBtn3.appendChild(btnMinus);

/** Fourth Row */
var btn1 = document.createElement("button");
btn1.classList.add("button");
btn1.innerHTML = "1";
btn1.setAttribute("value", "1");
btn1.setAttribute("name", "btn");
divRowBtn4.appendChild(btn1);
var btn2 = document.createElement("button");
btn2.classList.add("button");
btn2.innerHTML = "2";
btn2.setAttribute("value", "2");
btn2.setAttribute("name", "btn");
divRowBtn4.appendChild(btn2);
var btn3 = document.createElement("button");
btn3.classList.add("button");
btn3.innerHTML = "3";
btn3.setAttribute("value", "3");
btn3.setAttribute("name", "btn");
divRowBtn4.appendChild(btn3);
var btnPlus = document.createElement("button");
btnPlus.classList.add("button");
btnPlus.innerHTML = "+";
btnPlus.setAttribute("value", "+");
btnPlus.setAttribute("name", "btn");
divRowBtn4.appendChild(btnPlus);

/** Fifth Row */
var btnDot = document.createElement("button");
btnDot.classList.add("button");
btnDot.innerHTML = ".";
btnDot.setAttribute("value", ".");
btnDot.setAttribute("name", "btn");
divRowBtn5.appendChild(btnDot);
var btn0 = document.createElement("button");
btn0.classList.add("button");
btn0.innerHTML = "0";
btn0.setAttribute("value", "0");
btn0.setAttribute("name", "btn");
divRowBtn5.appendChild(btn0);
var btn00 = document.createElement("button");
btn00.classList.add("button");
btn00.innerHTML = "00";
btn00.setAttribute("value", "00");
btn00.setAttribute("name", "btn");
divRowBtn5.appendChild(btn00);
var btnEquals = document.createElement("button");
btnEquals.id = "equals";
btnEquals.classList.add("button");
btnEquals.innerHTML = "=";
btnEquals.setAttribute("value", "=");
divRowBtn5.appendChild(btnEquals);







/** Calcul and Event function */
window.addEventListener("load", (event) => {
  //Take the button for add Event and CSS
  var btns = document.getElementsByName("btn");
  var btnR = document.getElementById("delete");
  var btnEf = document.getElementById("btn-reset");

  var btnEg = document.getElementById("equals");
  console.log(btns.length);
  // INPUT
  var txt = document.getElementById("input");
  
  console.log("hello");
  //Function display
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      console.log(i);
      console.log("hello");
      txt.value += this.value;
    });
  }
  // Function delete all
  btnR.addEventListener("click", function () {
    txt.value = "";
  });
  // Function delete one by one
  btnEf.addEventListener("click", function () {
    txt.value = txt.value.substring(0, txt.value.length - 1);
  });
  // Function evaluation
  btnEg.addEventListener("click", function () {
    txt.value = eval(txt.value);
  });


/**  Add CSS */

for (let index = 0; index < btns.length; index++) {
    btns[index].style.width = "50px";
    btns[index].style.marginRight = "2px";

}
btnR.style.width = "50px";
btnR.style.marginRight = "2px";
btnEf.style.width = "50px";
btnEf.style.marginRight = "2px";
btnEg.style.width = "50px";
btnEg.style.marginRight = "2px";
txt.style.width = "200px";
txt.style.marginRight = "2px";


});