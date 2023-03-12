/**
 * http://htmlJS/getRequest.html?name=wysoka&age=23
 */

function getSearchParams(searchText) {
    let query = window.location.search.substring(1) //name=wysoka&age=23
    let arr = query.split('&')// ['name=wysoka','age=23'] 
    for (let i = 0; i < arr.length; i++) { 
        let key = arr[i].split('=')
        if(key[0] === searchText){
            return key[1]
        }
    }
}

console.log(getSearchParams('name'))