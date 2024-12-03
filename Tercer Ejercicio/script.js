//URL de la api  de coingecko
const apiURL='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
//funcion para obtener datos de la api
async function fetchCryptodata(params){
try {
    const reponse = await fetch(apiURL);
    const data = await reponse.json();
    displayCryptoData(data);
}catch (error){
    console.error('Error al obtener los datos:',error);
}
}

// función para mostrar los datos en la pagina wed
function displayCryptoData(data){
    const container=document.getElementById('crypto-container');
    container.innerHTML='';//limpiar el contenedor
    data.forEach(crypto =>{
        const crytoElement=document.createElement('div');
        crytoElement.className='crypto';
        crytoElement.innerHTML=`<h2>${crypto.name}</h2> <p>Precio: $${crypto.current_price}</p> <p>Cap. de Mercado: $${crypto.market_cap}</p>`;
        container.appendChild(crytoElement); 
        
        });
        
    }
//llamar a la funcion para obtener y mostrar los dactos
fetchCryptodata();

