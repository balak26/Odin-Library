const myLibrary = [];
const form = document.querySelector("form");
const con = document.querySelector("#con");

console.log(myLibrary);

myLibrary.filter((item) => item.title.includes("f"));

function Book(title, author, page, isRead) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.isRead = isRead;
}

// function addBook(title) {}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const toObject = Object.fromEntries(formData);
  const { title, page, author, isRead } = toObject;
  const book = new Book(title, author, page, isRead);

  myLibrary.push(book);
});
