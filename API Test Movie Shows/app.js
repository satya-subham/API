const body = document.querySelector('body');
const showButton = document.querySelector('#show-search');
const mainContainer = document.querySelector('.main-container');
const inputDiv = document.querySelector('.input');

showButton.addEventListener('click', (event)=>{
    inputDiv.style.display = 'block';
});

let data = [];

const searchButton = document.querySelector('#search');
const movieContainer = document.querySelector('.movie-container');
const input = document.querySelector('input');
searchButton.addEventListener('click', (event)=>{
    movieContainer.innerHTML = '';
    fetch(`https://api.tvmaze.com/search/shows?q=${input.value}
    `)
    .then(response => response.json())
    .then(data=>{
        data.forEach(movie => {
            movieContainer.innerHTML += `<div class="movie-div">
                                        <img src="${movie['show'].image.medium}">
                                         <h3>Name: ${movie['show'].name}</h3>
                                         <h3>Start Date: ${movie['show'].ended}</h3>
                                         <h3>Language: ${movie['show'].language}</h3>
                                         <button id="show-more" onclick="showData()">Show More</button>
                                         </div>`;

                                         
        });
    })
    .catch(err=>alert('Enter Items'))
});


function showData() {
    movieContainer.innerHTML = '';
    fetch(`https://api.tvmaze.com/shows/1?embed[]=seasons&embed[]=cast`)
    .then(response => response.json())
    .then((data)=>{
        console.log(data);
            movieContainer.innerHTML += `<div>
                                         <img src="${data.embeded['seasons'].image.medium}">
                                        </div>`
    
    })
    .catch(err => alert('Not Found'))
}