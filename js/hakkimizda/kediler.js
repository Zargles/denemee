const teamPhotos=document.querySelectorAll(".ag-team-photo");
teamPhotos.forEach(photo=>{
    photo.addEventListener("click",()=>{
        const isActive=photo.classList.contains("active");
        teamPhotos.forEach(item=>item.classList.remove("active"));
        if(!isActive) photo.classList.add("active");
    });
});

const heroPhotos=document.querySelectorAll(".hero-photo");
heroPhotos.forEach(photo=>{
    photo.addEventListener("click",()=>{
        const isActive=photo.classList.contains("active");
        heroPhotos.forEach(item=>item.classList.remove("active"));
        if(!isActive) photo.classList.add("active");
    });
});