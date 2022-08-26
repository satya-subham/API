let input = document.querySelector('input');
let button = document.querySelector('button');
let container = document.querySelector('.container');

button.addEventListener('click', (event)=>{
    container.innerHTML = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}
    `)
    .then(response => response.json())
    .then(data=>{
        let item = data['meals'];
        item.forEach(food => {
           
            container.innerHTML += `<h1>${food['strMeal']}</h1>
                                    <p>${food['strInstructions']}</p>
                                    <img src="${food['strMealThumb']}" width="400px" height="300px"><br>
                                    <a href="${food['strYoutube']}">Know More About ...</a>`
        });
    })
    .catch(err=>alert('Enter Items'))
});