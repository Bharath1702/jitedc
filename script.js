let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const clkbtn=document.getElementById('clkbtn');
const txtpara=document.getElementById('clkpara');
const lessbtn=document.getElementById('lessbtn');

clkbtn.addEventListener('click',()=>{
    if(clkpara.style.display='none'){
        clkpara.style.display='contents';
        clkbtn.style.display='none';
        lessbtn.style.display='contents'
    }
})

lessbtn.addEventListener('click',()=>{
    if(clkpara.style.display='contents'){
        clkpara.style.display='none';
        clkbtn.style.display='contents';
        lessbtn.style.display='none'
    }
})

