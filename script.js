'use strict';
const btnAddBook = document.querySelector('#add-book');
const bookModal = document.querySelector('#modal');
const submitButton = document.querySelector('#submit-button');
const bookForm = document.querySelector('#form');
const htmlMain = document.querySelector('#main');
const bookDisplayArea = document.querySelector('#book-display-area');
let bookTitle = document.querySelector('#book-title');
let bookAuthor = document.querySelector('#book-author');
let bookPages = document.querySelector('#book-pages');
let bookRead = document.querySelector('#book-read');
let myLibrary = [];

btnAddBook.addEventListener('click', () => {
  bookModal.style.display = 'block';
  bookForm.reset();
  htmlMain.style.filter = 'blur(2px)';
});

submitButton.addEventListener('click', () => {
  bookModal.style.display = 'none';
  htmlMain.style.filter = 'blur(0px)';
  addBookToLibrary();
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
  //
  const newBookCard = document.createElement('div');
  newBookCard.classList.add('book-card');
  bookDisplayArea.appendChild(newBookCard);
}
