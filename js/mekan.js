const spaceData=[
{label:"01 — MEKÂN",title:'Mekânlara<br><span>farklı</span><br>bakıyoruz.',copy:"Bir alanı sadece nasıl göründüğüne göre değil, nasıl kullanılacağına ve nasıl hissettireceğine göre düşünüyoruz.",word1:"İŞLEV",word2:"DETAY",image:"../pics/assets/parla16.jpg"},
{label:"02 — DETAY",title:'Detaylarda<br><span>fark</span><br>başlar.',copy:"Büyük sonuçların küçük detaylarda başladığına inanıyoruz. Malzemeden uygulamaya kadar her parçayı önemsiyoruz.",word1:"ÖZEN",word2:"KALİTE",image:"../pics/assets/rams1.jpg"},
{label:"03 — BÜTÜN",title:'Her şeyi<br><span>bir bütün</span><br>olarak görüyoruz.',copy:"Yapının her parçasını birbirinden bağımsız değil, aynı hikâyenin parçaları olarak ele alıyoruz.",word1:"BÜTÜN",word2:"UYUM",image:"../pics/assets/nostalji1.jpg"}
];
const section=document.getElementById("spaceSection");
const label=document.getElementById("spaceLabel");
const title=document.getElementById("spaceTitle");
const copy=document.getElementById("spaceCopy");
const word1=document.getElementById("spaceWord1");
const word2=document.getElementById("spaceWord2");
const image1=document.getElementById("spaceImage1");
const image2=document.getElementById("spaceImage2");
const index=document.getElementById("spaceIndex");
const number=document.getElementById("spaceNumber");
const progressBar=document.getElementById("spaceProgress");
let activeImage=image1;
let nextImage=image2;
let current=-1;
let transitionTimer=null;
let ticking=false;
function updateSpace(){
    const rect=section.getBoundingClientRect();
    const progress=Math.min(Math.max(-rect.top/(rect.height-window.innerHeight),0),.9999);
    const i=Math.min(Math.floor(progress*spaceData.length),spaceData.length-1);
    const localProgress=(progress*spaceData.length)%1;
    progressBar.style.width=`${progress*100}%`;
    if(i!==current){
        current=i;
        const data=spaceData[i];
        label.style.opacity="0";
        label.style.transform="translateY(15px)";
        title.style.opacity="0";
        title.style.transform="translateY(25px)";
        copy.style.opacity="0";
        copy.style.transform="translateY(15px)";
        word1.style.opacity="0";
        word1.style.filter="blur(8px)";
        word2.style.opacity="0";
        word2.style.filter="blur(8px)";
        if(transitionTimer)clearTimeout(transitionTimer);
        transitionTimer=setTimeout(()=>{
            label.textContent=data.label;
            title.innerHTML=data.title;
            copy.textContent=data.copy;
            word1.textContent=data.word1;
            word2.textContent=data.word2;
            number.textContent=`0${i+1} / 03`;
            index.textContent=`0${i+1} — 03`;
            nextImage.src=data.image;
            nextImage.classList.remove("exit");
            void nextImage.offsetWidth;
            nextImage.classList.add("active");
            activeImage.classList.remove("active");
            activeImage.classList.add("exit");
            const oldImage=activeImage;
            activeImage=nextImage;
            nextImage=oldImage;
            label.style.opacity="1";
            label.style.transform="translateY(0)";
            title.style.opacity="1";
            title.style.transform="translateY(0)";
            copy.style.opacity="1";
            copy.style.transform="translateY(0)";
            word1.style.opacity="1";
            word1.style.filter="blur(0)";
            word2.style.opacity="1";
            word2.style.filter="blur(0)";
        },350);
    }
    const move=(localProgress-.5)*35;
    word1.style.marginLeft=`${move}px`;
    word2.style.marginRight=`${move}px`;
}
function onScroll(){
    if(!ticking){
        requestAnimationFrame(()=>{
            updateSpace();
            ticking=false;
        });
        ticking=true;
    }
}
window.addEventListener("scroll",onScroll,{passive:true});
updateSpace();