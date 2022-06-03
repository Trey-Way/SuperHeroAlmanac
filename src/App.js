import logo from './logo.svg';
import './App.css'; 
import { Routes, Route, Link, Navigate } from "react-router-dom";
import React from 'react';
import ApiDisplay from './ApiDisplay';
import HeroList from './HeroList';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

 
function App() {
  const [hList, setHList] = useState([]);
  console.log(hList)

  const addHeroToList = (MData) => {
    // console.log(MData)

    // console.log("hlist" + {hList})
    setHList([...hList, MData])
   
    // console.log("list on" + MData)
  };

  const AlmanDisplay = (
    <div>
      <h1>Placeholder text</h1>
    </div>
  )


  return (
    <div className="App">
      <section className='navSection'>
      <h1 className='title'>SuperHero Almanac</h1>
      <Navbar bg="light" varient="light" id='NavBar'>
        <Nav >
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/HeroList">List of Your Characters</Nav.Link>
        </Nav>
      </Navbar>
      </section>
      <header className="App-header">
        <nav id='mainNav'>
        <h1>
          <Routes>
            <Route path="/" element={<ApiDisplay addHeroToList={addHeroToList} />}/>
            <Route path="/HeroList" element={<HeroList hList={hList}/>}/>
          </Routes>
        </h1>
        </nav>
      </header>
    </div>
  );
}

export default App;
