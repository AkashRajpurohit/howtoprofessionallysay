import React, { FunctionComponent, PropsWithChildren } from 'react';

interface ILayoutWrapperProps {}

const LayoutWrapper: FunctionComponent<ILayoutWrapperProps> = ({
  children,
}): JSX.Element => {
  return (
    <div className="mx-auto max-w-xl px-4 xl:max-w-2xl xl:px-0 2xl:max-w-4xl">
      <div className="flex h-screen flex-col justify-between">
        <main className="mb-auto">{children}</main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
