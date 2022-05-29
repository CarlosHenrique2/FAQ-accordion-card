import React from "react";

import "./style.css";

export interface ContainerProps {
  children: typeof React.Children;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <>{children}</>;
};

export default Container;
