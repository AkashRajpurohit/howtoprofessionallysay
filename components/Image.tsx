import NextImage, { ImageProps } from 'next/image';
import React, { FunctionComponent } from 'react';
import siteMetadata from 'lib/sitemetadata';

interface IImageProps extends ImageProps {}

const myLoader = ({ src, width, quality }: ImageProps) => {
  return `https://images.weserv.nl/url=${
    siteMetadata.siteUrl
  }${src}?w=${width}&q=${quality || 75}`;
};

const Image: FunctionComponent<IImageProps> = ({ ...props }): JSX.Element => {
  return <NextImage {...props} loader={myLoader} />;
};

export default Image;
