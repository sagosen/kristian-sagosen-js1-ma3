// For some reason I got "missing key" when I referenced the const with ${key}, so I just kept the key in the URL itself.


// const key = "c0a6a891fb2148d1a8575090d637a0e4";

const rawgUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=c0a6a891fb2148d1a8575090d637a0e4";
const proxy = "https://noroffcors.onrender.com/";

const url = proxy + rawgUrl;

const rawgData = document.querySelector(".container");

const findGames = async () => {
    const response = await fetch(url);
    const returnedGames = await response.json();
    
    rawgData.innerHTML ="";

    for (let i = 0; i < returnedGames.results.length; i++) {

        if (i === 7) {
            break;
        }

        rawgData.innerHTML +=`<div class="rawgData">
            <b>${returnedGames.results[i].name}</b><br> 
            Rating: ${returnedGames.results[i].rating}<br>
            Number of tags: ${returnedGames.results[i].tags.length}</div>`;
    } 
}

findGames();