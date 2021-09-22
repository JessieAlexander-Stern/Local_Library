function findAuthorById(authors, id) {
  const found = authors.find((author) => author.id === id);
  return found;
}


function findBookById(books, id) {
  const found = books.find((book) => book.id === id);
  
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  
    let available = [];
    let unavailable = [];
    let bookStatuses = [];
  
    books.forEach((book) => {
     const isBookCheckedOut = book.borrows[0].returned === false;
     if (isBookCheckedOut) { 
       unavailable.push(book);
     } else { 
       available.push(book);
     }
   });
  
   bookStatuses.push(unavailable);
   bookStatuses.push(available);
  
   return bookStatuses; 
  
  }

function getBorrowersForBook(book, accounts) {
  let result = [];
  let borrowArray = book.borrows;  
  borrowArray.forEach(borrow=>{
    let account = accounts.find(acc => acc.id === borrow.id);
    let obj = account;
    obj['returned'] =  borrow.returned;
    result.push(obj);
  })
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
