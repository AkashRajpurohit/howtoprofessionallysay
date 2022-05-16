import { UmamiWindow } from './types';
declare let window: UmamiWindow;

export const trackEvent = ({
  type,
  value,
}: {
  type: string;
  value: string;
}) => {
  if (typeof window !== undefined) {
    if (window.umami) {
      window.umami.trackEvent(value, type);
    }
  }
};

export const trackOutboundLink = (url: string) => {
  trackEvent({ type: 'Outbound Link', value: url });
};
