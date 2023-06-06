const gameSearchHandler = async (event) => {
    event.preventDefault();
    console.log("game search button clicked!");

    let game = document.querySelector('#gameSearch').value.trim(); // super mario galaxy
    game = game.split(" ").join("-").toLowerCase();  // super-mario-galaxy
    const url = `https://api.rawg.io/api/games/${game}?key=1b296d98b4fd4a98bdcb614862605bfc`; // https://api.rawg.io/api/games/super-mario-galaxy?key=
    
    let gameCards = document.querySelector('.games');

let gameName;
let gameScore;
let gameDate;
let gamePlatform;
let gameBkImg;

    if (game){ // if exists fetch the data from the url 
        const response = await fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json' },
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            const title = data.name;
            const metacritic = data.metacritic;
            const releaseDate = data.released;
            const platform = data.platforms[0].platform.name;
            const backgroundImg = data.background_image;

            const firstDiv = document.createElement('div');
            firstDiv.classList.add('card', 'text-dark', 'm-1', 'text-center');
            firstDiv.style.width = '18rem';

            const gameImg = document.createElement('img');
            gameImg.classList.add('card-img-top');
            gameImg.setAttribute('src', data.background_image);
            gameImg.setAttribute('alt', "background image of game");

            const secondDiv = document.createElement('div');
            secondDiv.classList.add('card-body');

            const h5 = document.createElement('h5');
            h5.classList.add('card-title');
            h5.textContent = data.name;

            const p1 = document.createElement('p');
            p1.classList.add('card-text');
            p1.textContent = `Metacritic score: ${data.metacritic}`;

            const p2 = document.createElement('p');
            p2.classList.add('card-text');
            p2.textContent = `Console: ${data.platforms[0].platform.name}`;

            const p3 = document.createElement('p');
            p3.classList.add('card-text');
            p3.textContent = `Release Date: ${data.released}`;

            firstDiv.appendChild(gameImg);
            secondDiv.appendChild(h5);
            secondDiv.appendChild(p1);
            secondDiv.appendChild(p2);
            secondDiv.appendChild(p3);
            firstDiv.appendChild(secondDiv);
            
            
            gameCards.appendChild(firstDiv);

            gameName = title;
            gameScore = metacritic;
            gameDate = releaseDate;
            gamePlatform = platform;
            gameBkImg = backgroundImg;

            
        });

        const response2 = await fetch('/api/games/', {
            method: 'POST',
            body: JSON.stringify({gameName, gameScore, gamePlatform, gameDate, gameBkImg }),
            headers: {'Content-Type': 'application/json'}
        });
        if (response2.ok){
            alert("game saved!")
        } else {
            alert("save game failed!");
        } 
    }
}



document.querySelector('#gameSearchButton').addEventListener('click', gameSearchHandler);