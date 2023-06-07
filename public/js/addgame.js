const gameSearchHandler = (event) => {
    event.preventDefault();
    console.log("game search button clicked!");

    let game = document.querySelector('#gameSearch').value.trim(); // super mario galaxy
    game = game.split(" ").join("-").toLowerCase();  // super-mario-galaxy
    const url = `https://api.rawg.io/api/games/${game}?key=1b296d98b4fd4a98bdcb614862605bfc`; // https://api.rawg.io/api/games/super-mario-galaxy?key=
    
    let gameCards = document.querySelector('.games');

let title;
let metaScore;
let releaseDate;
let platform;
let imageFile;
let gameWebsite;
let gameFound = true;

    if (game){ // if exists fetch the data from the url 
        const response = fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json' },
        }).then(response => {
            return response.json();
        }).then(data => {
            if (data.detail != "Not found."){
                gameFound = true;
                console.log(data);

                const gmtitle = data.name;
                const metacritic = data.metacritic;
                const release = data.released;
                const gmplatform = data.platforms[0].platform.name;
                const backgroundImg = data.background_image;
                const website = data.website;

                const platformsArr = [];
                for (let i = 0; i < data.platforms.length; i++){
                    platformsArr.push(data.platforms[i].platform.name);
                }

                const firstDiv = document.createElement('div');
                firstDiv.classList.add('card', 'text-dark', 'm-1', 'text-center');
                firstDiv.style.width = '18rem';

                const gameImg = document.createElement('img');
                gameImg.classList.add('card-img-top');
                gameImg.setAttribute('src', data.background_image);
                gameImg.setAttribute('alt', "background image of game");

                const webTag = document.createElement('a');
                webTag.setAttribute('href', data.website);
                webTag.setAttribute('target', '_blank');

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
                p2.textContent = `Consoles: ${platformsArr.join(', ')}`;

                const p3 = document.createElement('p');
                p3.classList.add('card-text');
                p3.textContent = `Release Date: ${data.released}`;

                if (data.website != ""){
                    webTag.appendChild(gameImg);
                    firstDiv.appendChild(webTag);
                } else {
                    firstDiv.appendChild(gameImg);
                }
            
                secondDiv.appendChild(h5);
                secondDiv.appendChild(p1);
                secondDiv.appendChild(p2);
                secondDiv.appendChild(p3);
                firstDiv.appendChild(secondDiv);
                
                
                gameCards.appendChild(firstDiv);

                title = gmtitle;
                metaScore = metacritic;
                releaseDate = release;
                platform = platformsArr;
                imageFile = backgroundImg;
                gameWebsite = website;
//                 let title;
// let metaScore;
// let releaseDate;
// let platform;
// let imageFile;
                } else {
                    gameFound = false;
                    alert("Game not found!");
                }
        });

        if (gameFound){
            const response2 = fetch('/api/games/', {
                method: 'POST',
                body: JSON.stringify({title, metaScore, platform, releaseDate, imageFile, gameWebsite }),
                headers: {'Content-Type': 'application/json'}
            });
            if (response2.ok){
                alert("game saved!")
            } else {
                alert("save game failed!");
            } 
        }
    } 
} 



document.querySelector('#gameSearchButton').addEventListener('click', gameSearchHandler);