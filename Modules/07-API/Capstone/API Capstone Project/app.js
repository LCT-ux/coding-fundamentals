const catContainer = document.querySelector('.cat-container');

async function fetchCatData() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/breeds');
    const catData = await response.json();

    catData.forEach(cat => {
      const card = createCatCard(cat);
      catContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching cat data:', error);
  }
}

function createCatCard(cat) {
  const card = document.createElement('div');
  card.className = 'cat-card';

  const image = document.createElement('img');
  image.className = 'cat-image';
  image.src = `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`;
  image.onerror = function() {
    this.onerror = null;
    this.src = './missingcat.png'; // Use the missing cat image
  };

  const name = document.createElement('h2');
  name.textContent = cat.name;

  const description = document.createElement('p');
  description.textContent = cat.description;

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(description);

  return card;
}

fetchCatData();
