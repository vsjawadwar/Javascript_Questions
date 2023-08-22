const day=new Date();
const today=day.getDay();
let weekDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
console.log(weekDays[today]);
let hours=day.getHours();
let mins=day.getMonth();
let sec=day.getSeconds();
let prepand=(hours>=12)?"PM":"AM";
hours=(hours>=12)?hours-12:hours;
if(hours===0 && prepand==="PM")
{
    if(mins===0 && sec===0)
    {
        hours=12;
        prepand="Noon";
    }
    else
    {
        hours=12;
        prepand="PM";
    }
}
if(hours===0 && prepand==="AM")
{
    if(mins===0 && sec===0)
    {
        hours=12;
        prepand="Midnight";
    }
    else
    {
        hours=12;
        prepand="AM";
    }
}
console.log(`Today is ${weekDays[today]} and time is ${hours}:${mins}:${sec} ${prepand}`);