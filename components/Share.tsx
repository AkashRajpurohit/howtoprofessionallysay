import { useCopyToClipboard } from 'hooks/useCopyToClipboard';
import { trackEvent } from 'lib/analytics';
import siteMetadata from 'lib/sitemetadata';
import React, { FunctionComponent } from 'react';
import { Facebook, Linkedin, Twitter } from 'react-feather';
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from 'react-share';

type Method = 'facebook' | 'linkedin' | 'twitter' | 'copy';

const Share: FunctionComponent = (): JSX.Element => {
  const publicUrl = siteMetadata.siteUrl;
  const title = siteMetadata.title;
  const [isCopied, handleCopy] = useCopyToClipboard(1500, publicUrl);

  const onShareClick = (method: Method) => {
    trackEvent({ type: 'Share', value: method });

    if (method === 'copy') {
      handleCopy();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="font-bold uppercase">Share with others</h3>
      <div className="m-0 flex items-center justify-center gap-4">
        <TwitterShareButton
          url={publicUrl}
          title={title}
          className="transform stroke-current transition hover:rotate-[-4deg]"
          onClick={() => onShareClick('twitter')}
        >
          <Twitter />
        </TwitterShareButton>
        <FacebookShareButton
          url={publicUrl}
          title={title}
          className="transform stroke-current transition hover:rotate-[-4deg]"
          onClick={() => onShareClick('facebook')}
        >
          <Facebook />
        </FacebookShareButton>
        <LinkedinShareButton
          title={title}
          url={publicUrl}
          className="transform stroke-current transition hover:rotate-[-4deg]"
          onClick={() => onShareClick('linkedin')}
        >
          <Linkedin />
        </LinkedinShareButton>
        <button
          className={`group ${isCopied ? 'text-primary-500' : ''}`}
          onClick={() => onShareClick('copy')}
        >
          <span className="sr-only">Copy code</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            fill="none"
            className="h-12 w-12 transform stroke-current transition group-hover:rotate-[-4deg] md:h-11 md:w-11"
          >
            <path
              d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M13.7475 16.2499L18.2475 16.2499"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M13.7475 19.2499L18.2475 19.2499"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <g
              className={`transition-opacity ${
                isCopied
                  ? 'rotate-[-4deg] transform opacity-100 transition'
                  : 'opacity-0'
              }`}
            >
              <path
                d="M15.9975 5.99988L15.9975 3.99988"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M19.9975 5.99988L20.9975 4.99988"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M11.9975 5.99988L10.9975 4.99988"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Share;
