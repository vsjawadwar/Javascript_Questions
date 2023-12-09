const hour=document.querySelector(".hour");
const minute=document.querySelector('.minute');
const second=document.querySelector('.second');

function setClock(){
    let day=new Date();
    let hh=day.getHours() * 30;
    let mm=day.getMinutes() * 6;
    let ss=day.getSeconds() * 6;
    // console.log(`${hh}:${mm}:${ss}`);

    hour.style.transform=`rotateZ(${hh+mm/12}deg)`;
    minute.style.transform=`rotateZ(${mm}deg)`;
    second.style.transform=`rotateZ(${ss}deg)`;
}

setClock();

setInterval(setClock,1000);