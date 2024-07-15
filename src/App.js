import React from "react";
import Form from "./Components/Form";
import TableData from "./Components/TableData";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/form" element={<Form/>}/>
        <Route path="/table" element={<TableData/>}/>
      </Routes>
    </>
  );
}

export default App;
