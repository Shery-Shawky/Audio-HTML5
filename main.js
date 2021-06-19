var audio = document.getElementById("main");

//play
var SP = document.getElementById("sp");
SP.addEventListener("click", function () {
        audio.play();
});

//pause
var pause=document.getElementById("pu");
pause.addEventListener("click",function(){
    audio.pause();
})
//stop
var Stop = document.getElementById("st");
Stop.addEventListener("click", function () {
    audio.pause();
    audio.currentTime = 0;
});

//seek
var seek = document.getElementById("se");
audio.addEventListener('timeupdate', function (e) {
    seek.value = audio.currentTime / audio.duration * 100
    if (audio.currentTime == audio.duration)
        seek.value = 0
});
seek.addEventListener('change', function () {
    audio.currentTime = seek.value * audio.duration / 100
});

//volume
var volume = document.getElementById("vol");
audio.addEventListener("change", function () {
   audio.volume = volume.value / 100;
  
});


//change audio
var replaceA = document.querySelectorAll("h3")[0];
replaceA.addEventListener("click",function(){
    document.getElementById("myImg").setAttribute("src","tamer.jpg");
    replaceA.classList.toggle("active");
    replaceA2.classList.remove("active");
    replaceA3.classList.remove("active");
    replaceA4.classList.remove("active");
    audio.setAttribute("src","tamer.mp4");
    audio.play();
});

var replaceA2 = document.querySelectorAll("h3")[1];
replaceA2.addEventListener("click",function(){
    document.getElementById("myImg").setAttribute("src","hamaki.jpg");
    replaceA.classList.remove("active");
    replaceA2.classList.toggle("active");
    replaceA3.classList.remove("active");
    replaceA4.classList.remove("active");
    audio.setAttribute("src","hamaki.mp4");
    audio.play();
});

var replaceA3 = document.querySelectorAll("h3")[2];
replaceA3.addEventListener("click",function(){
    document.getElementById("myImg").setAttribute("src","ramy.jpg");
    replaceA.classList.remove("active");
    replaceA2.classList.remove("active");
    replaceA3.classList.toggle("active");
    replaceA4.classList.remove("active");
    audio.setAttribute("src","ramy.mp4");
    audio.play();
});

var replaceA4 = document.querySelectorAll("h3")[3];
replaceA4.addEventListener("click",function(){
    document.getElementById("myImg").setAttribute("src","amr.jpg");
    replaceA.classList.remove("active");
    replaceA2.classList.remove("active");
    replaceA3.classList.remove("active");
    replaceA4.classList.toggle("active");
    audio.setAttribute("src","amr.mp4");
    audio.play();
});