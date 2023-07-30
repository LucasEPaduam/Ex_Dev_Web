import React, { useContext } from 'react';
import { BooksContext } from '../context/BooksProvider';
import Book from './Book';

const Books = () => {

  const { books } = useContext(BooksContext);
  console.log('[Books]', books);

  return (
    <div>
      {books.map((book) => {
        return (
          <Book key={book.id} book={book}>
            Esse livro é muito bom
          </Book>
        );
      })}
    </div>
  );
};
export default Books;
