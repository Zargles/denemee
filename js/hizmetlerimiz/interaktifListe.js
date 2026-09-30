const services=document.querySelectorAll(".service-item");
const images=document.querySelectorAll(".service-image");
const previewNumber=document.querySelector(".preview-number");
const previewTitle=document.querySelector(".preview-title");
const previewDescription=document.querySelector(".preview-description");
const previewLink=document.querySelector(".preview-link");
const serviceData=[
    {number:"01 / 05",
        title:"Elektrik",
        description:"Elektrik tesisatı, pano ve sigorta sistemleri, aydınlatma, zayıf akım vb.",
        link:"../hizmetler/elektrik.html"
        
    },
    {
        number:"02 / 05",
        title:"Duvar & Sıva İşleri",
        description:"Duvar örme, alçı/sıva, alçıpan, bölme duvar, mantolama vb.",
        link:"../hizmetler/tadilat.html"
    },
    {
        number:"03 / 05",
        title:"Boya & Dekorasyon",
        description:"İç/dış cephe boya, dekoratif uygulamalar, duvar kaplamaları, tavan uygulamaları",
        link:"../hizmetler/tadilat.html"
    },
    {
        number:"04 / 05",
        title:"Zemin & Kaplama",
        description:"Seramik, fayans, parke, mermer, zemin kaplamaları vb.",
        link:"../hizmetler/tadilat.html"
    },
    {
        number:"05 / 05",
        title:"Tadilat & Yapı Uygulamaları",
        description:"Komple tadilat, banyo/mutfak yenileme, kapı/pencere, çatı vb.",
        link:"../hizmetler/tadilat.html"
    }
];
services.forEach(service=>{
    service.addEventListener("mouseenter",()=>{
        const index=Number(service.dataset.service);
        services.forEach(item=>item.classList.remove("active"));
        images.forEach(image=>image.classList.remove("active"));
        service.classList.add("active");
        images[index].classList.add("active");
        previewNumber.textContent=serviceData[index].number;
        previewTitle.textContent=serviceData[index].title;
        previewDescription.textContent=serviceData[index].description;
        previewLink.href=serviceData[index].link;
    });

    service.addEventListener("click",()=>{
        if(window.innerWidth<=900){
            document.querySelector(".service-preview").scrollIntoView({
                behavior:"smooth",
                block:"center"
            });
        }
    });
});