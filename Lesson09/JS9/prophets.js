const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        /*console.table(jsonObject);*/
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birthday = document.createElement('p');
            let birthplace = document.createElement('p');
            let image = document.createElement('img');


            h2.innerHTML = `${prophets[i].name} ${prophets[i].lastname}`;
            birthday.innerHTML = 'Date of Birth: ' + `${prophets[i].birthdate}`;
            birthplace.innerHTML = 'Place of Birth: ' + `${prophets[i].birthplace}`;
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', `The official portrait of ${prophets[i].lastname}!`);


            card.appendChild(h2);
            card.appendChild(birthday);
            card.appendChild(birthplace);
            card.appendChild(image);


            document.querySelector('div.cards').appendChild(card);
        }

    });
    