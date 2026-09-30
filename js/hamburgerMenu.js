const header=document.getElementById("header");
const menuButton=document.getElementById("menuButton");
const mobileMenu=document.getElementById("mobileMenu");
const mobileLinks=document.querySelectorAll(".mobile-link");
const mobileService=document.getElementById("mobileService");
const mobileServiceToggle=document.getElementById("mobileServiceToggle");
window.addEventListener("scroll",()=>{
    header.classList.toggle("scrolled",window.scrollY>40);
});
menuButton.addEventListener("click",()=>{
    const isOpen=menuButton.classList.toggle("open");
    mobileMenu.classList.toggle("open",isOpen);
    document.body.style.overflow=isOpen?"hidden":"";
});
mobileServiceToggle.addEventListener("click",(e)=>{
    e.preventDefault();
    e.stopPropagation();
    const isOpen=mobileService.classList.toggle("open");
    mobileServiceToggle.setAttribute("aria-expanded",isOpen);
});
mobileLinks.forEach(link=>{
    link.addEventListener("click",(e)=>{
        if(e.target.closest(".mobile-service-toggle")){
            return;
        }
        menuButton.classList.remove("open");
        mobileMenu.classList.remove("open");
        mobileService.classList.remove("open");
        mobileServiceToggle.setAttribute("aria-expanded","false");
        document.body.style.overflow="";
    });
});
document.querySelectorAll(".mobile-service-submenu a").forEach(link=>{
    link.addEventListener("click",()=>{
        menuButton.classList.remove("open");
        mobileMenu.classList.remove("open");
        mobileService.classList.remove("open");
        mobileServiceToggle.setAttribute("aria-expanded","false");
        document.body.style.overflow="";
    });
});