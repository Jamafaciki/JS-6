const trafficLight = document.querySelectorAll('.trafficLight');
//function makeRed() {
//    trafficLightEl[0].style.background = ('red');
//    trafficLightEl[0].removeEventListener('click', makeRed);
//    trafficLightEl[2].addEventListener('click', makeGreen);
//}
//function makeYellow() {
//    trafficLightEl[1].style.background = ('yellow');
//    trafficLightEl[1].removeEventListener('click', makeYellow);
//    trafficLightEl[0].addEventListener('click', makeRed);
//}
//function makeGreen() {
//    trafficLightEl[2].style.background = ('green');
//    trafficLightEl[2].removeEventListener('click', makeGreen);
//    trafficLightEl[1].addEventListener('click', makeYellow);
//}
//
let activelight = 2;


trafficLight[0].addEventListener('click',() => {
    changeLight();
});
trafficLight[1].addEventListener('click',() => {
    changeLight();
});
trafficLight[2].addEventListener('click',() => {
    changeLight();
});

function changeLight(){

    trafficLight[activelight].className = 'trafficLight';
    activelight++;
    if(activelight > 2){
        activelight = 0;
    }
    const currentLight = trafficLight[activelight];
    currentLight.classList.add(currentLight.getAttribute("color"))
}
