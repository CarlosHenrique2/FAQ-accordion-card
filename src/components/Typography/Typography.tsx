import React from "react";

export interface ITypographyProps {
  label: string;
  content: string;
  arrow: string;
}

const defaultProps: Partial<ITypographyProps> = {};

export const Typography: React.FC<ITypographyProps> = () => {
  return <></>;
};

Typography.defaultProps = defaultProps;

export default Typography;
