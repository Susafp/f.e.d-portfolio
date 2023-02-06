const gradient = document.querySelector(".gradient");

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    gradient.style.boxShadow = 'none';
  }
