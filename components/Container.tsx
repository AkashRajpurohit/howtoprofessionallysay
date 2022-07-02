import React, { FunctionComponent } from 'react';
import Footer from './Footer';
import Header from './Header';

interface IContainerProps {}

const Container: FunctionComponent<IContainerProps> = ({
  children,
}): JSX.Element => {
  return (
    <div className="px-2">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Container;
