const bookName = document.querySelector('.bookName');
const btnAdd = document.querySelector('.addBook');
const generatePos = document.querySelector('.generatePosition');
const allBook = document.querySelector('.allBook');
const clearArray = document.querySelector('.clearArray');
const showAlert = document.querySelector('.showAlert');


document.addEventListener('DOMContentLoaded', () => {

    let items = [];

    if(localStorage.getItem('Array') === null ){
        items = [];
    
    } else {
        items = JSON.parse(localStorage.getItem('Array'));
        
    }

    items.forEach(item => {
        let html = `
        <ul class="bookListStyle">
            <li><img src="img/book.png"> ${item}</li>
        </ul>
        `;
        allBook.innerHTML += html;
        
    });


});








btnAdd.addEventListener('click', e => {

    if(bookName.value === '') {
        showAlert.textContent = 'Nie możesz dodać pustego pola!';
    } else {

        addBook(bookName.value);
        bookName.value = '';
        window.location.reload();
      
    }
   

    e.preventDefault();
});


function addBook(bookTitle) {

    let items = [];

    if(localStorage.getItem('Array') === null ){
        items = [];
    
    } else {
        items = JSON.parse(localStorage.getItem('Array'));
        
    }

    items.push(bookTitle);
    localStorage.setItem('Array', JSON.stringify(items));
    showAlert.textContent = '';

}



generatePos.addEventListener('click', () => {


    if(localStorage.getItem('Array') === null ){
        showAlert.textContent = 'Tablica danych jest pusta, dodaj pozycję.';
    } else {
        items = JSON.parse(localStorage.getItem('Array'));
        
            items.forEach(item => {

                const random = items[Math.floor(Math.random() * items.length)];
            
               
                let html = `
                <ul class="generateText">
                    <li><img src="img/book.png"> ${random}</li>
                </ul>
                `;
                showAlert.innerHTML = html;
                
        
        });
    
}
    

});


clearArray.addEventListener('click', () => {

    localStorage.clear();
    showAlert.textContent = 'Zawartość tablicy została usunięta.';
    allBook.textContent = '';
});