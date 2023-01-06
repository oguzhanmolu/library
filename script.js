'use strict';
const btnAddBook = document.querySelector('#add-book');
const bookModal = document.querySelector('#modal');
const btnSubmit = document.querySelector('#submit-button');
const bookForm = document.querySelector('#form');
const htmlMain = document.querySelector('#main');
const bookDisplayArea = document.querySelector('#book-display-area');
let inputBookTitle = document.querySelector('#book-title');
let inputBookAuthor = document.querySelector('#book-author');
let inputBookPages = document.querySelector('#book-pages');
let inputBookReadStatus = document.querySelector('#book-read');
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

btnAddBook.addEventListener('click', () => {
  bookForm.reset();
  bookModal.style.display = 'block';
  htmlMain.style.filter = 'blur(1px)';
});

btnSubmit.addEventListener('click', () => {
  bookModal.style.display = 'none';
  htmlMain.style.filter = 'blur(0px)';

  if (inputBookTitle.value && inputBookAuthor.value && inputBookPages.value) {
    addBookToLibrary();
    createBookCard();
  } else {
    alert('Please fill all information');
  }
});

function addBookToLibrary() {
  let newBook = new Book(
    inputBookTitle.value,
    inputBookAuthor.value,
    inputBookPages.value,
    inputBookReadStatus.checked
  );
  myLibrary.push(newBook);
}
const createBookCard = () => {
  const bookCard = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const btnReadStatus = document.createElement('button');
  const btnRemove = document.createElement('button');
  title.textContent = `${inputBookTitle.value}`;
  author.textContent = `${inputBookAuthor.value}`;
  pages.textContent = `${inputBookPages.value}`;
  btnRemove.textContent = 'Remove';
  bookCard.classList.add('book-card');
  btnRemove.classList.add('remove-button');

  // Read button
  if (inputBookReadStatus.checked === true) {
    btnReadStatus.textContent = 'Read';
    btnReadStatus.classList.add('green-button');
  } else {
    btnReadStatus.textContent = 'Not Read';
    btnReadStatus.classList.add('red-button');
  }

  bookDisplayArea.appendChild(bookCard);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(btnReadStatus);
  bookCard.appendChild(btnRemove);

  removeBookCard(btnRemove);
};

// Remove book card
const removeBookCard = (button) => {
  button.addEventListener('click', (e) => {
    for (let i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].title == e.target.parentNode.firstChild.textContent) {
        myLibrary.splice(i, 1);
      }
    }
    e.target.parentNode.style.display = 'none';
  });
};
