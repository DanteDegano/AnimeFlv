let myButton = document.getElementById("dm_btn");
let container = document.getElementById("container");
let container_wrp_left = document.getElementById("container_wrp_left");
let container_wrp_right_title = document.querySelectorAll('.container_wrp_right_title');
let container_wrp_left_title = document.getElementById("container_wrp_left_title");
let card = document.querySelectorAll('.section_wrap_2');
let list = document.getElementById("list");
let buttonMoved = false;

myButton.addEventListener("click", function() {
  if (!buttonMoved) {
    myButton.style.left = "35px";
    myButton.classList.add("darkmode");
    container.classList.add("darkmode");
    container_wrp_left.classList.add("darkmode");
    container_wrp_left_title.classList.add("darkmode");
    list.classList.add("darkmode");

    card.forEach((e)=>{
        e.classList.add('darkmode')
    })

    container_wrp_right_title.forEach((e)=>{
        e.classList.add('darkmode')
    })

    buttonMoved = true;

  } else {
    myButton.style.left = "0px";
    myButton.classList.remove("darkmode");
    container.classList.remove("darkmode");
    container_wrp_left.classList.remove("darkmode");
    container_wrp_left_title.classList.remove("darkmode");
    list.classList.remove("darkmode");

    card.forEach((e)=>{
        e.classList.remove('darkmode')
    })

    container_wrp_right_title.forEach((e)=>{
        e.classList.remove('darkmode')
    })

    buttonMoved = false;
  }
});