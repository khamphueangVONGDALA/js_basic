let sliderContainer = document.querySelector('.slider_container');
let innerSlider = document.querySelector('.inner_slider');

let pressed = false;
let startX;
let x;



sliderContainer.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    // console.log(startX);
    sliderContainer.style.cursor = "grabbing";
});



sliderContainer.addEventListener("mouseenter", () => {
    sliderContainer.style.cursor = "grab";
});


sliderContainer.addEventListener("mouseup", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
});

sliderContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;
    console.log(x);
    console.log(startX);
    innerSlider.style.left = `${(x - startX)}px`;

    checkBoundary();
});



const checkBoundary = () => {
    let { right:r, width:w} = sliderContainer.getBoundingClientRect();
    console.log(r,w);
    let inner = innerSlider.getBoundingClientRect();    

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = '0px';   

    }
    // if (parseInt(innerSlider.style.left) < 0) {
    //     innerSlider.style.left = '300px';   

    // }
    if (inner.right < r) {
        innerSlider.style.left = `-${inner.width - w}px`;
        // innerSlider.style.left =="0px";
    }


};