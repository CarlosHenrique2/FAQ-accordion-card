import React, { useState } from "react";

import "./style.css";
import "../../global.css";

import arrow1 from "../../assets/icon/arrow1.svg";
import arrow2 from "../../assets/icon/arrow2.svg";

export interface IDetailsProps {
  title: string;
  content: string;
}

export const Details: React.FC<IDetailsProps> = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="Conteiner_details Conteiner_detailsMobile">
      <div
        className="Conteiner_details_title"
        onClick={() => {
          if (open === false) {
            setOpen(true);
          }

          if (open === true) {
            setOpen(false);
          }
        }}
      >
        {title}
        {open || <img className="Conteiner_details_img" src={arrow2} alt="" />}
        {open && <img className="Conteiner_details_img" src={arrow1} alt="" />}
      </div>
      {open && <div className="Conteiner_details_content">{content}</div>}
    </div>
  );
};

export default Details;
