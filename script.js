


function getProducts(){
    fetch('https://dummyjson.com/products')
    .then(Response => Response.json())
    .then(data => console.log(data))
}

getProducts();
console.log('end');