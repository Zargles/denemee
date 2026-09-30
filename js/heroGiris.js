const agHero = document.getElementById("agHero");
const agHeroDrawing = document.getElementById("agHeroDrawing");
const agHeroPhoto = agHero.querySelector(".ag-hero-photo");
agHero.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth - .5;
    const y = e.clientY / window.innerHeight - .5;
    agHeroDrawing.style.setProperty("--ag-mx", `${x * 16}px`);
    agHeroDrawing.style.setProperty("--ag-my", `${y * 16}px`);
    agHeroPhoto.style.setProperty("--ag-px", `${x * -8}px`);
    agHeroPhoto.style.setProperty("--ag-py", `${y * -8}px`);
});