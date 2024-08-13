const myLibrary = [];
const form = document.querySelector("form");
const con = document.querySelector("#con");

console.log(myLibrary);

function Book(title, author, page, isRead) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.isRead = isRead;
}

const book1 = new Book("dad", "mom", 33, "read");
const book2 = new Book("mom", "dad", 111, "reading");
const book3 = new Book("last", "dad", 111, "reading");

myLibrary.push(book1, book2, book3);

function render() {
  const html = myLibrary
    .map(
      (book, index) =>
        `<ul class="table"><li>${book.title}</li><li>${book.author}</li><li>${book.page}</li><li>${book.isRead}</li><button onclick="delBook(${index})" id="del">Delete</button></ul>`
    )
    .join("");

  con.innerHTML = html;
}

render();

function addBookToLibrary(book) {
  myLibrary.push(book);
  render();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const toObject = Object.fromEntries(formData);
  const { title, page, author, isRead } = toObject;
  const book = new Book(title, author, page, isRead);

  addBookToLibrary(book);
});

const del = document.querySelectorAll("#del");

function delBook(index) {
  myLibrary.splice(index, 1);
  render();
}
