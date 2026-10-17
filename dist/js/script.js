const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");
});
// Fungsi untuk membuka modal sesuai ID pantai
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

// Fungsi untuk menutup modal sesuai ID pantai
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Menutup modal otomatis jika user mengklik area luar kotak modal
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};
