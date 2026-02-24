import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'About',         href: '#about' },
    { name: 'Services',      href: '#services' },
    { name: 'Wellness Club', href: '#wellness-club' },
    { name: 'Contact',       href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const ids = ['about', 'services', 'wellness-club', 'contact'];
      const scrollPos = window.scrollY + 120;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-[210px] bg-white border-r border-gray-100 shadow-[2px_0_12px_rgba(0,0,0,0.04)] flex-col z-50">

        {/* Logo */}
        <div className="px-7 pt-8 pb-6">
          <div className="flex items-center gap-3">
            <HeartHandshake className="text-brand-primary flex-shrink-0" size={28} />
            <div className="flex flex-col">
              <span className="text-[1.15rem] font-bold tracking-tight leading-none font-sans">
                <span className="text-red-600">Vision</span><span className="text-brand-primary">Care</span>
              </span>
              <span className="text-base font-script text-brand-accent leading-none mt-1">
                Antarbodh
              </span>
            </div>
          </div>
        </div>

        <div className="mx-6 h-px bg-gray-100"></div>

        {/* Nav links */}
        <nav className="flex flex-col gap-0.5 px-3 py-5 flex-grow">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? 'bg-brand-primary/8 text-brand-primary font-semibold'
                    : 'text-gray-500 hover:text-brand-dark hover:bg-gray-50'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${
                  isActive ? 'bg-brand-accent scale-125' : 'bg-gray-200 group-hover:bg-brand-primary'
                }`}></span>
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="pb-6"></div>
      </aside>

      {/* ── Mobile Top Bar ── */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-soft py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HeartHandshake className="text-brand-primary" size={26} />
            <div className="flex flex-col">
              <span className="text-[1.1rem] font-bold tracking-tight leading-none font-sans">
                <span className="text-red-600">Vision</span><span className="text-brand-primary">Care</span>
              </span>
              <span className="text-base font-script text-brand-accent leading-none mt-0.5">
                Antarbodh
              </span>
            </div>
          </div>
          <button
            className="text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-5 px-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 text-base font-medium py-3 border-b border-gray-50 hover:text-brand-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => { onOpenContact(); setIsMobileMenuOpen(false); }}
              className="mt-4 w-full py-3 bg-brand-primary text-white font-semibold rounded-xl hover:bg-brand-secondary transition-all duration-300 cursor-pointer"
            >
              Book a Session
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
