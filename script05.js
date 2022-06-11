// Find Alle de relevante billeder
const images = document.querySelectorAll(".hoverImage");

// // MOUSE OVER OG OUT lyttere

images.forEach((image) => {
  image.onmouseover = function () {
    SelectNextIMG(image);
  };
  image.onmouseout = function () {
    SelectPreviousIMG(image);
  };
});

// Erstat billederne med dem der hedder "2" istedet for "1" og omvendt

function SelectNextIMG(element) {
  element.setAttribute("src", element.getAttribute("src").replace("1.webp", "2.webp"));
}

function SelectPreviousIMG(element) {
  element.setAttribute("src", element.getAttribute("src").replace("2.webp", "1.webp"));
}
