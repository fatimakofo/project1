let sideNav = document.querySelector(".sidenav");
let close = document.getElementById("close");
let open = document.getElementById("ham");
console.log(sideNav, close, open);

console.log(sideNav);
console.log("hello");
open.addEventListener("click", () => {
  sideNav.classList.toggle("side");
  console.log(sideNav.classList);
});

close.addEventListener("click", () => {
  sideNav.classList.remove("side");
});
