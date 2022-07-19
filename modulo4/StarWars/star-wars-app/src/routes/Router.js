import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterDetailPage from "../components/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "../components/CharacterListPage/CharacterListPage";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/detalhes" element={<CharacterDetailPage/>}/>
                <Route path="/lista" element={<CharacterListPage/>}/>    
            </Routes>
        </BrowserRouter>
    )
}

export default Router
