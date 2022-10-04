let cards = [];
id = 0;
const namec = document.getElementById('name');
const description = document.getElementById('description');
const save = document.getElementById('save');
const cardsContainer = document.getElementById('cards');
function addCard() {
    const card = {
        id: id++,
        name: namec.value,
        description: description.value
    };
    cards.push(card);
    namec.value = '';
    description.value = '';
};
function renderCards() {
    cardsContainer.textContent = '';
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        const cardName = document.createElement('h2');
        cardName.textContent = card.name;
        const cardDescription = document.createElement('p');
        cardDescription.textContent = card.description;
        const cardDelete = document.createElement('button');
        cardDelete.textContent = 'Eliminar';
        cardDelete.addEventListener('click', () => {
            cards = cards.filter(c => c.id !== card.id);
            renderCards();
        });
        cardElement.appendChild(cardName);
        cardElement.appendChild(cardDescription);
        cardElement.appendChild(cardDelete);
        cardsContainer.appendChild(cardElement);
    });
};

save.addEventListener('click', () => {
    if (namec.value === '' || description.value === '') {
        alert('Por favor, rellena todos los campos');
    } else {  
        addCard();
        renderCards();
    }
});




