import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Translations } from '@/i18n';

interface FooterProps {
  locale: Locale;
  t: Translations;
}

export default function Footer({ locale, t }: FooterProps) {
  const links = [
    { href: `/${locale}#services`, label: t.footer.links.services },
    { href: `/${locale}#learning`, label: t.footer.links.learning },
    { href: `/${locale}#about`, label: t.footer.links.about },
    { href: `/${locale}#contact`, label: t.footer.links.contact },
  ];

  return (
    <footer
      className="border-t border-white/8 bg-surface pt-16 pb-10"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href={`/${locale}`}
              className="text-xl font-display font-bold tracking-tight text-white"
              aria-label="NextProduct.io — Home"
            >
              Next<span className="gradient-text">Product</span>
              <span className="text-brand-400">.io</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-400">
              Navigation
            </h3>
            <ul className="space-y-2" role="list">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-400">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {t.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {t.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={t.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-400/80 transition-colors hover:text-green-400"
                  aria-label={t.whatsapp.ariaLabel}
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">{t.footer.rights}</p>
          <Link
            href={`/${locale}/privacy`}
            className="text-xs text-white/40 transition-colors hover:text-white/70"
          >
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
