import React from 'react';
import FadeUp from '../shared/FadeUp';
import SectionTag from '../shared/SectionTag';
import { BRAND } from '@/src/lib/constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="py-24 px-[7%] bg-[var(--brand-warm)] overflow-hidden" id="location">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <SectionTag>FIND US</SectionTag>
          <FadeUp>
            <h2 className="display text-4xl mt-4">Head Office</h2>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
            {/* Address Details */}
            <div className="w-full md:w-2/5 p-10 lg:p-16 flex flex-col justify-center bg-black text-white">
              <h3 className="font-display text-3xl mb-8 leading-tight">
                Visit Our <br /> 
                <span className="text-[var(--brand-accent)]">Headquarters</span>
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-[2.5px] uppercase text-white/40 font-bold mb-1.5">Official Address</h4>
                    <p className="text-sm leading-relaxed font-light">
                      {BRAND.address.line1},<br />
                      {BRAND.address.line2},<br />
                      {BRAND.address.city}, {BRAND.address.state} – {BRAND.address.pin}
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-[2.5px] uppercase text-white/40 font-bold mb-1.5">Contact Line</h4>
                    <p className="text-sm font-light">{BRAND.phone}</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-[2.5px] uppercase text-white/40 font-bold mb-1.5">Email Support</h4>
                    <p className="text-sm font-light">{BRAND.email}</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-[2.5px] uppercase text-white/40 font-bold mb-1.5">Visit Hours</h4>
                    <p className="text-sm font-light">Mon – Sat: 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${BRAND.address.line1}, ${BRAND.address.line2}, ${BRAND.address.city}`)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-white w-full text-center"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full md:w-3/5 h-[400px] md:h-auto border-l border-white/10">
              <iframe
                title="Sai Teja Construction's Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15229.47355677028!2d80.68652!3d17.59374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a34237d046f1e81%3A0xc3f14798c8c6f2a2!2sOld%20Palvancha%2C%20Telangana%20507115!5e0!3m2!1sen!2sin!4v1713567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
