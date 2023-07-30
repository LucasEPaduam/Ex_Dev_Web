import React from 'react';
import ImageBook from './imageBook';

const Book = ( props ) => {
    return(
        <div>
            <ImageBook imagemBook={props.book.image}/> 
            <h3>{props.book.name}</h3>
            <p>{props.book.author}</p>
            <p>{props.book.pages}</p>
        </div>
    )
}

export default Book;