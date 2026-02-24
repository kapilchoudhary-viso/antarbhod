import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSidebarOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      {/* ── Top Bar ── */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 shadow-soft z-50 flex items-center px-5 md:px-8 gap-4">

        {/* Hamburger — opens sidebar on all screen sizes */}
        <button
          className="text-gray-500 hover:text-brand-primary p-2 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer flex-shrink-0"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle navigation"
        >
          {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo — larger */}
        <div className="flex items-center gap-3">
          <HeartHandshake className="text-brand-primary flex-shrink-0" size={32} />
          <div className="flex flex-col">
            <span className="text-[1.4rem] font-bold tracking-tight leading-none font-sans">
              <span className="text-red-600">Vision</span><span className="text-brand-primary">Care</span>
            </span>
            <span className="text-[1.1rem] font-script text-brand-accent leading-none mt-0.5">
              Antarbodh
            </span>
          </div>
        </div>
      </header>

      {/* ── Backdrop (click outside to close) ── */}
      <div
        className={`fixed inset-0 bg-black/25 backdrop-blur-[2px] z-40 transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* ── Sliding Sidebar ── */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-64px)] w-[230px] bg-white border-r border-gray-100 shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-0.5 px-3 py-6">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? 'bg-brand-primary/8 text-brand-primary font-semibold'
                    : 'text-gray-500 hover:text-brand-dark hover:bg-gray-50'
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${
                  isActive ? 'bg-brand-accent scale-125' : 'bg-gray-200 group-hover:bg-brand-primary'
                }`}></span>
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="px-5 mt-auto pb-8">
          <div className="h-px bg-gray-100 mb-5"></div>
          <button
            onClick={() => { onOpenContact(); setIsSidebarOpen(false); }}
            className="w-full py-3 px-4 bg-brand-primary text-white text-sm font-semibold rounded-xl hover:bg-brand-secondary transition-all duration-300 cursor-pointer"
          >
            Book a Session
          </button>
        </div>
      </aside>
    </>
  );
};

export default Header;
