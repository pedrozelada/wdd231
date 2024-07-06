const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}



const url = '/data/members.json';
const cards = document.querySelector('.section');

async function getCompaniesData(url) {
    const response = await fetch(url);
    const data = await response.json();
     console.table(data.companies);
  //displayProphets(data.prophets);
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
getCompaniesData(url);