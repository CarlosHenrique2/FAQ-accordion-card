import React from "react";

import "./style.css";
import "../../global.css";

export interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="Container">{children}</div>;
};

export default Container;
