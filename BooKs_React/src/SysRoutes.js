import React from "react";
import { Routes, Route } from "react-router-dom";
import NewBooks from "./components/newBooks/newBooks";
import Books from "./components/books";

const SysRoutes = ( props ) => {

    return (
      
        <Routes>
            <Route path="/" element={<Books/>}/>
            <Route path="/novolivro" element={<NewBooks/>}/>
        </Routes>    

    )

}
export default SysRoutes;