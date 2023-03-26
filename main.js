let back = document.querySelector(".back");
let next = document.querySelector(".next");
let screen = document.querySelector(".screen");

let picture1 = `<img src="./picture1.jpg" class="picture" alt="">`;
let picture2 = `<img src="./picture2.jpg" class="picture" alt="">`;
let picture3 = `<img src="./picture3.jpg" class="picture" alt="">`;
let array = [picture1, picture2, picture3];
var arrayIndex = 0;

back.addEventListener("click", () => {
  if (arrayIndex > 0) {
    arrayIndex = arrayIndex - 1;
    screen.innerHTML = array[arrayIndex];
  }
});
next.addEventListener("click", () => {
  if (arrayIndex < array.length - 1) {
    arrayIndex = arrayIndex + 1;
    screen.innerHTML = array[arrayIndex];
  }
});
