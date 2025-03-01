document
.getElementById("bg-change-btn")
.addEventListener('click',function(){
  const randomBgColor = '#'+ Math.floor(Math.random()* 12458487).toString(16);
  document.body.style.backgroundColor =randomBgColor;
})

document
.getElementById("desk")
.addEventListener('click', function(){
    alert()
})