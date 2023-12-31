
/*


async function getAllProducts(){
    const response = await fetch('https://dummyjson.com/products');
    return response.json();
}

async function getProduct(id){
    const response = await fetch('https://dummyjson.com/products/' + id);
    return response.json();
};

async function main() {
    //const data = await allProducts();
    const {products} = await getAllProducts();
    //console.log(products);

   const res  = Promise.all([
        getProduct(1),
        getProduct(2),
        getProduct(3)
    ]);

    console.log(res);

    /*

    for( const product of products){
        const res = await getProduct(product.id);
        console.log(res);
    }

    
}
main();

*/

