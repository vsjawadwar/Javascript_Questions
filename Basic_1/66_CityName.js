// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
function cityName(city){
    if(city.substring(0,3)==="Los"||city.substring(0,3)==='New'){
        return city;
    }else{
        return "City name does not starts with Los or New";
    }
}
console.log(cityName('Los Angeles'));
console.log(cityName('New Jersey'));
console.log(cityName('Nanded'));