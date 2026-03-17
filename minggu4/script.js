
// =============================================
// FITUR 1: SMOOTH SCROLL DARI NAVBAR
// =============================================


const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});


// =============================================
// FITUR 2: DARK MODE TOGGLE + LOCALSTORAGE
// =============================================

const btn = document.getElementById("darkModeBtn");

// cek kalau sebelumnya dark mode aktif
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  btn.textContent = "☀️";
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    btn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    btn.textContent = "🌙";
  }
});