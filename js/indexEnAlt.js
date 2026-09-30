const brandSection=document.querySelector(".brand-values");
const statementLines=document.querySelectorAll(".statement-line");
const brandValues=document.querySelectorAll(".brand-value");

if(brandSection){
    const brandObserver=new IntersectionObserver((entries,observer)=>{
        entries.forEach(entry=>{
            if(!entry.isIntersecting)return;

            statementLines.forEach((line,index)=>{
                setTimeout(()=>{
                    line.classList.add("visible");
                },index*180);
            });

            observer.unobserve(entry.target);
        });
    },{
        threshold:.25
    });

    brandObserver.observe(brandSection);
}

brandValues.forEach((value,index)=>{
    value.addEventListener("mouseenter",()=>{
        value.style.transform=`translateX(${index%2===0?6:-6}px)`;
    });
    value.addEventListener("mouseleave",()=>{
        value.style.transform="translateX(0)";
    });
});