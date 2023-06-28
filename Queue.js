

/*

const asyncArrow = async () => {

    const Response = await fetch('https://dummyjson.com/products');
    
    const data = await Response.json();
    return data;
    
}

//console.log('1')

/*

asyncArrow()
    .then(data => { 
        console.log(data)})
    .finally(() => {
        console.log('2');
});

*/

/*

(async () => {
    console.log('1');

    const res = await fetch('https://dummyjson.com/products');
    console.log(res);

    console.log('2');
})()

*/