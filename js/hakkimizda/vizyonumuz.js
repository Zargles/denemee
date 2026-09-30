const agAboutSection =
    document.querySelector(".ag-about-section");

const agAboutLogo =
    document.querySelector(".ag-about-interactive-logo");

const agAboutOuterShape =
    document.querySelector(".ag-about-logo-shape--outer");

const agAboutInnerShape =
    document.querySelector(".ag-about-logo-shape--inner");

const agAboutBgCircle =
    document.querySelector(".ag-about-bg-circle");

const agAboutDotOne =
    document.querySelector(".ag-about-logo-dot--one");

const agAboutDotTwo =
    document.querySelector(".ag-about-logo-dot--two");

const agAboutDotThree =
    document.querySelector(".ag-about-logo-dot--three");


agAboutSection.addEventListener("mousemove", (event) => {

    const sectionRect =
        agAboutSection.getBoundingClientRect();


    const mouseX =
        event.clientX - sectionRect.left;

    const mouseY =
        event.clientY - sectionRect.top;


    const centerX =
        sectionRect.width / 2;

    const centerY =
        sectionRect.height / 2;

    const normalizedX =
        (mouseX - centerX) / centerX;

    const normalizedY =
        (mouseY - centerY) / centerY;


    const logoMoveX =
        normalizedX * 18;

    const logoMoveY =
        normalizedY * 18;


    const rotateX =
        normalizedY * -5;

    const rotateY =
        normalizedX * 5;


    agAboutLogo.style.transform = `
        translate(${logoMoveX}px, ${logoMoveY}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
    `;


    agAboutOuterShape.style.transform = `
        translate(
            ${normalizedX * 35}px,
            ${normalizedY * 35}px
        )
        rotate(45deg)
    `;


    agAboutInnerShape.style.transform = `
        translate(
            ${normalizedX * -25}px,
            ${normalizedY * -25}px
        )
        rotate(20deg)
    `;


    agAboutBgCircle.style.transform = `
        translate(
            ${normalizedX * -45}px,
            calc(-50% + ${normalizedY * -45}px)
        )
    `;


    agAboutDotOne.style.transform = `
        translate(
            ${normalizedX * 60}px,
            ${normalizedY * 60}px
        )
    `;


    agAboutDotTwo.style.transform = `
        translate(
            ${normalizedX * -40}px,
            ${normalizedY * -40}px
        )
    `;


    agAboutDotThree.style.transform = `
        translate(
            ${normalizedX * 80}px,
            ${normalizedY * -70}px
        )
    `;

});


agAboutSection.addEventListener("mouseleave", () => {

    agAboutLogo.style.transform =
        "translate(0, 0) rotateX(0deg) rotateY(0deg)";


    agAboutOuterShape.style.transform =
        "translate(0, 0) rotate(45deg)";


    agAboutInnerShape.style.transform =
        "translate(0, 0) rotate(20deg)";


    agAboutBgCircle.style.transform =
        "translate(0, -50%)";


    agAboutDotOne.style.transform =
        "translate(0, 0)";

    agAboutDotTwo.style.transform =
        "translate(0, 0)";

    agAboutDotThree.style.transform =
        "translate(0, 0)";

});