import React, { FunctionComponent } from 'react';
import Ad from './Ad';
import Footer from './Footer';
import Header from './Header';

interface ILayoutWrapperProps {}

const LayoutWrapper: FunctionComponent<ILayoutWrapperProps> = ({
  children,
}): JSX.Element => {
  return (
    <div>
      <Header />
      <div className="mx-auto flex min-h-[50vh] max-w-2xl justify-between px-4 xl:max-w-3xl xl:px-0 2xl:max-w-5xl">
        <main className="mb-auto">
          <div className="h-20 w-full py-6 print:h-0 print:py-0">
            <Ad />
          </div>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
