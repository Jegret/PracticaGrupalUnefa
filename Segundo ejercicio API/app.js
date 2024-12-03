const url = "https://jsonplaceholder.typicode.com/users"
const respuesta = document.querySelector("#respuesta") 

//Evento
document.addEventListener("DOMContentLoaded", llamarAPI)

//Funciones
function llamarAPI(){
   fetch( url)
   .then( resp => resp.json())
   .then((data)=>mostrarDatos(data))
}

function mostrarDatos(datos){

    datos.forEach(item => {
        const row = document.createElement('tr')
        row.innerHTML = `
        <th>${item.name}</th>
        <th>${item.email}</th>
        ` 
        respuesta.appendChild(row)
        
    });


}