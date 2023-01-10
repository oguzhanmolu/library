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

// Button functions
btnAddBook.addEventListener('click', () => {
  bookForm.reset();
  bookModal.style.display = 'block';
  htmlMain.style.filter = 'blur(1px)';
});

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  bookModal.style.display = 'none';
  htmlMain.style.filter = 'blur(0px)';

  inputBookTitle.value && inputBookAuthor.value && inputBookPages.value
    ? addBook()
    : alert('Please fill all information');
});

// Add to library & book card
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBook() {
  let newBook = new Book(
    inputBookTitle.value,
    inputBookAuthor.value,
    inputBookPages.value,
    inputBookReadStatus.checked
  );
  if (myLibrary.some((book) => book.title == newBook.title)) {
    alert('Book already exists.');
  } else {
    myLibrary.push(newBook);
    createBookCard();
  }
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

  bookDisplayArea.appendChild(bookCard);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(btnReadStatus);
  bookCard.appendChild(btnRemove);

  changeReadStatus(btnReadStatus, inputBookReadStatus);
  removeBookCard(btnRemove);
};

// Add read status
const changeReadStatus = (button, checkbox) => {
  if (checkbox.checked === true) {
    button.textContent = 'Read';
    button.classList.add('green-button');
  } else {
    button.textContent = 'Not Read';
    button.classList.add('red-button');
  }
  // Change read status
  for (const book of myLibrary) {
    button.addEventListener('click', (e) => {
      if (book.read == true) {
        e.target.classList.add('red-button');
        e.target.classList.remove('green-button');
        e.target.textContent = 'Not read';
        book.read = !book.read;
      } else {
        e.target.classList.add('green-button');
        e.target.classList.remove('red-button');
        e.target.textContent = 'Read';
        book.read = !book.read;
      }
    });
  }
};

// Remove book card
const removeBookCard = (button) => {
  button.addEventListener('click', (e) => {
    for (const book of myLibrary) {
      if (book.title == e.target.parentNode.firstChild.textContent) {
        myLibrary.splice(book.index, 1);
      }
    }
    e.target.parentNode.remove();
  });
};
