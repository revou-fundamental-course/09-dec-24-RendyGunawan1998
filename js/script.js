// JAVASCRIPT
console.log('Call script');
function validateForm(){
    console.log('Validation FOrm Call');
    const usernameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const interestInput = document.getElementById('interest').value;
    console.log(usernameInput)
    if(usernameInput == "" || emailInput == "" ){
        alert("Field can't empty...")
    }
console.log('Validation execute');
}


let slideIndex = 1;

nextIndex();

function nextIndex(){
    showImage(slideIndex +=1)
}

function prevIndex(){
    showImage(slideIndex -=1)
}


function showImage(n){
    
    var imgList = document.getElementsByClassName('banner-images');
    
    if(n>imgList.length -1) slideIndex =0;

    for(i=0;i<imgList.length;i++){
        imgList[i].style.display = "none";
    }
    imgList[slideIndex].style.display = "block";
    console.log(slideIndex)

     
}

setInterval(()=>{
    nextIndex();
},2000);