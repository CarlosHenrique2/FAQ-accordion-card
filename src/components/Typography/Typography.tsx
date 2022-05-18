import React from "react";

export interface ITypographyProps {}

const defaultProps: Partial<ITypographyProps> = {};

export const Typography: React.FC<ITypographyProps> = () => {
  return <div></div>;
};

Typography.defaultProps = defaultProps;

export default Typography;
