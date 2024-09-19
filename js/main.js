const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

Book.prototype.display = function () {
  const bookContainer = document.querySelector(".book-container");
  const card = document.createElement("div");
  card.innerText = `Title: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}\nRead Status: ${this.readStatus}`;

  card.classList.add("display-card");
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
}

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

addBookToLibrary();
