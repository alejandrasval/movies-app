//Importamos el arreglo de objetos

import {data} from './data2.js'

//Declaración de variables

const moviePoster = document.getElementById('moviePoster').content;
const fragment = document.createDocumentFragment();
const items = document.getElementById('items');

//Cargar la información apenas cargue la página

document.addEventListener('DOMContentLoaded', () => {                                                                                                                                                                                                                                    
    uploadData(data);
})

//Función para cargar toda la información 

const uploadData = data => {

    data.forEach(movie => {
        const {title,img,year,country,director,synopsis} = movie;
        moviePoster.getElementById('movieTitle').textContent = title;
        moviePoster.getElementById('image').setAttribute('src', img);
        moviePoster.getElementById('year').textContent = year;
        moviePoster.getElementById('country').textContent = country;
        moviePoster.getElementById('director').textContent = director;
        moviePoster.getElementById('synopsis').textContent = synopsis;

        const clone = moviePoster.cloneNode(true);
        fragment.appendChild(clone);
    })

    items.appendChild(fragment);
}

//Guardar los datos del formulario en el local storage 

form.addEventListener('submit', function storeLocalStorage(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;

    if(name==="" || email==="" || gender===""){
        alert('Ingresar todos los campos');
    }else{
        localStorage.setItem('Nombre', name);
        localStorage.setItem('E-mail', email);
        localStorage.setItem('Género', gender);
        getLocalStorage();
    }

})

function getLocalStorage(){
    let name = localStorage.getItem('Nombre');
    let email = localStorage.getItem('E-mail');
    let gender = localStorage.getItem('Género');
    alert(`La información almacenada es ${name}
    ${email}
    ${gender}`)
}