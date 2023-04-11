

//access all the value here 
//var container = document.querySelector('#container');
var container = $('#container');
var searchResult = [];
const button = document.querySelector('#search-button');

//use the api url to use to fetch super heroes
const ApiUrl = "https://www.superheroapi.com/api.php/891370368026086";
button.addEventListener('click',function(){
    var name = document.getElementById('texttype').value;
    $("#container").html("");
    searchResult = [];
    console.log('wait brother');

    $.get(`${ApiUrl}/search/${name}`,function(data){

        let searchResult = data.results;

        for(let course of searchResult){

            //appending the search result in the list

            container.append(`
            
            <li>
            <div id="search-results">
            <div id="image"><img src = "${course.image.url}"></div>
            <div id="name"><a href="details.html?id=${course.id}">
            ${course.name}
            </a>
            <br>
            ${
                course.biography['full-name']
            }</div>
            <button id = add-to-fav" onclick="AddToFav(${course.id})">add to favourite</button>
            </a></div>
            </div>
            </li>
            <br>
             `);
        }
    })
})

















