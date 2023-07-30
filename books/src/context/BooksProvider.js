import React, { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
  getDoc,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const BooksContext = React.createContext();

const BooksProvider = (props) => {
  const [books, setBooks] = useState([ [
                {
                    id: 0,
                    name: "A liberdade é uma luta constante",
                    author: "Angela Davis",
                    pages: "144",
                    image: "https://m.media-amazon.com/images/I/71OHf5oySuL._CR0,204,1224,1224_UX256.jpg"
                },
                {
                    id: 1,
                    name: "Multidão: guerra e democracia na era do império",
                    author: "Antonio Negri e Michael Hardt",
                    pages: "540",
                    image: ""
                },
                {
                    id: 2,
                    name: "A liberdade é uma luta constante",
                    author: "Angela Davis",
                    pages: "144",
                    image: ""
                }
            ]]);

  const fetchBooks = async () => {
    const booksAux = [];
    try {
      const querySnapshot = await getDocs(collection(db, 'books'));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        booksAux.push({ id: doc.id, ...doc.data() });
      });
      setBooks(booksAux);
      console.log(booksAux);
    } catch (error) {
      console.error('Error fetching collection: ', error);
    }
  };

  // useEffect(() => {
  //   // fetchBooks();
  // }, []);

  const onBookSubmit = async (event) => {
    event.preventDefault();
    console.log('Cheguei no onbook submit');
    const newBook = {
      name: event.target.name.value,
      author: event.target.author.value,
      pages: event.target.pages.value,
      imageUrl: event.target.imageUrl.value,
    };
    try {
      const docRef = await addDoc(collection(db, 'books'), newBook);
      console.log('Document written with ID: ', docRef.id);
      newBook.id = docRef.id;
      const newBooks = [...books, newBook];
      setBooks(newBooks);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <BooksContext.Provider value={{ books: books, onBookSubmit: onBookSubmit }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
