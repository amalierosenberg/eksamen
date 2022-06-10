let cont = document.querySelector(".container-produkter");
let left = document.querySelector(".pre-btn");
let right = document.querySelector(".nxt-btn");

left.addEventListener("click", slideL);
right.addEventListener("click", slideR);

function slideL() {
  console.log("Left!");
  cont.scrollBy(-184.033, 0);
}

function slideR() {
  console.log("Right!");
  cont.scrollBy(184.033, 0);
}

const img12 = document.querySelector(".image12");
const img13 = document.querySelector(".image13");
const img14 = document.querySelector(".image14");
const img15 = document.querySelector(".image15");
const img16 = document.querySelector(".image16");
const img17 = document.querySelector(".image17");

// // MOUSE OVER OG OUT lyttere
img12.onmouseover = function () {
  img12MouseOver();
};
img12.onmouseout = function () {
  img12MouseOut();
};

img13.onmouseover = function () {
  img13MouseOver();
};
img13.onmouseout = function () {
  img13MouseOut();
};

img14.onmouseover = function () {
  img14MouseOver();
};
img14.onmouseout = function () {
  img14MouseOut();
};

img15.onmouseover = function () {
  img15MouseOver();
};
img15.onmouseout = function () {
  img15MouseOut();
};

img16.onmouseover = function () {
  img16MouseOver();
};
img16.onmouseout = function () {
  img16MouseOut();
};

img17.onmouseover = function () {
  img17MouseOver();
};
img17.onmouseout = function () {
  img17MouseOut();
};

// FUNKTIONERNE;

function img12MouseOver() {
  img12.setAttribute("src", "img/boeger2.webp");
}

function img12MouseOut() {
  img12.setAttribute("src", "img/boeger1.webp");
}

function img13MouseOver() {
  img13.setAttribute("src", "img/kurve2.webp");
}

function img13MouseOut() {
  img13.setAttribute("src", "img/kurve1.webp");
}

function img14MouseOver() {
  img14.setAttribute("src", "img/bamser2.webp");
}

function img14MouseOut() {
  img14.setAttribute("src", "img/bamser1.webp");
}

function img15MouseOver() {
  img15.setAttribute("src", "img/lampe2.webp");
}

function img15MouseOut() {
  img15.setAttribute("src", "img/lampe1.webp");
}

function img16MouseOver() {
  img16.setAttribute("src", "img/spil2.webp");
}

function img16MouseOut() {
  img16.setAttribute("src", "img/spil1.webp");
}

function img17MouseOver() {
  img17.setAttribute("src", "img/traelegetoej2.webp");
}

function img17MouseOut() {
  img17.setAttribute("src", "img/traelegetoej1.webp");
}
