// Write a JavaScript program to break an URL address and put its parts into an array.  
// Note: url structure : ://.org[/] and there may be no part in the address.
function break_address(url_add) {
    let data = url_add.split("://");
    const protocol = data[0];
    data = data[1].split(".com");
    const domain = data[0];
    data = data[1].split("/");

    if(data[1]){
        return [protocol,domain,data[1]]
    }

    return [protocol,domain]
}

var url_add = "https://www.w3resource.com/javascript-exercises/"
console.log(`Original address: ${url_add}`)
console.log(break_address(url_add))
