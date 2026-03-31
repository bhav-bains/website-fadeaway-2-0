import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const socialLinks = [
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      ),
    },
  ];

  return (
    <header className={clsx(
      'z-[100] transition-all duration-300',
      'absolute top-0 left-0 right-0',
      'md:fixed md:left-0 md:right-0',
      isScrolled ? 'md:top-[5px] md:py-2' : 'md:top-0 md:py-2',
      'py-4 px-4 md:px-6'
    )}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden hover:bg-white/5 rounded-lg transition-all duration-300 absolute right-2 top-2 z-50 backdrop-blur-md bg-black/30 border border-white/10 p-1.5 text-white"
      >
        <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      <div className="hidden md:block container-max max-w-4xl">
        <div className={clsx(
          'backdrop-blur-md bg-black/30 border border-white/10 shadow-lg transition-all duration-300 flex items-center justify-center px-4 md:px-6 rounded-2xl',
          isScrolled ? 'bg-black/60 py-1.5' : 'py-2'
        )}>
          <nav className="flex items-center justify-center gap-3">
            <div className="flex flex-row items-center gap-3 rounded-lg p-2 px-4 py-1 transition-all duration-300">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-neutral-50 hover:text-fadeaway-orange transition-all duration-300 font-medium text-base px-3 py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/audit-request"
                className="text-fadeaway-orange hover:text-fadeaway-teal transition-all duration-300 font-semibold text-base px-3 py-1"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center gap-2 hidden">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-7 h-7 flex items-center justify-center glass-effect hover:bg-fadeaway-orange/20 rounded-lg transition-colors"
                  aria-label={social.name}
                >
                  <span className="w-2.5 h-2.5 flex items-center justify-center">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      <nav className={clsx(
        'md:hidden absolute top-full left-0 right-0 backdrop-blur-md bg-black/90 border-b border-white/10 shadow-lg transition-all duration-300',
        isOpen ? 'flex flex-col' : 'hidden'
      )}>
        <div className="flex flex-col items-center gap-2 p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-neutral-50 hover:text-fadeaway-orange transition-all duration-300 font-medium text-base px-3 py-2 w-full text-center"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/audit-request"
            onClick={() => setIsOpen(false)}
            className="text-fadeaway-orange hover:text-fadeaway-teal transition-all duration-300 font-semibold text-base px-3 py-2 w-full text-center"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};
