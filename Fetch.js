


async function main(){
    const res = fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            username: 'kminchelle',
            password: '0lelplR'
        })
    });
    const data = (await res).json();
    console.log(data);

}
main();