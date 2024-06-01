let angle=document.getElementById("angle");
angle.addEventListener('click',()=>{
    angle.lastElementChild.classList.toggle('fa-angle-down');
    angle.lastElementChild.classList.toggle('fa-angle-up');
})