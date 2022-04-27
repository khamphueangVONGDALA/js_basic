var data = document.querySelectorAll(".mgi__content__banner");
var demo = document.querySelectorAll(".mgi__btn__header");
// var btn = document.querySelectorAll(".btn-top");
var next = document.querySelector(".next");
var back = document.querySelector(".back");

var m = 0;
demo.forEach((e, index) => {
  e.onclick = function () {
    var active = document.querySelector(".active");
    var btn_active=document.querySelector(".mgi__btn__header.active")


    active.classList.remove("active");
    data[index].classList.add("active");
    btn_active.classList.remove("active");
    demo[index].classList.add("active");
  };
});

// next-back
next.addEventListener("click", nextslide);


function nextslide() {
  var active = document.querySelector(".active");
  active.classList.remove("active");
  data[m].classList.add("active");
  m += 1;
  m === data.length ? (m = 0) : false;
}

back.addEventListener("click", backslide);

function backslide() {
  var active = document.querySelector(".active");
  active.classList.remove("active");
  m -= 1;
  if (m < 0) {
    m = data.length - 1;
    data[m].classList.add("active");
  } else {
    data[m].classList.add("active");
  }
}


var sub_color =document.querySelector(".sub_color")

function subcolor(){
  sub_color.classList.toggle("active");
}
