

document
.getElementById("btn-shop")
.addEventListener('click', function(){
    const num = document.getElementById('main-num').innerText
    const convertedNum =  parseInt(num)
    const assign = document.getElementById('assigned').innerText
    const convertAssign = parseInt(assign)
    this.disabled = true

    
   alert("Board Updated Successfully")
   document.getElementById('main-num').innerText =convertedNum + 1
   document.getElementById('assigned').innerText = convertAssign -1
   


    
   
   
})


document
.getElementById("discover-box")
.addEventListener('click',function(){
    window.location.href ="blog.html"
})





document
.getElementById("desk")
.addEventListener('click', function(){
    alert()
})