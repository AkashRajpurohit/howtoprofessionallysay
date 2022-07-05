import React, { FunctionComponent } from 'react';
import Ad from './Ad';
import Share from './Share';

const Sidebar: FunctionComponent = (): JSX.Element => {
  return (
    <div className="lg:space-y-6">
      <div className="hidden lg:block">
        <Share />
      </div>
      <div className="flex justify-center">
        <a
          href="https://www.producthunt.com/posts/how-to-professionally-say?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-how&#0045;to&#0045;professionally&#0045;say"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=351395&theme=light&period=daily"
            alt="How&#0032;to&#0032;professionally&#0032;say - A&#0032;guide&#0032;for&#0032;your&#0032;daily&#0032;&#0034;professional&#0034;&#0032;interactions | Product Hunt"
            width="250"
            height="54"
          />
        </a>
      </div>
      <Ad />
    </div>
  );
};

export default Sidebar;
