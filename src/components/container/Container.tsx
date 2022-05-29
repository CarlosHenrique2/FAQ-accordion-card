import React from "react";

export interface ContainerProps {
  children: typeof React.Children;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <>{children}</>;
};

export default Container;
