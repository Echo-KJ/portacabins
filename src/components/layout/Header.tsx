'use client';

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND } from '@/src/lib/constants';
import { navLinks, mobileNavCategories } from '@/src/data/navigation';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const pathname = location.pathname;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Close mobile menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  return (
    <header className="sticky top-0 bg-white border-b border-[#e0d8cf] z-[1005]">
      <div className="max-w-[1400px] mx-auto h-[70px] px-6 lg:px-10 flex items-center justify-between">
        {/* Burger for mobile */}
        <button 
          className="lg:hidden p-1.5 text-black hover:text-[var(--brand-accent)] transition-colors" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Desktop Nav Left */}
        <nav className="hidden lg:flex items-center gap-7 flex-1">
          {navLinks.slice(0, 2).map((link) => (
            <Link 
              key={link.label} 
              to={link.href} 
              className="text-[10px] tracking-[2px] uppercase font-bold text-black/80 hover:text-[var(--brand-accent)] transition-all"
            >
              {link.label}
            </Link>
          ))}
          {/* Categories Dropdown */}
          <div 
            className="relative group h-[70px] flex items-center"
            onMouseEnter={() => setActiveDropdown('categories')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="text-[10px] tracking-[2px] uppercase font-bold text-black/80 group-hover:text-[var(--brand-accent)] transition-all flex items-center gap-1.5">
              Categories <ChevronDown size={12} className={cn("transition-transform", activeDropdown === 'categories' && "rotate-180")} />
            </button>
            <div className={cn(
              "absolute top-[70px] left-0 bg-white border border-[#e0d8cf] min-w-[220px] py-3 shadow-xl transition-all duration-300 transform origin-top",
              activeDropdown === 'categories' ? "opacity-100 visible scale-y-100" : "opacity-0 invisible scale-y-95"
            )}>
              {navLinks.find(l => l.label === 'Categories')?.children?.map((child) => (
                <Link 
                  key={child.label} 
                  to={child.href}
                  className="block px-6 py-3 text-[10px] tracking-[1.5px] uppercase font-medium text-black/70 hover:bg-[var(--brand-warm)] hover:text-black transition-all"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Logo */}
        <Link to="/" className="flex flex-col items-center group shrink-0 mx-4">
          <span className="font-display text-xl tracking-[4px] uppercase font-medium leading-none group-hover:text-[var(--brand-accent)] transition-colors">
            {BRAND.name.split(' ')[0]}
          </span>
          <span className="font-display text-xl tracking-[4px] uppercase font-medium leading-none mt-0.5 group-hover:text-[var(--brand-accent)] transition-colors">
            {BRAND.name.split(' ').slice(1).join(' ')}
          </span>
        </Link>

        {/* Desktop Nav Right */}
        <nav className="hidden lg:flex items-center gap-7 flex-1 justify-end">
          <div 
            className="relative group h-[70px] flex items-center"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="text-[10px] tracking-[2px] uppercase font-bold text-black/80 group-hover:text-[var(--brand-accent)] transition-all flex items-center gap-1.5">
              About <ChevronDown size={12} className={cn("transition-transform", activeDropdown === 'about' && "rotate-180")} />
            </button>
            <div className={cn(
              "absolute top-[70px] right-0 bg-white border border-[#e0d8cf] min-w-[200px] py-3 shadow-xl transition-all duration-300 transform origin-top",
              activeDropdown === 'about' ? "opacity-100 visible scale-y-100" : "opacity-0 invisible scale-y-95"
            )}>
              {navLinks.find(l => l.label === 'About')?.children?.map((child) => (
                <Link 
                  key={child.label} 
                  to={child.href}
                  className="block px-6 py-3 text-[10px] tracking-[1.5px] uppercase font-medium text-black/70 hover:bg-[var(--brand-warm)] hover:text-black transition-all"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.slice(-2).map((link) => (
            <Link 
              key={link.label} 
              to={link.href} 
              className={cn(
                "text-[10px] tracking-[2px] uppercase font-bold transition-all",
                link.label === 'Contact Us' 
                  ? "bg-black text-white px-6 py-3 rounded hover:bg-[var(--brand-accent)]" 
                  : "text-black/80 hover:text-[var(--brand-accent)]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <button className="p-1 hover:text-[var(--brand-accent)] transition-colors" aria-label="User account"><User size={18} /></button>
          </div>
        </nav>

        {/* Mobile Icons - No Search */}
        <div className="lg:hidden flex items-center gap-4">
          <button className="p-1 text-black hover:text-[var(--brand-accent)] transition-colors" aria-label="User account"><User size={20} /></button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "lg:hidden fixed inset-x-0 bottom-0 top-[70px] bg-white z-[999] overflow-y-auto transition-all duration-500 ease-in-out transform",
        isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      )}>
        <div className="flex flex-col p-8 gap-10">
          {mobileNavCategories.map((cat) => (
            <div key={cat.heading} className="flex flex-col gap-6">
              <h4 className="text-[10px] tracking-[3px] uppercase text-[var(--brand-accent)] font-bold border-b border-[#e0d8cf] pb-2">
                {cat.heading}
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {cat.links.map((link) => (
                  <Link 
                    key={link.label} 
                    to={link.href}
                    className="text-[13px] tracking-[2px] uppercase text-black font-semibold hover:text-[var(--brand-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          
          <div className="mt-4">
            <Link 
              to="#contact" 
              className="flex items-center justify-center bg-black text-white py-4 px-8 text-[12px] tracking-[3px] uppercase font-bold hover:bg-[var(--brand-accent)] transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
