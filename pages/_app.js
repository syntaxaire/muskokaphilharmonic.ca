import '@/styles/globals.css';
import { DM_Serif_Display } from 'next/font/google';
import { DM_Serif_Text } from 'next/font/google';

export const dmserif = DM_Serif_Text({
  subsets: ['latin'],
  weight: '400',
});
export const dmserifdisp = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={dmserif.className}>
      <Component {...pageProps} />
    </main>
  );
}
