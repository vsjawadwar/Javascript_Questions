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

const switchTheme=(e)=>{
const switchBtn=e.target;
if(switchBtn.textContent.toLowerCase()==='light'){
    switchBtn.textContent='dark';
    document.documentElement.setAttribute("data-theme","dark");
}else{
    switchBtn.textContent='light';
    document.documentElement.setAttribute("data-theme","light");
}
};

const switchModeBtn=document.querySelector("#switch-btn");
switchModeBtn.addEventListener('click',switchTheme,false);

let currentTheme="dark";

if(currentTheme){
    document.documentElement.setAttribute("data-theme",currentTheme);
    switchBtn.textContent=currentTheme;

}