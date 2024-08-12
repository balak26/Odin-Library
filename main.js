const myLibrary = [];

function Book(title, author, page, isRead) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.isRead = isRead;
}

function addBook() {
  console.log("submitted");
}

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
});
