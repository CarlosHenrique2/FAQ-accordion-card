import React from "react";

import "./app.css";

import IlustradorDesktop from "./assets/icon/illustration-woman-online-desktop.svg";
import IlustradorMobile from "./assets/icon/illustration-woman-online-mobile.svg";

import Box from "./assets/icon/illustration-box-desktop.svg";
import Arrow from "./assets/icon/icon-arrow-down.svg";

import BgButtonMobile from "./assets/icon/bg-pattern-mobile.svg";

import Container from "./components/container";
import Typography from "./components/Typography";

function App() {
  return (
    <div className="App">
      <div className="Conteiner">
        <div className="Conteiner_controler  ">
          <img className="Conteiner_controler_imgBoxDesk" src={Box} alt="" />
        </div>
        <div className="Conteiner_text">
          <div className="Conteiner_text-title">
            <h1>FAQ</h1>
          </div>
          <div className="Conteiner_text-content">
            <details className="summary-content">
              <summary>How many team members can i invite?</summary>
              <p>Epcot is a theme</p>
            </details>
          </div>
          <div className="Conteiner_text-content">
            <details className="summary-content">
              <summary>What is the maximum file upload size?</summary>
              <p>Epcot is a</p>
            </details>
          </div>
          <div className="Conteiner_text-content">
            <details className="summary-content">
              <summary>How do i reset my Passoword?</summary>
              <p>Epcot is a</p>
            </details>
          </div>
          <div className="Conteiner_text-content">
            <details className="summary-content">
              <summary>Can i cancel my subscription?</summary>
              <p>Epcot is a</p>
            </details>
          </div>
          <div className="Conteiner_text-content">
            <details className="summary-content">
              <summary>Do you provide additional support?</summary>
              <p>Epcot is a</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
