const myLibrary = [];
const form = document.querySelector("form");
const addBookBtn = document.querySelectorAll(".addBook");
const del = document.querySelectorAll("#del");
const table = document.querySelector("#heading");
const tableBody = document.querySelector("#body");
const heading = ` 
        <th>Title</th>
        <th>Author</th>
        <th>Pages</th>
        <th>Status</th>
        <th>Remove</th>
      `;

function Book(title, author, page, isRead) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.isRead = isRead;
}

const book1 = new Book("Nicked", "M.T. Anderson", 240, "read");
const book2 = new Book("The Fertile Earth", "Ruthvika Rao", 384, "reading");
const book3 = new Book(
  "Everything We Never Knew",
  "Julianne Hough",
  320,
  "not read"
);

myLibrary.push(book1, book2, book3);

function render() {
  const html = myLibrary
    .map(
      (book, index) =>
        `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.page}</td>
        <td >${book.isRead}</td><td><button onclick="delBook(${index})" id="del">Delete</button></td></tr>`
    )
    .join("");
  if (myLibrary.length === 0) {
    table.innerHTML = "";
  } else {
    table.innerHTML = heading;
  }
  tableBody.innerHTML = html;
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
  toggleForm();
});

function delBook(index) {
  myLibrary.splice(index, 1);
  render();
}

addBookBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForm();
  });
});

function toggleForm() {
  form.classList.toggle("show");
}
