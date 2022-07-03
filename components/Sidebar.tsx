import React, { FunctionComponent } from 'react';
import Ad from './Ad';
import Share from './Share';

const Sidebar: FunctionComponent = (): JSX.Element => {
  return (
    <div className="lg:space-y-6">
      <div className="hidden lg:block">
        <Share />
      </div>
      <Ad />
    </div>
  );
};

export default Sidebar;
