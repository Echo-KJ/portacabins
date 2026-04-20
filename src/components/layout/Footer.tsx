import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '@/src/lib/constants';
import { Facebook, Instagram, Youtube, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0d0d] text-[#faf9f7] pt-[70px] pb-[30px] px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] pb-[50px] border-b border-white/10">
          <div className="footer-brand">
            <div className="font-display text-2xl tracking-[3px] uppercase font-medium mb-[22px]">
              {BRAND.name}
            </div>
            <p className="text-[13px] leading-[1.8] text-white/55">
              {BRAND.address.line1},<br />
              {BRAND.address.line2},<br />
              {BRAND.address.city}, {BRAND.address.state} – {BRAND.address.pin},<br />
              India
            </p>
            <div className="flex gap-3.5 mt-[22px]">
              <a href={BRAND.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#c9b99a] hover:text-[#c9b99a] transition-all">
                <Facebook size={16} />
              </a>
              <a href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#c9b99a] hover:text-[#c9b99a] transition-all">
                <Instagram size={16} />
              </a>
              <a href={BRAND.social.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#c9b99a] hover:text-[#c9b99a] transition-all">
                <Youtube size={16} />
              </a>
              <a href={BRAND.social.whatsapp} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#c9b99a] hover:text-[#c9b99a] transition-all">
                <Phone size={16} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="text-[10px] tracking-[3px] uppercase text-[#c9b99a] mb-5">Categories</h4>
            <ul className="space-y-[10px]">
              <li><Link href="/homes" className="text-[13px] text-white/55 hover:text-white transition-colors">Homes</Link></li>
              <li><Link href="/hospitality" className="text-[13px] text-white/55 hover:text-white transition-colors">Hospitality</Link></li>
              <li><Link href="/offices" className="text-[13px] text-white/55 hover:text-white transition-colors">Offices</Link></li>
              <li><Link href="/cafes" className="text-[13px] text-white/55 hover:text-white transition-colors">Cafes</Link></li>
              <li><Link href="/agriculture" className="text-[13px] text-white/55 hover:text-white transition-colors">Agriculture</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="text-[10px] tracking-[3px] uppercase text-[#c9b99a] mb-5">Company</h4>
            <ul className="space-y-[10px]">
              <li><Link href="/about" className="text-[13px] text-white/55 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/our-process" className="text-[13px] text-white/55 hover:text-white transition-colors">Our Process</Link></li>
              <li><Link href="/careers" className="text-[13px] text-white/55 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blogs" className="text-[13px] text-white/55 hover:text-white transition-colors">Blogs</Link></li>
              <li><Link href="/#faq" className="text-[13px] text-white/55 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="text-[10px] tracking-[3px] uppercase text-[#c9b99a] mb-5">Support</h4>
            <ul className="space-y-[10px]">
              <li><Link href="/contact" className="text-[13px] text-white/55 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/resale-and-rentals" className="text-[13px] text-white/55 hover:text-white transition-colors">Resale & Rentals</Link></li>
              <li><Link href="/developers-and-investors" className="text-[13px] text-white/55 hover:text-white transition-colors">Developers & Investors</Link></li>
              <li className="pt-2 text-[13px] text-white/55">
                Email: <a href={`mailto:${BRAND.email}`} className="hover:text-white">{BRAND.email}</a>
              </li>
              <li className="text-[13px] text-white/55">
                Phone: <a href={`tel:${BRAND.phone}`} className="hover:text-white">{BRAND.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-7 text-[11px] text-white/35 gap-3">
          <p>© {currentYear} {BRAND.name}. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
