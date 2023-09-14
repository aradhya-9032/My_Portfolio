// const sections = document.querySelectorAll(".section");
// const sectBtns = document.querySelectorAll(".controlls");
// const sectBtn = document.querySelectorAll(".control");
// const allSections = document.querySelector(".main");


// function PageTransitions(){
//     //Button click active class
//     for(let i=0; i < sectBtn.length;i++){
//         sectBtn[i].addEventListener("click",function(){
//             //selecting current button
//             let currentBtn = document.querySelectorAll(".active-btn");
//             currentBtn[0].className = currentBtn[0].className.replace("active-btn","");
//             this.className +="active-btn";
//         })
//     }


//     //Sections Active class
//     allSections.addEventListener("click", (e)=>{
//         // console.log(e.target);
//         const id = e.target.dataset.id;
//         if(id){
//             //remove selected frm the other btns
//             sectBtns.forEach((btn) =>{
//                 btn.classList.remove("active")
//             })
//             e.target.classList.add("active")

//             //hide other sections 
//             sections.forEach((sections) =>{
//                 sections.classList.remove("active")
//             })
//             const element = document.getElementById(id);
//             element.classList.add("active");
//         }
//     })
// }
// PageTransitions()


(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


/* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );






// document.addEventListener('DOMContentLoaded', function () {
//     const imageContainer = document.getElementById('gallery-row');
//     const scrollImages = document.querySelectorAll('.scrolling-image');
//     const imageWrappers = document.querySelectorAll('.image-wrapper');

//     window.addEventListener('scroll', function () {
//         const scrollOffset = window.scrollY;

//         // Calculate the new left position for the image container
//         const newLeft = -200 + scrollOffset * 0.5; // Adjust the speed as needed

//         // Apply the new left position with a smooth animation
//         imageContainer.style.left = newLeft + 'px';

//         // Apply a staggered animation to each image wrapper
//         imageWrappers.forEach((wrapper, index) => {
//             const stagger = index * 100; // Adjust the stagger amount as needed
//             wrapper.style.transition = `transform 0.5s ease-in-out ${stagger}ms`;
//             wrapper.style.transform = `translateX(${newLeft}px)`;
//         });
//     });
// });















