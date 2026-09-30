const cursorFollower = document.querySelector(".cursor-follower");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animateCursor() {

    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    cursorFollower.style.left = `${currentX}px`;
    cursorFollower.style.top = `${currentY}px`;

    requestAnimationFrame(animateCursor);

}

animateCursor();