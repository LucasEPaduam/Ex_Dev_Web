import React, { useContext } from 'react';
import { BooksContext } from '../context/BooksProvider';
const NewBook = (props) => {

  const BooksCtx = useContext(BooksContext);

  return (
    <form onSubmit={BooksCtx.onBookSubmit}>
      <input type='text' id='name' placeholder='Digite o nome do livro' />
      <input type='text' id='author' placeholder='Digite o nome do autor(a)' />
      <input type='text' id='pages' placeholder='Número de páginas' />
      <input type='text' id='imageUrl' placeholder='Url da imagem' />
      <input type='submit' value='Cadastrar' />
    </form>
  );
};

export default NewBook;