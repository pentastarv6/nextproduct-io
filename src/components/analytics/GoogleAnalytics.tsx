'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { trackEvent, trackPageview } from '@/lib/analytics';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageview(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const element = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-analytics-event]');
      if (!element) return;

      const eventName = element.dataset.analyticsEvent;
      if (!eventName) return;

      trackEvent(eventName, {
        event_category: element.dataset.analyticsCategory,
        event_label: element.dataset.analyticsLabel,
        link_url: (element as HTMLAnchorElement).href,
        location: pathname,
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  if (!GA_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
