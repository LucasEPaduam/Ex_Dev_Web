import React from "react";
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import NewBook from './components/NewBook';

const SysRoutes = (props) => {
    return(
        <Routes>
          <Route path="/" element={<Books books={props.books} />} />
          <Route path="/novolivro" element={<NewBook />} />
        </Routes>
    )
}

export default SysRoutes;