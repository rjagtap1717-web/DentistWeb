import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingSocials from '../components/FloatingSocials';
import { siteInfo } from '../data/siteData';

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteInfo.name} — {siteInfo.tagline}</title>
        <meta
          name="description"
          content="Oralea Dental Care offers world-class cosmetic and restorative dentistry in Manhattan. Porcelain veneers, dental implants, orthodontics, and more — in an atmosphere of quiet luxury."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <FloatingSocials />

      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
