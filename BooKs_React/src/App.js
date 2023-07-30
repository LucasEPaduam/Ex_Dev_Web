
import React, {useState} from 'react';
import SysRoutes from './SysRoutes';
import Header from './components/header/header'
import { BrowserRouter } from 'react-router-dom';
import BooksProvider from './context/booksProvider';
import './App.css';

function App() {


  
  return (
    <div className="App">
     <h1>Primeira aula de React</h1>
     <BrowserRouter>
          <Header/> 
            <BooksProvider>  
              <SysRoutes/>  
            </BooksProvider>    
      </BrowserRouter> 
    </div>
  );
}

export default App;
