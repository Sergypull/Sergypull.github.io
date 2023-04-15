const box_element = document.getElementById("menu");
const element = document.getElementsByClassName("logo_menu-box");
const text_element = document.getElementById("font_navegacion")

// element.addEventListener("mouseover", function(){
//     this.style.backgroundColor = "green";
// })



function colorChange(){
    text_element.style.color = "green"
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "green"
    }
}
function colorRemove(){
    text_element.style.color = "black"
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "black"
    }
}