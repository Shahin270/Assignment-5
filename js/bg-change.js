document
.getElementById("bg-change-btn")
.addEventListener('click',function(){
  const randomBgColor = '#'+ Math.floor(Math.random()* 12458487).toString(16);
  document.body.style.backgroundColor =randomBgColor;
})

function showTime() {
  document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
}

setInterval(showTime, 1000); 
showTime();