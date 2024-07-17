const hamburgar = document.getElementById("ham");
const navList = document.getElementById("navbar");
hamburgar.addEventListener("click", () => {
  navList.classList.toggle("hidden");
  const ham_child = hamburgar.firstElementChild;
  if (navList.classList.contains("hidden")) {
    ham_child.classList.replace("fa-xmark", "fa-bars");
  } else {
    ham_child.classList.replace("fa-bars", "fa-xmark");
  }
});
