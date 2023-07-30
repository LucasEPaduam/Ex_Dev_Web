import React from 'react';
import Image from './Image';

const Book = (props) => {
  return (
    <>
      <p>Livro</p>
      <Image imageUrl={props.book.image} />
      <p>{props.book.name}</p>
      <p>{props.book.author}</p>
      <p>{props.book.pages}</p>
    </>
  );
};
export default Book;
