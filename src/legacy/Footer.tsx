import React from 'react';
import logo from '../assets/fadeaway-logo-2.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-fadeaway-darker/80 border-t border-white/5">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <img src={logo.src} alt="Fadeaway Creatives" className="h-10 w-auto" />
            </a>
            <p className="text-neutral-400 text-sm mb-3">We Build Websites That Perform.</p>
            <p className="text-neutral-500 text-xs">Vancouver, BC – Working with clients across Canada & beyond.</p>
          </div>

          <div>
            <h4 className="text-neutral-50 font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#services" className="hover:text-fadeaway-teal transition-colors">SEO Strategy</a></li>
              <li><a href="#services" className="hover:text-fadeaway-teal transition-colors">Content Marketing</a></li>
              <li><a href="#services" className="hover:text-fadeaway-teal transition-colors">Link Building</a></li>
              <li><a href="#services" className="hover:text-fadeaway-teal transition-colors">Technical SEO</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-neutral-50 font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#hero" className="hover:text-fadeaway-teal transition-colors">Home</a></li>
              <li><a href="#pricing" className="hover:text-fadeaway-teal transition-colors">Pricing</a></li>
              <li><a href="/audit-request" className="hover:text-fadeaway-teal transition-colors">Request Website</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-neutral-50 font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://instagram.com/fadeawaycreatives" target="_blank" rel="noopener" className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-fadeaway-teal/20 rounded-lg transition-colors">
                <svg className="w-4 h-4 text-fadeaway-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://facebook.com/fadeawaycreatives" target="_blank" rel="noopener" className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-fadeaway-teal/20 rounded-lg transition-colors">
                <svg className="w-4 h-4 text-fadeaway-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20v-7.5h-2.5V9h2.5V7.11c0-2.47 1.5-3.82 3.72-3.82 1.05 0 1.97.08 2.23.11v2.58h-1.53c-1.2 0-1.43.57-1.43 1.4V9h2.86l-.53 3.5h-2.33V20" />
                </svg>
              </a>
              <a href="mailto:hello@fadeawaycreatives.com" className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-fadeaway-teal/20 rounded-lg transition-colors">
                <svg className="w-4 h-4 text-fadeaway-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Fadeaway Creatives. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-fadeaway-teal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-fadeaway-teal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
