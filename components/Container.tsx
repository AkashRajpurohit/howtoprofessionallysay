import React, { FunctionComponent } from 'react';
import Footer from './Footer';
import Header from './Header';

interface IContainerProps {}

const Container: FunctionComponent<IContainerProps> = ({
  children,
}): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Container;
