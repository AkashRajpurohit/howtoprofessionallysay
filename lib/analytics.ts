import { UmamiWindow } from './types';
declare let window: UmamiWindow;

export const trackEvent = ({
  name,
  data = {},
}: {
  name: string;
  data: Record<any, any>;
}) => {
  if (typeof window !== undefined) {
    if (window.umami) {
      window.umami.track(name, data);
    }
  }
};

export const trackOutboundLink = (url: string) => {
  trackEvent({ name: 'Outbound Link', data: { url } });
};
