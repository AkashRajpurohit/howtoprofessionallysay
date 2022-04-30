import React, { FunctionComponent, PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';

interface ILayoutWrapperProps {}

const LayoutWrapper: FunctionComponent<ILayoutWrapperProps> = ({
  children,
}): JSX.Element => {
  return (
    <div>
      <Header />
      <div className="mx-auto flex h-screen max-w-xl flex-col justify-between px-4 xl:max-w-2xl xl:px-0 2xl:max-w-4xl">
        <main className="mb-auto">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
