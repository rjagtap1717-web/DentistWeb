import '../styles/globals.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.clearScrollMemory('manual');
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return <Component {...pageProps} />;
}
