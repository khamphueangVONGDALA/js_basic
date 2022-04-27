
var btn = document.querySelectorAll(".mgi__btn__banner");
var cls = document.querySelectorAll(".cl");
var next = document.querySelector(".next");
var back = document.querySelector(".back");
var icon= document.querySelectorAll(".mgi__icon__box");
var contact=document.querySelector(".mgi__contact__box");
var btn__contact__footer=document.querySelector(".btn__contact__footer")



cls.forEach((i, id) => {
  i.onclick = function () {

    console.log(i);
    if (id === 0) {

      btn.forEach((e)=>{
        e.style.backgroundColor="#e7505a";
      })
      next.style.backgroundColor = "#e7505a";
      back.style.backgroundColor = "#e7505a";
      icon.forEach((e)=>{
        e.style.backgroundColor="#e7505a";
      })
      contact.style.backgroundColor="#e7505a";
      btn__contact__footer.style.backgroundColor="#e7505a";
    }
    if (id === 1) {
      btn.forEach((e)=>{
        e.style.backgroundColor="#1abc9c";
      })
      next.style.backgroundColor = "#1abc9c";
      back.style.backgroundColor = "#1abc9c";
      icon.forEach((e)=>{
        e.style.backgroundColor="#1abc9c";
      })
      contact.style.backgroundColor="#1abc9c";
      btn__contact__footer.style.backgroundColor="#1abc9c";
    }
    if (id === 2) {
      btn.forEach((e)=>{
        e.style.backgroundColor="green";
      })
      next.style.backgroundColor = "green";
      back.style.backgroundColor = "green";
      icon.forEach((e)=>{
        e.style.backgroundColor="green";
      })
      contact.style.backgroundColor="green";
      btn__contact__footer.style.backgroundColor="#green";
    }
    if (id === 3) {
      btn.forEach((e)=>{
        e.style.backgroundColor="#ff6a30";
      })
      next.style.backgroundColor = "#ff6a30";
      back.style.backgroundColor = "#ff6a30";
      icon.forEach((e)=>{
        e.style.backgroundColor="#ff6a30";
      })
      contact.style.backgroundColor="#ff6a30";
      btn__contact__footer.style.backgroundColor="#ff6a30";
    }
    if (id === 4) {
      btn.forEach((e)=>{
        e.style.backgroundColor="#37479d";
      })

      next.style.backgroundColor = "#37479d";
      back.style.backgroundColor = "#37479d";
      icon.forEach((e)=>{
        e.style.backgroundColor="#37479d";
      })
      contact.style.backgroundColor="#37479d";
      btn__contact__footer.style.backgroundColor="#37479d";
    }
  };
});


