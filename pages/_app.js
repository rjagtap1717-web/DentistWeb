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
    
    // Fallback: force scroll to top on unload so the browser doesn't try to remember it
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    // Robust post-hydration scroll logic to beat GSAP's initialization cycle
    const timers = [
      setTimeout(() => window.scrollTo(0, 0), 10),
      setTimeout(() => window.scrollTo(0, 0), 100),
      setTimeout(() => window.scrollTo(0, 0), 300)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return <Component {...pageProps} />;
}
