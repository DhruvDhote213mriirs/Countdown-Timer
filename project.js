const dayel=document.getElementById("day") ;
const hourel= document.getElementById("hour") ;
const minuteel= document.getElementById("minute") ;
const secondel= document.getElementById("second") ;
const newYears="1 Jan 2022" ;
countdown() ;
setInterval(countdown,1000) ;
function countdown()
{
    const newyeardate= new Date(newYears) ;
    const currentdate= new Date() ;
    const totalseconds= (newyeardate-currentdate) / 1000 ;
    const days=Math.floor(totalseconds/3600/24);
    const hours=Math.floor(totalseconds/3600) %24 ;
    const minutes=Math.floor(totalseconds/60) %60 ;
    const seconds=Math.floor(totalseconds%60);
    dayel.innerHTML=days ;
    hourel.innerHTML=hours ;
    minuteel.innerHTML=minutes ;
    secondel.innerHTML=seconds ;
}

