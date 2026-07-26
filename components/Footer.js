import { siteInfo, navLinks } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-charcoal-300 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex items-center justify-center w-7 h-7 rounded-md bg-gold-500/20 border border-gold-500/30">
                <span className="text-xs text-gold-400 font-serif font-bold leading-none">A</span>
              </span>
              <span className="font-serif text-xl font-semibold text-white tracking-wide">
                {siteInfo.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-charcoal-400 font-light max-w-xs">
              {siteInfo.tagline}. Delivering bespoke cosmetic & restorative dental care in Manhattan.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[11px] font-sans font-semibold tracking-label uppercase text-gold-400 mb-5">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-charcoal-400 hover:text-gold-400 transition-colors duration-300 font-light"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-[11px] font-sans font-semibold tracking-label uppercase text-gold-400 mb-5">
              Visit Us
            </h4>
            <div className="space-y-3 text-sm text-charcoal-400 font-light">
              <p>{siteInfo.address}</p>
              <p>{siteInfo.phone}</p>
              <p>{siteInfo.email}</p>
              <p>{siteInfo.hours}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-charcoal-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-500 font-light">{siteInfo.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-charcoal-500 hover:text-gold-400 transition-colors font-light">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-charcoal-500 hover:text-gold-400 transition-colors font-light">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
