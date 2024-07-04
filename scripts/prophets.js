
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
     //console.table(data.prophets);
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let dateBirth = document.createElement('p');
        let placeBirht = document.createElement('p');
        let portrait = document.createElement('img');
        
        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
        dateBirth.innerHTML = `Date of Birth: ${prophet.birthdate}`;
        placeBirht.innerHTML = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', prophet.lastname);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(dateBirth);
        card.appendChild(placeBirht);
        card.appendChild(portrait);
        
        cards.appendChild(card);
    });
}

getProphetData(url);