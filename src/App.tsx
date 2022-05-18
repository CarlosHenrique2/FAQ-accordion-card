import React from "react";

import "./app.css";

import bg from "./assets/icon/illustration-woman-online-desktop.svg";

import Container from "./components/container";
import Typography from "./components/Typography";

function App() {
  return (
    <div className="App">
      <div className="Conteiner">
        <div>
          <img src={bg} alt="" />
        </div>
        <div className="Conteiner_text">
          <div>
            <h1>FAQ</h1>
          </div>
          <div>
            <details>
              <summary>How many team members can i invite?</summary>
              <p>Epcot is a theme</p>
            </details>
          </div>
          <div>
            <details>
              <summary>What is the maximum file upload size?</summary>
              <p>Epcot is a</p>
            </details>
          </div>
          <div>
            <details>
              <summary>How do i reset my Passoword?</summary>
              <p>Epcot is a</p>
            </details>
          </div>
          <div>
            <details>
              <summary>Can i cancel my subscription?</summary>
              <p>Epcot is a</p>
            </details>
          </div>
          <div>
            <details>
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
