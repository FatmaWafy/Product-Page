let IMG = document.getElementById("productimg");
let BTNS = document.getElementsByClassName("btn");

BTNS[0].onclick = function () {
  IMG.src = "./images/image1.png";
  for (btn of BTNS) {
    btn.classList.remove("active");
  }
  this.classList.add("active");
};
BTNS[1].onclick = function () {
  IMG.src = "./images/image2.png";
  for (btn of BTNS) {
    btn.classList.remove("active");
  }
  this.classList.add("active");
};
BTNS[2].onclick = function () {
  IMG.src = "./images/image3.png";
  for (btn of BTNS) {
    btn.classList.remove("active");
  }
  this.classList.add("active");
};
