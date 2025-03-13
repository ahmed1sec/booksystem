// Array of books , where each book is an object
let books = [
    { id: 1, title: "The Art of War", author: "Sun Tzu", isBorrowed: false},
    { id: 2, title: "Clean Code", author: "Robert C. Martin", isBorrowed: true},
    { id: 3, title: "1984", author: "George Orwell", isBorrowed: false},
    { id: 4, title: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas", isBorrowed: false},
    { id: 5, title: "The Alchemist", author: "Paulo Coelho", isBorrowed: true},
    { id: 6, title: "Atomic Habits", author: "James Clear", isBorrowed: false},
    { id: 7, title: "The Lean Startup", author: "Eric Ries", isBorrowed: false},
    { id: 8, title: "Deep Work", author: "Cal Newport", isBorrowed: true}, 
    { id: 9, title: "Sapiens", author: "Yuval Noah Harari", isBorrowed: false},
    { id: 10, title: "Hooked", author: "Nir Eyal", isBorrowed: false}
];

// Function to add new book 
function addBook(title, author, isBorrowed) {
    const newBook = {
        id: books.length + 1,
        title: title,
        author: author,
        isBorrowed: isBorrowed
    };
    books.push(newBook);
    console.log(`Book added: ${title} by ${author}`);
}

// Function to remove book by ID 
function removeBook(id) {
    books = books.filter(book => book.id !== id);
}

// Function to list all available books 
function listAvailableBooks() {
    return books.filter(book => !book.isBorrowed);
}

document.getElementById("add").onclick = ()=>{
    let Title = prompt("What is the book Title");
    let Author = prompt("who is the book Author");
    addBook(Title,Author,false);
}

document.getElementById("remove").onclick = ()=>{
    let id = parseInt(prompt("What is the book ID"));
    removeBook(id);
}

document.getElementById("List").onclick = ()=>{
    console.log(listAvailableBooks());
}

// =============================
// MEMBER 2: Borrowing System
// =============================

// Function to borrow a book
function borrowBook(id) {
    let book = books.find(book => book.id == id);
    if (book && !book.isBorrowed) {
        book.isBorrowed = true;
        console.log(`Book "${book.title}" borrowed.`);
    } else {
        console.log(`Book is already borrowed or not found.`);
    }
}

// Function to return a book
function returnBook(id) {
    let book = books.find(book => book.id == id);
    if (book && book.isBorrowed) {
        book.isBorrowed = false;
        console.log(`Book "${book.title}" Returned.`);
    } else {
        console.log(`Book is already in store.`);
    }
}

// Function to return borrowed
function allBorrowed() {
    return (books.filter(book => book.isBorrowed));
}

// events
document.getElementById("borrow").onclick=()=>{
    let id = prompt("Give me the book id");
    borrowBook(id)
}
document.getElementById("return").onclick=()=>{
    let id = prompt("Give me the book id");
    returnBook(id)
}
document.getElementById("all").onclick=()=>{
    console.log(allBorrowed())
}



// =============================
// MEMBER 3: Reports & Statistics
// =============================

// Function to count total number of books
function getTotalBooks() {
    return books.length; // Return the length of the books array
}

// Function to count how many books are borrowed
function getBorrowedBooksCount() {
    return allBorrowed().length
}

// Function to count available books
function getAvailableBooksCount() {
    return getTotalBooks() - getBorrowedBooksCount(); // Subtract borrowed books from total books
}

// Function to find the most borrowed author
function getMostBorrowedAuthor() {
    let borrowedAuthors = {}; // Object to store borrow counts per author
    
    books.forEach(book => {
        // Instead of just checking isBorrowed, we now use borrowCount
        if (book.borrowCount > 0) {
            borrowedAuthors[book.author] = (borrowedAuthors[book.author] || 0) + book.borrowCount;
        }
    });

    // Find the most borrowed author by comparing borrow counts
    let mostBorrowedAuthor = Object.keys(borrowedAuthors).reduce((a, b) => 
        borrowedAuthors[a] > borrowedAuthors[b] ? a : b, "None");

    return mostBorrowedAuthor;
}

// Function to generate a report with statistics
function generateReport() {
    return {
        totalBooks: getTotalBooks(), // Get total number of books
        borrowedBooks: getBorrowedBooksCount(), // Get number of borrowed books
        availableBooks: getAvailableBooksCount(), // Get number of available books
        mostBorrowedAuthor: getMostBorrowedAuthor() // Get the most borrowed author
    };
}

document.getElementById("report").onclick = ()=>{console.log(generateReport())}
