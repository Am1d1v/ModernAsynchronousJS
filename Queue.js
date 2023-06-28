

const asyncArrow = async () => {

    const Response = await fetch('https://dummyjson.com/products');
    
    const data = await Response.json();
    return data;
    
}

console.log('1')
asyncArrow().then(data => { 
    console.log(data)

    console.log('2');
});
