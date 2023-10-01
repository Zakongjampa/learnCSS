const cardButtons = document.querySelectorAll('.card button');
let modalInner= document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick))

function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    
    // Grab the img src
    const imgSrc = card.querySelector('img').getAttribute('src');
    console.log(imgSrc);
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;

    modalInner.innerHTML = `
            <img src = "${imgSrc.replace('200', '400')}" alt = "${name}"/>
            <p>${desc}</p>
    `;
    modalOuter.classList.add('open');
}

function closeModal(){
    modalOuter.classList.remove('open');
}



modalOuter.addEventListener('click', (event)=>{
    const isOutside = event.target.closest('.modal-inner');
    if(isOutside == null){
        modalOuter.classList.remove('open');
    }
} )

window.addEventListener('keydown', (event)=>{
    if(event.key === 'Escape'){
        closeModal();
    }
})