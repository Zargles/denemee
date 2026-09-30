const words=[
{word:"GÜVEN",copy:"Birlikte çalışmanın ve uzun süreli ilişkilerin başlangıcı.",accent:false},
{word:"ÖZEN",copy:"Detaylara verilen önem, iyi bir işin görünmeyen tarafıdır.",accent:true},
{word:"SORUMLULUK",copy:"Ürettiğimiz işin arkasında durmak, işin kendisi kadar önemlidir.",accent:false},
{word:"GELECEK",copy:"Bugünün ihtiyaçlarını karşılarken yarının dünyasını da düşünmek.",accent:true},
{word:"HEPSİ.",copy:"Çünkü bizim için Anahtar, tek bir kelimeyle açıklanmaz.",accent:true}
];
const word=document.getElementById("revealWord");
const copy=document.getElementById("revealCopy");
const counter=document.getElementById("revealCounter");
let current=-1;
function updateReveal(){
    const section=document.querySelector(".ag-reveal");
    const rect=section.getBoundingClientRect();
    const progress=Math.min(Math.max(-rect.top/(rect.height-window.innerHeight),0),1);
    const index=Math.min(Math.floor(progress*words.length),words.length-1);
    if(index===current)return;
    current=index;
    word.style.opacity="0";
    setTimeout(()=>{
        word.textContent=words[index].word;
        copy.textContent=words[index].copy;
        word.classList.toggle("accent",words[index].accent);
        counter.textContent=`0${index+1} — 05`;
        word.style.opacity="1";
    },120);
}
window.addEventListener("scroll",updateReveal,{passive:true});
updateReveal();