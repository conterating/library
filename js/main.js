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
}

function addBookToLibrary() {
  //do stuff here
  let wantstoAddBook = prompt("Do you want to add a book?").toLowerCase();

  while (wantstoAddBook === "yes") {
    let userBook = new Book(
      prompt("What is the title? "),
      prompt("Who is the author? "),
      prompt("How many pages? "),
      prompt("Read or not read? ").toLowerCase()
    );

    //append userBook object to Library
    myLibrary.push(userBook);

    let wantsAnotherBook = prompt("Do you want to add another book?");

    //add another book
    if (wantsAnotherBook == "yes") {
      continue;
    } else {
      break;
    }
  }
}

addBookToLibrary();
console.log(myLibrary);
