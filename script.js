function  imgSlider(anything){
    document.querySelector('.starbucks').src = anything;

}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    menuToggle.classList.toggle('active');
}