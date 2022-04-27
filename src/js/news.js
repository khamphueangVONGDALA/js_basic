var slider = document.getElementById("slider");
var p_1 = document.querySelectorAll(".p_1");
var data_news = [
  {
    src: "http://zozothemes.com/html/epoint/demo/images/content/blog/t1.jpg",
    title: "Latest App Updates-1",
    date: "23rd Aug, 2016",
  },
  {
    src: "http://zozothemes.com/html/epoint/demo/images/content/blog/t2.jpg",
    title: "Latest App Updates-3",
    date: "23rd Aug, 2016",
  },
  {
    src: "http://zozothemes.com/html/epoint/demo/images/content/blog/t4.jpg",
    title: "Latest App Updates-2",
    date: "23rd Aug, 2016",
  },
  {
    src: "http://zozothemes.com/html/epoint/demo/images/content/blog/t2.jpg",
    title: "Latest App Updates-3",
    date: "23rd Aug, 2016",
  },
  {
    src: "http://zozothemes.com/html/epoint/demo/images/content/blog/t5.jpg",
    title: "Latest App Updates-3",
    date: "23rd Aug, 2016",
  },
  {
    src: "	http://zozothemes.com/html/epoint/demo/images/content/blog/t3.jpg",
    title: "Latest App Updates-3",
    date: "23rd Aug, 2016",
  },
  {
    src: "http://zozothemes.com/html/epoint/demo/images/content/blog/t5.jpg",
    title: "Latest App Updates-3",
    date: "23rd Aug, 2016",
  },
  {
    src: "http://zozothemes.com/html/epoint/demo/images/content/blog/t2.jpg",
    title: "Latest App Updates-3",
    date: "23rd Aug, 2016",
  },
];

var data_content3 = [
  {
    src: "http://zozothemes.com/html/epoint/demo/images/content/portfolio/set3/3.jpg",
    title: "Wifi Creators",
    banding: "Branding",
  },
  {
    src: "	http://zozothemes.com/html/epoint/demo/images/content/portfolio/set3/4.jpg",
    title: "Wifi Creators",
    banding: "Branding",
  },
  {
    src: "http://zozothemes.com/html/epoint/demo/images/content/portfolio/set3/3.jpg",
    title: "Wifi Creators",
    banding: "Branding",
  },
  {
    src: "http://zozothemes.com/html/epoint/demo/images/content/portfolio/set3/5.jpg",
    title: "Wifi Creators",
    banding: "Branding",
  },
  {
    src: "http://zozothemes.com/html/epoint/demo/images/content/portfolio/set3/2.jpg",
    title: "Wifi Creators",
    banding: "Branding",
  },
  {
    src: "http://zozothemes.com/html/epoint/demo/images/content/portfolio/set3/1.jpg",
    title: "Wifi Creators",
    banding: "Branding",
  },
  {
    src: "http://zozothemes.com/html/epoint/demo/images/content/portfolio/set3/3.jpg",
    title: "Wifi Creators",
    banding: "Branding",
  },
];

var content3__container = document.querySelector(".content3__container");
function render_content3() {
  content3__container.innerHTML=data_content3.map((i) => {
    return `<div class="px-[20px] py-[20px] p_1 w-[100vw] md:w-[50vw] lg:w-[20vw] ">
<img
  src="${i.src}"
  alt=""
  class="w-[100%]"
/>
<div class="text-center">
  <h1 class="mgi__content3__titles">${i.title}</h1>
  <p class="mgi__content3__des">${i.banding}</p>
</div>
</div>`;
  }).join("");

  



}

render();
render_content3(); 
var dataRender;
function render() {
  dataRender = data_news.map((e) => {
    return `<div class="p_1 md:w-[50vw] lg:w-[20vw] ">
    <div>
    <img
    src="${e.src}"
    alt="" 
    class="w-[100%]"
  />  
    </div>

    <a href="" class="mgi__content3__titles">${e.title}</a>
    <p class="text-xs text-[#a5a4a4] font-light mb-[10px]">
      ${e.date}
    </p>
    </div>`;
  });

  slider.innerHTML = dataRender.join("");
}
