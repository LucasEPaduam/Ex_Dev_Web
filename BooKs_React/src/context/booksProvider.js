import React, { useState} from 'react'
export const BooksContext = React.createContext ();

const BooksProvider = ( props ) => {

    const [books, setBooks ] = useState(

        [    
          {
          id: 0,
          name:"A descoberta do mundo",  
          author:"Clarice Lispector",  
          pages:"480",  
          image:'https://m.media-amazon.com/images/I/61iz3UgVyJL.jpg'       
          },
          
          {
          id: 1,
          name:"Gênero e desigualdades",  
          author:"Flávia Biroli",  
          pages:"210",  
          image:'https://boitempo-img.f1cdn.com.br/resizer/view/900/900/false/true/542.jpg'     
          },    
        ]  
      );
    
      function addBook( event ){
        event.preventDefault();
        let newBooks = [...books];
        newBooks.push({
          id: books.length + 1,
          name: event.target.name.value,
          author: event.target.author.value,
          pages: event.target.pages.value,
          image: event.target.image.value
        });
        setBooks(newBooks);
      };

      return(
        <BooksContext.Provider value={{ books: books, addBook: addBook}}>
            {props.children}
        </BooksContext.Provider>
      );    
}
export default BooksProvider;


