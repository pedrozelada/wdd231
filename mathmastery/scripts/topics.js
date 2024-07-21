const coursesElement = document.querySelector('.container');

const url = 'https://pedrozelada.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('.grid');

async function getTopics(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayItems(data.topics);
}

function displayItems (data) {
data.forEach(topic => {
    const article = document.createElement('article');
    const nameP = document.createElement('p');
    nameP.innerHTML = `${topic.name}`;
    article.appendChild(nameP);
    article.addEventListener('click', () => {
        displayTopicDetails(topic);
        });

    coursesElement.appendChild(article);
})
}; 


// Modal
let topicDetails = document.querySelector('#course-details');
function displayTopicDetails(topic) {
  topicDetails.innerHTML = '';
  topicDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${topic.name}</h2>
    <p><strong>Complexity:</strong> ${topic.complexity}</p>
    <p><strong>Requirements:</strong> ${topic.requirements}</p>
    <p><strong>Description:</strong> ${topic.description}</p>
  `;
  topicDetails.showModal();
  
  closeModal.addEventListener("click", () => {
    topicDetails.close();
  });
}

document.addEventListener('DOMContentLoaded', () => {
    getTopics(url);
}); 