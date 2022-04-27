var sub_data = [
  {
    title_nav: "home",
    data_nav: [
      "Home Corporate",
      "Home Agency",
      "Home Portfolio",
      "Landing Page",
      "Home Shop",
      "Home Blog",
      "Home One Page",
      "Home Industries",
      "Home Flat Design",
      "Home App",
      "Home Events",
      "Home Freelancer",
    ],
  },
  {
    title_nav: "Headers",
    data_nav: ["Header Type", "Header Type"],
  },
  {
    title_nav: "Pages",
    data_nav: ["Page Layout", "Header Type", "Page Layout", "Header Type"]
  },
  {
    title_nav: "Features",
    data_nav: [
      "Page Title",
      "Footer",
      "Background",
      "Timeline",
      "Pagination",
      "Image Gallery",
      "Video Gallery",
      "Full RTL Demo",
    ],
  },
  {
    title_nav: "Portfolio",
    data_nav: [
      "Grid Layout",
      "Grid No Gutter",
      "Classic Style",
      "List Layout",
      "PGrid With Sidebar",
      "Image Gallery",
    ],
  },
  {
    title_nav: "home",
    data_nav: [
      "Home Corporate",
      "Home Agency",
      "Home Portfolio",
      "Landing Page",
      "Home Shop",
      "Home Blog",
      "Home One Page",
      "Home Industries",
      "Home Flat Design",
      "Home App",
      "Home Events",
      "Home Freelancer",
    ],
  },
  {
    title_nav: "Pages",
    data_nav: ["Page Layout", "Header Type", "Page Layout", "Header Type"],
  },
];


var content_menu=document.querySelector(".content__container");
var body =document.querySelector(".body");


function nav_menu(){

  content_menu.classList.toggle("active");
  body.classList.toggle("active");

}
function render(){ 
  content_menu.innerHTML=sub_data.map((e)=>{


        return `
            <li class="mt-[20px]">
            <div>
            <div class="flex justify-between">
            <a class="cursor-pointer">${e.title_nav}</a>
            <i class="nav_level2 fa fa-arrow-right"></i>
            </div>
            
            <div class="menu_lv2 hidden">
                <ul class="absolute ">
                ${e.data_nav.map((item)=>{
                    return `<li class="mt-[10px]">${item}</li>`
                }).join("")}
                
                </ul>
            </div>
            </div>
            </li>
        `
    }).join("");

}
render();



var mgi__midle_subnav=document.querySelector(".mgi__midle_subnav");

function renderMiddle(){
  mgi__midle_subnav.innerHTML=sub_data.map((e)=>{
    return `
            <li class="mt-[20px]">
            <div>
            <div class="flex justify-between">
            <a class="px-[10px] cursor-pointer">${e.title_nav}</a>
            </div>
            
            <div class="menu_lv2 hidden hover:block cursor-pointer">
                <ul class="absolute ">
                ${e.data_nav.map((item)=>{
                    return `<li class="mt-[10px] cursor-pointer">${item}</li>`
                }).join("")}
                
                </ul>
            </div>
            </div>
            </li>
        `
  }).join("")
}

renderMiddle();


var nav_level2=document.querySelectorAll(".nav_level2")
var menu_lv2=document.querySelectorAll(".menu_lv2")
var click=true;
var content__container =document.querySelectorAll(".content__container");

nav_level2.forEach((i,index)=>{
  i.onclick=function(){
    menu_lv2[index].classList.toggle("active");
  }
})








