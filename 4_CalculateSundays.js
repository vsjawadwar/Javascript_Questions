// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  
for(let year=2014;year<=2050;year++)
{
    let day=new Date(year,0,1);
    if(day.getDay()===0)
    {
        console.log(`1st January is Sunday in ${year}`);
    }
}