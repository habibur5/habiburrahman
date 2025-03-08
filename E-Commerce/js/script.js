// Script for navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("Close");
const nav = document.getElementById("navbar");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// hello my brother how are you
/// go to product page
var pro= [];
pro = document.getElementsByClassName("pro");

for(var i=0; i<pro.length; i++){
  pro[i].onclick= function(){
    window.location.href = 'sproduct.html'
  }
}
