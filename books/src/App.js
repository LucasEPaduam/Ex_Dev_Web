import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import SysRoutes from './SysRoutes';
import BooksProvider from './context/BooksProvider';

import './App.css';

function App() {
  const [books, setBooks] = useState([
    {
      id: 0,
      name: 'A descoberta do mundo',
      author: 'Clarice Lispector',
      pages: '480',
      image: 'https://m.media-amazon.com/images/I/61iz3UgVyJL.jpg',
    },
    {
      id: 1,
      name: 'Gênero e desigualdades',
      author: 'Flávia Biroli',
      pages: '210',
      image:
        'https://boitempo-img.f1cdn.com.br/resizer/view/900/900/false/true/542.jpg',
    },
  ]);

  const onBookSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    let newBooks = [
      ...books,
      {
        id: books.length + 1,
        name: event.target.name.value,
        author: event.target.author.value,
        pages: event.target.pages.value,
        imageUrl: event.target.imageUrl.value,
      },
    ];
    setBooks(newBooks);
    console.log(books);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <BooksProvider>
          <SysRoutes books={books} onBookSubmit={onBookSubmit} />
        </BooksProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
