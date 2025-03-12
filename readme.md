# Library Store

## Project Overview

The Library Store is a web-based application that allows users to manage a collection of books. Users can add new books, remove books, borrow books, return books, and view statistics about the library.

## Features

- **Add Book**: Add a new book to the library.
- **Remove Book**: Remove a book from the library by its ID.
- **List Available Books**: View all books that are currently available for borrowing.
- **Borrow Book**: Borrow a book by its ID.
- **Return Book**: Return a borrowed book by its ID.
- **List All Borrowed Books**: View all books that are currently borrowed.
- **Reports & Statistics**: Generate reports that include total books, borrowed books, available books, and the most borrowed author.

## How to Use

1. **Add a Book**: Use the `addBook(title, author, isBorrowed)` function to add a new book.
2. **Remove a Book**: Use the `removeBook(id)` function to remove a book by its ID.
3. **List Available Books**: Use the `listAvailableBooks()` function to view all available books.
4. **Borrow a Book**: Click the "borrow" button and enter the book ID to borrow a book.
5. **Return a Book**: Click the "return" button and enter the book ID to return a book.
6. **List All Borrowed Books**: Click the "all Borrowed" button to view all borrowed books.
7. **Generate Report**: Use the `generateReport()` function to get a report with statistics.

## Files

- **index.html**: The main HTML file that includes buttons for borrowing, returning, and listing borrowed books.
- **BookSystem.js**: The JavaScript file that contains all the functions for managing the library system.

## Example Usage

```javascript
// Add a new book
addBook("New Book Title", "Author Name", false);

// Remove a book by ID
removeBook(1);

// List all available books
console.log(listAvailableBooks());

// Borrow a book by ID
borrowBook(2);

// Return a book by ID
returnBook(2);

// List all borrowed books
console.log(allBorrowed());

// Generate a report
console.log(generateReport());
```
