const processData=[
    {number:"01 / 05",title:"Keşif",text:"Projenizi, mevcut yapıyı ve ihtiyaçlarınızı değerlendirerek doğru çözümü belirliyoruz."},
    {number:"02 / 05",title:"Planlama",text:"İşin kapsamını, uygulanacak yöntemleri ve süreci belirleyerek sağlam bir yol haritası oluşturuyoruz."},
    {number:"03 / 05",title:"Uygulama",text:"Belirlenen plan doğrultusunda uygulama sürecini titizlikle yürütüyor ve projeyi hayata geçiriyoruz."},
    {number:"04 / 05",title:"Kontrol",text:"Uygulamanın her aşamasını kontrol ederek işçilik ve uygulama kalitesinin korunmasını sağlıyoruz."},
    {number:"05 / 05",title:"Teslim",text:"Son kontrolleri gerçekleştiriyor, eksikleri gideriyor ve tamamlanan çalışmayı teslim ediyoruz."}
];

const items=document.querySelectorAll(".process-item");
const number=document.querySelector(".process-info-number");
const title=document.querySelector(".process-info-title");
const text=document.querySelector(".process-info-text");
const steps=document.querySelectorAll(".mobile-step");
const line=document.querySelector(".process-line");

let currentStep=0;
let autoSlide;
let startX=0;
let startY=0;
let busy=false;

function updateProcess(step){
    currentStep=Math.max(0,Math.min(4,step));

    items.forEach((item,index)=>{
        item.classList.toggle("active",index===currentStep);
    });

    steps.forEach((stepItem,index)=>{
        stepItem.classList.toggle("active",index===currentStep);
    });

    number.textContent=processData[currentStep].number;
    title.style.opacity=0;
    text.style.opacity=0;

    setTimeout(()=>{
        title.textContent=processData[currentStep].title;
        text.textContent=processData[currentStep].text;
        title.style.opacity=1;
        text.style.opacity=1;
    },120);

    const percent=((currentStep+1)/5)*100;
    if(line){
        line.style.setProperty("--progress",`${percent}%`);
    }
}

function nextSlide(){
    updateProcess(currentStep===4 ? 0 : currentStep+1);
}

function resetAutoSlide(){
    clearInterval(autoSlide);
    if(window.innerWidth<=1100){
        autoSlide=setInterval(nextSlide,4000);
    }
}

items.forEach((item,index)=>{
    item.addEventListener("mouseenter",()=>{
        if(window.innerWidth>1100){
            updateProcess(index);
        }
    });

    item.addEventListener("click",()=>{
        if(window.innerWidth>1100){
            updateProcess(index);
        }
    });
});

document.querySelector(".process-section").addEventListener("touchstart",e=>{
    if(window.innerWidth>1100)return;
    startX=e.touches[0].clientX;
    startY=e.touches[0].clientY;
},{passive:true});

document.querySelector(".process-section").addEventListener("touchend",e=>{
    if(window.innerWidth>1100)return;
    if(busy)return;

    const diffX=startX-e.changedTouches[0].clientX;
    const diffY=startY-e.changedTouches[0].clientY;

    if(Math.abs(diffX)<45)return;
    if(Math.abs(diffX)<Math.abs(diffY))return;

    busy=true;

    if(diffX>0&&currentStep<4){
        updateProcess(currentStep+1);
    }

    if(diffX<0&&currentStep>0){
        updateProcess(currentStep-1);
    }

    resetAutoSlide();

    setTimeout(()=>{
        busy=false;
    },350);
},{passive:true});

window.addEventListener("resize",resetAutoSlide);

updateProcess(0);
resetAutoSlide();