// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// Form Validation
// Contact Us
 function message()
    {
        alert("Form Submitted Succesfully...");
    
    }

// // End



// Loader Adding
window.onload = function(){
    setTimeout(function(){
        var loader = document.getElementsByClassName("loader-wrapper")[0];
        loader.style.display = "none";
    },4000)
}


// Form Code





