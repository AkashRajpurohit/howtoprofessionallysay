import React, { FunctionComponent } from 'react';

interface IContainerProps {}

const Container: FunctionComponent<IContainerProps> = ({
  children,
}): JSX.Element => {
  return <div className="py-20 px-2">{children}</div>;
};

export default Container;
