
import React, { useContext } from 'react';
import Book from './book';
import { BooksContext } from '../context/booksProvider';

const Books = ( props )  => {
    const BooksCtx = useContext(BooksContext);
return(
        <div>
            {BooksCtx.books.map((book)=>{
                    return(          
                    <Book key={book.id} book={book}/>
                    )
                })
                }
        </div>
    
    )   
}

export default Books;