const myLibrary = [];
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add-book-button");
const closeButton = document.querySelector(".close-dialog");

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

Book.prototype.display = function () {
  const bookContainer = document.querySelector(".book-container");
  const card = document.createElement("div");

  //title componenet
  const title = document.createElement("h2");
  title.textContent = `${this.title}`;
  title.classList.add("card-title");

  //author component
  const author = document.createElement("p");
  author.textContent = `Author: ${this.author}`;

  //pages component
  const pages = document.createElement("p");
  pages.textContent = `Pages: ${this.pages}`;

  //readStatus component
  const readStatus = document.createElement("p");
  readStatus.textContent = `Read Status: ${this.readStatus}`;

  //append created elements to card
  card.append(title, author, pages, readStatus);

  card.classList.add("display-card");
  //append card to bookContainer
  bookContainer.append(card);
};

function addDefaultBooks() {
  const harryPotter = new Book("Harry Potter", "J. K. Rowling", 223, "read");
  const lordofTheRings = new Book(
    "Lord of the Rings",
    "J. R. R. Tolkein",
    1200,
    "not read"
  );
  const greatGatsby = new Book(
    "Great Gatsby",
    "F. Scott Fitzgerald",
    192,
    "read"
  );
  const keeperOfTheLostCities = new Book(
    "Keeper Of the Lost Cities",
    "Shannon Messenger",
    496,
    "read"
  );
  const hobbit = new Book("The Hobbit", "J. R. R. Tolkein", 310, "not read");
  const dune = new Book("Dune", "Frank Herbert", 412, "not read");

  myLibrary.push(
    harryPotter,
    lordofTheRings,
    greatGatsby,
    keeperOfTheLostCities,
    hobbit,
    dune
  );

  for (let i = 0; i < myLibrary.length; i++) {
    myLibrary[i].display();
  }
}

function openDialog() {
  dialog.showModal();
}

function closeDialog(event) {
  const form = document.querySelector("form");
  const formTitle = document.querySelector("form #title");
  const formAuthor = document.querySelector("form #author");
  const formPages = document.querySelector("form #pages");
  const formReadStatus = document.querySelector("form #readStatus");

  if (
    formTitle.value !== "" &&
    formAuthor.value !== "" &&
    formPages.value !== "" &&
    formReadStatus.value !== ""
  ) {
    console.log("no empty values");
  } else {
    console.log("there are empty values");
  }
  formTitle.value =
    formAuthor.value =
    formPages.value =
    formReadStatus.value =
      "";
  dialog.close();
}

showButton.addEventListener("click", openDialog);

closeButton.addEventListener("click", closeDialog);

/*
function addBookToLibrary() {
  let wantsToAddBook = true;
  while (wantsToAddBook == true) {
    const addBook = prompt("Do you want to add a book? ");
    if (addBook == "yes") {
      userBook = new Book(
        prompt("Title: "),
        prompt("Author: "),
        prompt("Pages: "),
        prompt("Read Status: ")
      );
      myLibrary.push(userBook);
      userBook.display();

      continue;
    } else if (addBook == "no") {
      wantsToAddBook = false;
    }
  }
}
*/

addDefaultBooks();
//addBookToLibrary();
