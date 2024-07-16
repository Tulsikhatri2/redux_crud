import React from "react";
import Form from "./Components/Form";
import TableData from "./Components/TableData";
import Navbar from "./Components/Navbar";
import Update from "./Components/Update";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/table" element={<TableData/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
    </>
  );
}

export default App;
