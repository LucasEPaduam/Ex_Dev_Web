import React, {useContext} from 'react';
import { BooksContext } from '../../context/booksProvider';    

const NewBooks = ( props )  => {
    const BooksCtx = useContext(BooksContext);
return(
    <form onSubmit={BooksCtx.addBook}>
    <input type ='text' name='name' placeholder='Nome do Livro'/>
    <input type ='text' name='author' placeholder='Autor do Livro'/>
    <input type ='text' name='pages' placeholder='Paginas do Livro'/>
    <input type ='text' name='image' placeholder='Imagem do Livro'/>
    <input type ='submit' value="Add Book"/>
   </form> 
    
    )   
}

export default NewBooks;