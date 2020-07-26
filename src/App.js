import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import  Home  from './components/Home';
import { Header } from './components/Header';
import Services from './components/Services';
import Chart from './components/Chart';
import NotFound  from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="services" element={<Services/>}></Route>
        <Route path="chart" element={<Chart/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
