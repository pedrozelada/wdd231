const coursesElement = document.querySelector('#container');

const url = 'https://pedrozelada.github.io/wdd231/mathmastery/data/mathematics_topics.json';
const cards = document.querySelector('.grid');
let topics = [];

async function getTopics(url) {
  try {
      const response = await fetch(url);
      const data = await response.json();
      topics = data.topics;
      displayItems(data.topics);
  } catch (error) {
      console.error('Error fetching topics:', error);
  }
}

function displayItems (data) {
  coursesElement.innerHTML = '';
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


const easy = document.querySelector("#easy");
easy.addEventListener("click", () => {
  displayItems(topics.filter(topic => topic.complexity == 'Easy' ));
});

const medium = document.querySelector("#medium");
medium.addEventListener("click", () => {
  displayItems(topics.filter(topic => topic.complexity == 'Medium' ));
});

const high = document.querySelector("#high");
high.addEventListener("click", () => {
  displayItems(topics.filter(topic => topic.complexity == 'High' ));
});

const all = document.querySelector("#all");
all.addEventListener("click", () => {
  displayItems(topics);
});




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