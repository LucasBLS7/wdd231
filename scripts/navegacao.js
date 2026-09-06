const menuBtn = document.querySelector("#menu-btn");
const menuNav = document.querySelector("#menu-nav");

menuBtn.addEventListener("click", () => {
    const aberto = menuNav.classList.toggle("aberto");
    menuBtn.setAttribute("aria-expanded", aberto);
    menuBtn.textContent = aberto ? "✕" : "☰";
});