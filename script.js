'use strict';
const btnAddBook = document.querySelector('#add-book');
const bookModal = document.querySelector('#modal');
const btnSubmit = document.querySelector('#submit-button');
const bookForm = document.querySelector('#form');
const htmlMain = document.querySelector('#main');
const bookDisplayArea = document.querySelector('#book-display-area');
let bookTitle = document.querySelector('#book-title');
let bookAuthor = document.querySelector('#book-author');
let bookPages = document.querySelector('#book-pages');
let bookRead = document.querySelector('#book-read');
let myLibrary = [];

btnAddBook.addEventListener('click', () => {
  bookForm.reset();
  bookModal.style.display = 'block';
  htmlMain.style.filter = 'blur(1px)';
});

btnSubmit.addEventListener('click', () => {
  bookModal.style.display = 'none';
  htmlMain.style.filter = 'blur(0px)';

  bookTitle.value && bookAuthor.value && bookPages.value
    ? addBookToLibrary()
    : alert('Please fill all information');
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookRead.checked
  );
  myLibrary.push(newBook);
  createBookCard(newBook);
}
const createBookCard = (book) => {
  const bookCard = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('button');
  const removeBtn = document.createElement('button');

  bookCard.classList.add('book-card');
  if (book.read === true) {
    read.textContent = 'Read';
    read.classList.add('green-button');
  } else {
    read.textContent = 'Not Read';
    read.classList.add('red-button');
  }
  removeBtn.classList.add('remove-button');

  title.textContent = `${book.title}`;
  author.textContent = `${book.author}`;
  pages.textContent = `${book.pages}`;
  removeBtn.textContent = 'Remove';

  bookDisplayArea.appendChild(bookCard);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(read);
  bookCard.appendChild(removeBtn);
};
