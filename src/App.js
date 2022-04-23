import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyled from "./GLobalStyle/GLobalStyle";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

export default function App () {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/signup' element = {<SignUpPage/>} />
      </Routes>
    </BrowserRouter>
  );
}