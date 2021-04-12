let body = document.querySelector("body");
function apply() {
if (document.getElementById("black").checked) {
body.style.backgroundColor = "black";
body.style.color = "green"; // The body.style.color function changes the font color...its the same as the CSS but without the - and replaced with a capital letter CSS: background-color Javascript: backgroundColor 

} else if (document.getElementById("salmon").checked) {
body.style.backgroundColor = "salmon";
body.style.color = "red";

} else {
body.style.backgroundColor = "white";
body.style.color = "black"; // Best practice - leave the default code block at the end
}
}
