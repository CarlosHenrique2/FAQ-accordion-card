import React from "react";

import "./app.css";

import IlustradorDesktop from "./assets/icon/illustration-woman-online-desktop.svg";
import IlustradorMobile from "./assets/icon/illustration-woman-online-mobile.svg";

import Box from "./assets/icon/illustration-box-desktop.svg";
import Arrow from "./assets/icon/icon-arrow-down.svg";

import BgButtonMobile from "./assets/icon/bg-pattern-mobile.svg";
import BgDektop from "./assets/icon/bg-pattern-desktop.svg";

import Container from "./components/container";
import Typography from "./components/Typography";

function App() {
  return (
    <div className="App">
      <div className="Conteiner">
        <div className="Conteiner_img">
          <div className="Conteiner_DeskBgimg"></div>
          <div className="Conteiner_Deskwomanimg"></div>
          <img className="Conteiner_controler_imgBoxDesk" src={Box} alt="" />
        </div>
        <div className="Conteiner_text">
          <h1>FAQ</h1>
          <Typography></Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
