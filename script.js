


async function getProducts(){
    
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    console.log(data);
}

getProducts();
console.log('end');