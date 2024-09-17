const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

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
      continue;
    } else if (addBook == "no") {
      wantsToAddBook = false;
    }
  }
}

addBookToLibrary();
