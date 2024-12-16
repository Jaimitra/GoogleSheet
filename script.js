let head = document.querySelector("#header");
let column = 27;
let rows = 101;

for (let i = 0; i < rows; i++) {
  let divrow = document.createElement("div");
  for (let j = 0; j < column; j++) {
    let divcol = document.createElement("div");
    divcol.id = "cell";
    let input = document.createElement("input");
    // Here the colnames and rownames like A,B,C,.... and 1,2,3... are not getting input element
    if (i != 0 && j != 0) {
      input.className = "input";
      divcol.appendChild(input);
      input.id = String.fromCharCode(j + 64) + i;
      input.type = "text";
    }
    divrow.appendChild(divcol);
    // Here j == 0 means 1,2,3... are getting stickey class
    if (j == 0) {
      divcol.innerText = i;
      divcol.classList.add("stickycol");
    }
    // here we this condition to give the first cell in 1 row to keep it has empty
    if (i == 0 && j == 0) {
      divcol.innerText = " ";
    } else if (i == 0) {
      // here if i == 0 then we are assinging A,B,C.. has innerText
      divcol.innerText = String.fromCharCode(j + 64);
      divcol.style.backgroundColor = "lightgrey";
    }
  }
  // we are giving sticky to the A,B,C... row
  if (i == 0) {
    divrow.classList.add("stickyrow");
  }
  divrow.id = "row";
  head.appendChild(divrow);
}
// targetElement is used to tell which element is been targetted
let targetElement;
let element = document.querySelector("#element");
head.addEventListener("click", function (event) {
  // element.innerText = event.target.id;
  targetElement = document.getElementById(event.target.id);
  let a = targetElement.classList;
  if (!"stickyrow".includes(a) && !"stickycol".includes(a)) {
    element.innerText = event.target.id;
  }
  let elementbar = document.querySelector("#elementbar");
  elementbar.value = "";
});
//
//
//
//
function boldMethod() {
  // console.log(targetElement.innerText);
  let classname = targetElement.className;
  if (classname.includes("Bolder")) {
    targetElement.classList.remove("Bolder");
    return;
  }
  targetElement.classList.add("Bolder");
  return;
}
let bold = document.querySelector(".fa-bold");
bold.addEventListener("click", function () {
  boldMethod();
});
//
//
//
//
function italicMethod() {
  let classname = targetElement.className;
  if (classname.includes("Italic")) {
    targetElement.classList.remove("Italic");
    return;
  }
  targetElement.classList.add("Italic");
  return;
}
let italic = document.querySelector(".fa-italic");
italic.addEventListener("click", function () {
  italicMethod();
});
//
//
//
//
function underLineMethod() {
  let classname = targetElement.className;
  if (classname.includes("UnderLine")) {
    targetElement.classList.remove("UnderLine");
    return;
  }
  targetElement.classList.add("UnderLine");
  return;
}
let underLine = document.querySelector(".fa-underline");
underLine.addEventListener("click", function () {
  underLineMethod();
});
//
//
//
//
//
let leftAlign = document.querySelector(".fa-align-left");
leftAlign.addEventListener("click", function () {
  targetElement.classList.remove("RightAlign", "Center");
  targetElement.classList.add("LeftAlign");
});
//
//
//
//
//
let rightAlign = document.querySelector(".fa-align-right");
rightAlign.addEventListener("click", function () {
  targetElement.classList.remove("LeftAlign", "Center");
  targetElement.classList.add("RightAlign");
});
//
//
//
//
//
let centerAlign = document.querySelector(".fa-align-center");
centerAlign.addEventListener("click", function () {
  targetElement.classList.remove("RightAlign", "LeftAlign");
  targetElement.classList.add("Center");
});
//
//here in order to get value of input we use targetElement.value
//if you want to get value of <p></p>,etc use p.innerText
//dont get confuse on these two ok.
let innerTextAfterCopy = "l";
let copy = document.querySelector(".fa-clone");
copy.addEventListener("click", function () {
  innerTextAfterCopy = targetElement.value;
});
//
//
//
//
let innerTextAfterCut;
let previousTarget;
let cutflag;
let cut = document.querySelector(".fa-scissors");
cut.addEventListener("click", function () {
  cutflag = true;
  previousTarget = targetElement;
  innerTextAfterCut = targetElement.value;
});
//
//
//
//
let paste = document.querySelector(".fa-clipboard");
paste.addEventListener("click", function () {
  if (cutflag) {
    targetElement.value = innerTextAfterCut;
    previousTarget.value = "";
    cutflag = false;
  } else {
    targetElement.value = innerTextAfterCopy;
  }
});
//
//
//
//
let inputtext = document.querySelector("#elementbar");
inputtext.addEventListener("input", function () {
  targetElement.value = inputtext.value;
});
//
//
//
//
let size = document.querySelector("#size");
size.addEventListener("click", function () {
  console.log(size.value);
  targetElement.style.fontSize = size.value + "px";
});
// let f = document.querySelector(".fa-font");
// f.addEventListener("click", function () {
//   let colorPicker = document.createElement("input");
//   colorPicker.type = "color";
//   console.log("J");
//   colorPicker.addEventListener("input", function () {
//     var selectedColor = colorPicker.value;
//     targetElement.style.color = selectedColor;
//     colorPicker.click();
//   });
// });
