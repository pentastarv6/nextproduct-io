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

  const socialLinks = [
    {
      name: 'X',
      href: 'https://x.com/nextproduct_io',
      handle: 'X',
      eventLabel: 'x_footer',
      ariaLabel: 'Follow NextProduct.io on X',
      title: 'Follow @nextproduct_io on X',
      badgeClass: 'bg-white text-black',
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.637 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.29 19.5h2.039L6.486 3.24H4.298l13.313 17.413z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/nextproduct-io',
      handle: 'LinkedIn',
      eventLabel: 'linkedin_footer',
      ariaLabel: 'Follow NextProduct.io on LinkedIn',
      title: 'Follow NextProduct.io on LinkedIn',
      badgeClass: 'bg-[#0A66C2] text-white',
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/nextproduct_io',
      handle: 'Instagram',
      eventLabel: 'instagram_footer',
      ariaLabel: 'Follow NextProduct.io on Instagram',
      title: 'Follow @nextproduct_io on Instagram',
      badgeClass: 'bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white',
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M7.75 0h8.5C20.53 0 24 3.47 24 7.75v8.5C24 20.53 20.53 24 16.25 24h-8.5A7.75 7.75 0 010 16.25v-8.5A7.75 7.75 0 017.75 0zm0 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm9.5 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 6a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className="border-t border-white/8 bg-surface pt-16 pb-10"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
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
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">
                {t.footer.socialLabel}
              </p>
              <p className="mt-2 text-sm text-white/50">{t.footer.socialCta}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-white/70 transition-colors hover:border-brand-400/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    aria-label={social.ariaLabel}
                    title={social.title}
                    data-analytics-event="social_click"
                    data-analytics-category="social"
                    data-analytics-label={social.eventLabel}
                  >
                    <span className={`inline-flex items-center justify-center rounded-md p-1 ${social.badgeClass}`}>
                      {social.icon}
                    </span>
                    <span className="text-xs font-medium">{social.handle}</span>
                  </a>
                ))}
              </div>
            </div>
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
