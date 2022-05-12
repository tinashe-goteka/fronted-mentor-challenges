const hamMenu = document.querySelector(".ham-menu");
const menu = document.querySelector(".menu");
// const subMenu = document.querySelector(".sub-menu");
const dropMenuItem = document.querySelectorAll(".dropdown-link")

// hamMenu.addEventListener("click", () => {
//   console.log("clicked");
//   menu.style.width = "70%";
// })

document.addEventListener("click", (event) => {
  if(event.target.matches(".dropdown-link")){
    el = event.target.parentNode;
    console.log(el);
    let subMenu = el.querySelector(".sub-menu");
    console.log(subMenu);
    subMenu.classList.toggle("dropdown-active");
    // Close all other dropdowns
    document.querySelectorAll(".sub-menu").forEach(menu => {
      if(menu !== subMenu){
        menu.classList.remove("dropdown-active");
      }
    })
  } else if(!event.target.matches(".dropdown")){
    document.querySelectorAll(".sub-menu").forEach(menu => {
      menu.classList.remove("dropdown-active");
    })
  }

  if(!event.target.matches(".ham-menu") & menu.style.display === "none"){
    console.log("clicked ham menu");
    menu.style.display = "block";
    hamMenu.style.display = "none";
  } else if(!event.target.matches("close-menu-btn")){
    console.log("clicked close btn");
    menu.style.display = "none";
    hamMenu.style.display = "block";
  }
})