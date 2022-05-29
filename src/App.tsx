import React from "react";

import "./app.css";
import "./global.css";

import IlustradorMobile from "./assets/icon/illustration-woman-online-mobile.svg";
import Box from "./assets/icon/illustration-box-desktop.svg";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <div className="Conteiner ConteinerM">
        <div className="Conteiner_img">
          <div className="Conteiner_DeskBgimg"></div>
          <div className="Conteiner_Deskwomanimg"></div>
          <div className="Conteiner_bgMobile"></div>
          <img
            className="Conteiner_Mobilewomanimg"
            src={IlustradorMobile}
            alt=""
          />
          <img className="Conteiner_controler_imgBoxDesk" src={Box} alt="" />
        </div>
        <div className="Conteiner_text">
          <h1>FAQ</h1>
          <Details
            title="How many team members can I invite?"
            content="No more than 2GB. All files in your account must fit your allotted
          storage space."
          ></Details>
          <Details
            title="What is the maximum file upload size?"
            content="No more than 2GB. All files in your account must fit your allotted storage space."
          ></Details>
          <Details
            title="How do I reset my password?"
            content="No more than 2GB. All files in your account must fit your allotted
          storage space."
          ></Details>
          <Details
            title="Can I cancel my subscription?"
            content="No more than 2GB. All files in your account must fit your allotted
          storage space."
          ></Details>
          <Details
            title="Do you provide additional support?"
            content="No more than 2GB. All files in your account must fit your allotted
          storage space."
          ></Details>
        </div>
      </div>
    </div>
  );
}

export default App;
