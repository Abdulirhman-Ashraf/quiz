let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");
let quiz = document.querySelector(".quiz");
let container = document.querySelector(".container");
let quizOne = document.querySelector(".quizOne");
let labelOne = document.querySelector(".labelOne");
let quizTwo = document.querySelector(".quizTwo");
let quizThree = document.querySelector(".quizThree");
let quizFour = document.querySelector(".quizFour");
let quizFive = document.querySelector(".quizFive");
let quizSix = document.querySelector(".quizSix");
let quizSeven = document.querySelector(".quizSeven");
let quizEight = document.querySelector(".quizEight");
let quizNine = document.querySelector(".quizNine");
let quizTen = document.querySelector(".quizTen");
let output1 = document.querySelector(".output");
let inputs = document.querySelector("input");
let quizNum = document.querySelector("#quizNum");
let lis = document.querySelectorAll("ul li");
btn1.addEventListener("click", function () {
  quizTwo.style.display = "block";
  quizOne.style.display = "none";
  lis[1].classList.add("active");

});

btn2.addEventListener("click", function () {
  quizTwo.style.display = "none";
  quizThree.style.display = "block";
  lis[2].classList.add("active");
});
btn3.addEventListener("click", function () {
  quizThree.style.display = "none";
  quizFour.style.display = "block";
  lis[3].classList.add("active");
});
btn4.addEventListener("click", function () {
  quizFour.style.display = "none";
  quizFive.style.display = "block";
  lis[4].classList.add("active");
});
btn5.addEventListener("click", function () {
  quizFive.style.display = "none";
  quizSix.style.display = "block";
  lis[5].classList.add("active");
});
btn6.addEventListener("click", function () {
  quizSix.style.display = "none";
  quizSeven.style.display = "block";
  lis[6].classList.add("active");
});
btn7.addEventListener("click", function () {
  quizSeven.style.display = "none";
  quizEight.style.display = "block";
  lis[7].classList.add("active");
});
btn8.addEventListener("click", function () {
  quizEight.style.display = "none";
  quizNine.style.display = "block";
  lis[8].classList.add("active");
});
btn9.addEventListener("click", function () {
  quizNine.style.display = "none";
  quizTen.style.display = "block";
  lis[9].classList.add("active");
});
function output() {
  let result = 0;
  if (document.getElementById("three1").checked) {
    result++;
  }
  if (document.getElementById("one2").checked) result++;
  if (document.getElementById("three3").checked) result++;
  if (document.getElementById("three4").checked) result++;
  if (document.getElementById("three5").checked) result++;
  if (document.getElementById("four6").checked) result++;
  if (document.getElementById("one7").checked) result++;
  if (document.getElementById("one8").checked) result++;
  if (document.getElementById("three9").checked) result++;
  if (document.getElementById("four10").checked) result++;
  if (result >= 6) {
    output1.innerHTML = `<h2> Congratulations!, You get ${result} from 10 </h2> `;
  }
  if (result <= 6) {
    output1.innerHTML = `<h2> You should study hard, you get ${result} from 10 </h2> `;
  }
  if (result == 0) {
    output1.innerHTML = `<h2> You should study hard, you get 0 from 10 </h2> `;
  }
  container.style.display = "none";
  output1.style.display = "flex";
}
