const myLibrary = [];

function Book(title, author, pages, readStatus) {
  //the constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.readStatus}`;
  };
  this.display = function () {
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
}


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

  //bottom row of card
  const removeDiv = document.createElement("div");
  const removeButton = document.createElement("span");
  const changeReadStatus = document.createElement("button");

  changeReadStatus.classList.add("change-read");
  changeReadStatus.textContent = "Change Read Status";

  removeDiv.classList.add("remove-div");
  removeButton.classList.add("remove-button");

  removeDiv.append(changeReadStatus, removeButton);
  removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

  //append to card

  card.append(title, author, pages, readStatus, removeDiv);
  libraryContainer.append(card);
};

Book.prototype.remove = function () {};

const showButton = document.querySelector("#showDialog");
const newFormModal = document.querySelector("#addNewBookForm");
const confirmButton = document.querySelector("#confirmBtn");

const harryPotter = new Book("Harry Potter", "J. K. Rowling", 652, "read");
harryPotter.setAttribute("data-index", "0");

const percyJackson = new Book("Percy Jackson", "Rick Riordan", 377, "not read");
percyJackson.setAttribute("data-index", "1");

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

  let userBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookReadTracker.value
  );
  if (
    bookTitle.value === "" &&
    bookAuthor.value === "" &&
    bookPages.value === ""
  ) {
  } else {
    userBook.display();
  }

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

  let wantstoAddBook = prompt("Do you want to add a book? ").toLowerCase();

  while (wantstoAddBook === "yes") {
    let userBook = new Book(
      prompt("What is the title? "),
      prompt("Who is the author? "),
      prompt("How many pages? "),
      prompt("Read or Not Read? ").toLowerCase()
    );

    //append userBook object to Library
    myLibrary.push(userBook);

    let wantsAnotherBook = prompt(
      "Do you want to add another book?"
    ).toLowerCase();

    //add another book
    if (wantsAnotherBook == "yes") {
      continue;
    } else {
      wantstoAddBook = false;
    }
  }
}

function displayBook() {
  for (let i in myLibrary) {
    myLibrary[i].display();
  }
}

displayBook();
