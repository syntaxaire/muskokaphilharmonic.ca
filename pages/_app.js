import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </main>
  );
}
