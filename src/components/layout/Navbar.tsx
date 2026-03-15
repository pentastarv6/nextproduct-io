'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import type { Locale } from '@/i18n/config';
import { locales, localeNames } from '@/i18n/config';
import type { Translations } from '@/i18n';

interface NavbarProps {
  locale: Locale;
  t: Translations;
}

const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/nextproduct_io',
    ariaLabel: 'Follow NextProduct.io on X',
    title: 'Follow @nextproduct_io on X',
    eventLabel: 'x_navbar',
    buttonClass: 'border-white/30 bg-white text-black hover:bg-white/90',
    icon: (
      <FaXTwitter className="h-[15px] w-[15px]" aria-hidden="true" />
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/nextproduct-io',
    ariaLabel: 'Follow NextProduct.io on LinkedIn',
    title: 'Follow NextProduct.io on LinkedIn',
    eventLabel: 'linkedin_navbar',
    buttonClass: 'border-[#0A66C2]/70 bg-[#0A66C2] text-white hover:bg-[#0B5ABD]',
    icon: (
      <FaLinkedinIn className="h-[15px] w-[15px]" aria-hidden="true" />
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/nextproduct_io',
    ariaLabel: 'Follow NextProduct.io on Instagram',
    title: 'Follow @nextproduct_io on Instagram',
    eventLabel: 'instagram_navbar',
    buttonClass: 'border-pink-300/40 bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:brightness-110',
    icon: (
      <FaInstagram className="h-[15px] w-[15px]" aria-hidden="true" />
    ),
  },
];

const navLinks = (t: Translations, locale: Locale) => [
  { href: `/${locale}#services`, label: t.nav.services },
  { href: `/${locale}#learning`, label: t.nav.learning },
  { href: `/${locale}#digital-growth`, label: t.nav.digitalGrowth },
  { href: `/${locale}#about`, label: t.nav.about },
  { href: `/${locale}#contact`, label: t.nav.contact },
];

export default function Navbar({ locale, t }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = navLinks(t, locale);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/90 backdrop-blur-xl shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-dark rounded-lg"
          aria-label="NextProduct.io — Home"
        >
          <span className="text-xl font-display font-bold tracking-tight">
            Next<span className="gradient-text">Product</span>
            <span className="text-brand-400">.io</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 lg:flex" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors duration-150 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 rounded"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions: Lang Switcher + CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Language Switcher */}
          <div
            className="flex items-center rounded-lg border border-white/15 overflow-hidden"
            role="group"
            aria-label="Language selector"
          >
            {locales.map((loc) => (
              <Link
                key={loc}
                href={`/${loc}`}
                aria-label={`Switch to ${localeNames[loc]}`}
                aria-current={loc === locale ? 'true' : undefined}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-150 ${
                  loc === locale
                    ? 'bg-brand-500 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {loc}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2" role="list" aria-label="Social links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center rounded-lg border p-2 transition focus:outline-none focus:ring-2 focus:ring-brand-500 ${social.buttonClass}`}
                aria-label={social.ariaLabel}
                title={social.title}
                data-analytics-event="social_click"
                data-analytics-category="social"
                data-analytics-label={social.eventLabel}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={`/${locale}#contact`}
            className="btn-primary text-xs px-5 py-2.5"
            data-analytics-event="book_call_click"
            data-analytics-category="cta"
            data-analytics-label="navbar_cta"
          >
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex items-center justify-center rounded-lg border border-white/15 p-2 text-white transition hover:bg-white/10 lg:hidden focus:outline-none focus:ring-2 focus:ring-brand-500"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/8 bg-dark/95 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col px-6 py-4 gap-1" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/8 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 px-6 pb-6">
            <div
              className="flex items-center rounded-lg border border-white/15 overflow-hidden"
              role="group"
              aria-label="Language selector"
            >
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={`/${loc}`}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                    loc === locale
                      ? 'bg-brand-500 text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {loc}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2" role="list" aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center rounded-lg border p-2 transition ${social.buttonClass}`}
                  aria-label={social.ariaLabel}
                  title={social.title}
                  data-analytics-event="social_click"
                  data-analytics-category="social"
                  data-analytics-label={`${social.eventLabel}_mobile`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <Link
              href={`/${locale}#contact`}
              onClick={() => setMenuOpen(false)}
              className="btn-primary flex-1 text-center text-xs px-5 py-2.5"
              data-analytics-event="book_call_click"
              data-analytics-category="cta"
              data-analytics-label="mobile_menu_cta"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
