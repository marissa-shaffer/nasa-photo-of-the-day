import React from "react";
import "./App.css";

import Nasa from "./components/Nasa.js";
import logo from "./images/logo.png";
import { Spinner } from 'reactstrap';
import styled from 'styled-components'

const Button = styled.button`
background: grey;
border-radius: 3px;
border: 2px solid red;
color: white;
margin: 1rem;
padding: 0.5rem 2rem;
`;

const TitleH1 = styled.h1`
color: red;
font-size: 4rem;
`;

const AppDiv= styled.div`
background: black;
`;

function App() {
  return (
    <AppDiv className="App">
     <div className="logo-container">
       <img className="logo" src={logo} alt="Nasa Logo"/>
       <Spinner type="grow" color ="dark" />
       <TitleH1>NASA Photo of The Day</TitleH1>
       <Button>Yesterday's Photo</Button>
       <Nasa />
     </div>
    </AppDiv>
  );
}

export default App;
