window.addEventListener("scroll", () => {
    if (window.scrollY >= 400) {
      document.querySelector(".slide_Content").style.display = "grid";
      document.querySelector(".slide_Content").style.animation =
        "slide-bottom 3s forwards";
      document.querySelector(".slide_Content").style.opacity = "100";
    }
  });
  

var mgi__navtop__container=document.querySelector(".mgi__navtop__container");


  window.addEventListener("scroll", () => {

    console.log(window.scrollY);
    if (window.scrollY >80){
      
      // mgi__navtop__container.style.backgroundColor ="white";
      // mgi__navtop__container.style.color="#777"; 
      
    }
    if (window.scrollY ===0){      
      // mgi__navtop__container.style.backgroundColor ="black";
    }
  });