


/*

function getMyCoordinates(){
 
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(({coords}) => {
            resolve({ latitude: coords.latitude,
                      longitude: coords.longitude  
            })
        }),
        ((error) => {
            reject(error);
        })
    });
    

}

async function getMyCity(){

try{
    const {latitude, longitude} = await getMyCoordinates();
    const response = await fetch('https://api.bigdatacloud.net/data/ip-geolocation');
     if(!response.ok){
        throw Error(response.status);
     }
     const data = await response.json();
     console.log(data);

} catch(e){
    console.error("error");
}


}

getMyCity();

*/