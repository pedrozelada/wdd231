const oppenButton1 = document.querySelector('#openButton1');
const oppenButton2 = document.querySelector('#openButton2');
const oppenButton3 = document.querySelector('#openButton3');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');

const dialogBoxText = document.querySelector('#dialogBox div');

oppenButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `They are strong and savage`;
});

oppenButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `They are very smart`;
});

oppenButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `For humanity!!`;
});

closeButton.addEventListener('click', () => {
    dialogBox.close();
})