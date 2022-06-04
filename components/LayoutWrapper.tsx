import React, { FunctionComponent } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header';

interface ILayoutWrapperProps {}

const LayoutWrapper: FunctionComponent<ILayoutWrapperProps> = ({
  children,
}): JSX.Element => {
  return (
    <div>
      <Header />
      <div className="mx-auto flex min-h-[50vh] flex-col-reverse justify-evenly px-4 lg:flex-row xl:gap-6 xl:px-0">
        <aside className="w-0 print:hidden print:h-0 xl:h-screen 2xl:w-80"></aside>
        <main className="mb-auto w-full lg:max-w-3xl">{children}</main>
        <aside className="top-0 pt-12 print:hidden print:h-0 lg:sticky lg:h-screen lg:w-80">
          <Sidebar />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
