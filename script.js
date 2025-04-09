console.log("Hello, Welcome to My Portfolio website");

// about button- interaction
document.addEventListener("DOMContentLoaded",function(){
    const aboutbtn = document.querySelector(".btn1");
    aboutbtn.addEventListener("click", ()=>{
        window.location.href = "/portfolio/pages/about.html"
    });
});


// const aboutbtn = document.querySelector(".btn1");

// function gotoaboutpage(){
//     window.location.href = "./pages/about.html"
// }
// aboutbtn.addEventListener("click", gotoaboutpage)

// artwork button - interaction
const btn = document.getElementById("artwork-btn");

  btn.addEventListener("click", () => {
    window.location.href = "../pages/artworks.html"
  });

  const btn2 = document.getElementById("artwork-btn2");

  btn2.addEventListener("click", () => {
    window.location.href = "../pages/artworks.html"
  });
