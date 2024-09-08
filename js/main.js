const myLibrary = [];

function Book(title, author, pages, readStatus) {
  //the constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages}, ${this.readStatus}`;
};

Book.prototype.display = function () {
  const card = document.createElement("div");
  card.classList.add("card");
  const libraryContainer = document.querySelector(".library-container");

  //title
  const title = document.createElement("h2");
  title.textContent = `${this.title}`;
  title.classList.add("bookTitle");
  //author
  const author = document.createElement("p");
  author.textContent = `Author: ${this.author}`;
  //pages
  const pages = document.createElement("p");
  pages.textContent = `Pages: ${this.pages}`;
  //readStatus
  const readStatus = document.createElement("p");
  readStatus.textContent = `Status: ${this.readStatus}`;

  card.append(title, author, pages, readStatus);
  libraryContainer.append(card);
};

const showButton = document.querySelector("#showDialog");
const newFormModal = document.querySelector("#addNewBookForm");
const confirmButton = document.querySelector("#confirmBtn");

const harryPotter = new Book("Harry Potter", "J. K. Rowling", 652, "read");

const percyJackson = new Book("Percy Jackson", "Rick Riordan", 377, "not read");

const greatGatsby = new Book(
  "Great Gatsby",
  "F. Scott Fitzgerald",
  180,
  "read"
);
const keeperOfLostCities = new Book(
  "Keeper of Lost Cities",
  "Shannon Messenger",
  512,
  "read"
);
const diaryOfAWimpyKid = new Book(
  "Diary of a Wimpy Kid",
  "Jeff Kinney",
  217,
  "read"
);
const dune = new Book("Dune", "Frank Herbert", 412, "not read");
//add preset books to myLibrary arrary
myLibrary.push(
  harryPotter,
  percyJackson,
  greatGatsby,
  keeperOfLostCities,
  diaryOfAWimpyKid,
  dune
);

showButton.addEventListener("click", () => {
  newFormModal.showModal();
});

newFormModal.addEventListener("close", (e) => {
  const bookTitle = document.querySelector("#title");
  const bookAuthor = document.querySelector("#author");
  const bookPages = document.querySelector("#pages");
  const bookReadTracker = document.querySelector("#readTracker");

  console.log(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookReadTracker.value
  );

  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  bookReadTracker.value = "";
});

confirmButton.addEventListener("click", (e) => {
  e.preventDefault();
  newFormModal.close();
});

function clearForm() {
  document.getElementById("myForm").reset();
}

function displayBook() {
  for (let i in myLibrary) {
    myLibrary[i].display();
  }
}

displayBook();
