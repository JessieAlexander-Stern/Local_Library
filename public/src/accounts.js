function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id);
  
  return found;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1);

  return accounts;
}


function getTotalNumberOfBorrows(account, books) {
  const accId = account.id;
  let total = 0;
  
  books.forEach(book => book.borrows.forEach(borrow => 
    accId === borrow.id && total++));
  return total;
}


function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows.some(
     acc => acc.id === account.id && acc.returned === false))
      .map(book => { let author = authors.find(author => author.id === book.authorId)
  book.author = author; 
  
  return book }) }
  

  


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
