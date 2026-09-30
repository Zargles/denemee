const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
},{
    threshold:.2
});

document.querySelectorAll(".reveal").forEach(el=>{
    observer.observe(el);
});