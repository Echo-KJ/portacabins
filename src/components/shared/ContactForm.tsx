'use client';

import React, { useState } from 'react';
import SectionTag from './SectionTag';
import FadeUp from './FadeUp';
import { cn } from '@/src/lib/utils';

interface ContactFormProps {
  tag?: string;
  heading?: string;
  submitLabel?: string;
  successMessage?: string;
}

export default function ContactForm({
  tag = "Get in Touch",
  heading = "Contact Us",
  submitLabel = "Submit Enquiry",
  successMessage = "Thank you! We'll be in touch within 24 hours."
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    category: '',
    budget: '',
    nextStep: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id.replace('f', '').toLowerCase()]: value }));
  };

  if (submitted) {
    return (
      <section className="py-20 px-10 max-w-[900px] mx-auto text-center" id="contact">
        <FadeUp>
          <div className="text-[var(--brand-accent)] font-display text-2xl animate-in fade-in zoom-in duration-500">
            {successMessage}
          </div>
        </FadeUp>
      </section>
    );
  }

  return (
    <section className="py-20 px-10 max-w-[900px] mx-auto" id="contact">
      <SectionTag className="text-center">{tag}</SectionTag>
      <FadeUp>
        <h2 className="display text-center mb-12.5">{heading}</h2>
      </FadeUp>

      <FadeUp delay={0.2}>
        <form onSubmit={handleSubmit} className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fname" className="text-[10px] tracking-[2px] uppercase text-[var(--mid)] font-medium">Name *</label>
              <input 
                type="text" id="fname" placeholder="Your full name" required 
                className="border-b border-[var(--border)] bg-transparent py-3 text-sm focus:border-black outline-none transition-colors"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="femail" className="text-[10px] tracking-[2px] uppercase text-[var(--mid)] font-medium">Email *</label>
              <input 
                type="email" id="femail" placeholder="your@email.com" required 
                className="border-b border-[var(--border)] bg-transparent py-3 text-sm focus:border-black outline-none transition-colors"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fphone" className="text-[10px] tracking-[2px] uppercase text-[var(--mid)] font-medium">Phone Number</label>
              <input 
                type="tel" id="fphone" placeholder="+91 00000 00000" 
                className="border-b border-[var(--border)] bg-transparent py-3 text-sm focus:border-black outline-none transition-colors"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="flocation" className="text-[10px] tracking-[2px] uppercase text-[var(--mid)] font-medium">Project Location</label>
              <input 
                type="text" id="flocation" placeholder="City, State" 
                className="border-b border-[var(--border)] bg-transparent py-3 text-sm focus:border-black outline-none transition-colors"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fcategory" className="text-[10px] tracking-[2px] uppercase text-[var(--mid)] font-medium">Category</label>
              <select 
                id="fcategory" 
                className="border-b border-[var(--border)] bg-transparent py-3 text-sm focus:border-black outline-none transition-colors appearance-none cursor-pointer"
                onChange={handleChange}
              >
                <option value="">Choose a category</option>
                <option>Homes</option>
                <option>Cafes / Retail</option>
                <option>Hospitality</option>
                <option>Offices</option>
                <option>Architectural Designs</option>
                <option>Prefabs</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fbudget" className="text-[10px] tracking-[2px] uppercase text-[var(--mid)] font-medium">Budget</label>
              <select 
                id="fbudget" 
                className="border-b border-[var(--border)] bg-transparent py-3 text-sm focus:border-black outline-none transition-colors appearance-none cursor-pointer"
                onChange={handleChange}
              >
                <option value="">Select a range</option>
                <option>8 – 25 Lakhs</option>
                <option>26 – 50 Lakhs</option>
                <option>51 – 75 Lakhs</option>
                <option>76 Lakhs – 1 Cr</option>
                <option>1 Cr+</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fnext" className="text-[10px] tracking-[2px] uppercase text-[var(--mid)] font-medium">Next Step</label>
              <select 
                id="fnext" 
                className="border-b border-[var(--border)] bg-transparent py-3 text-sm focus:border-black outline-none transition-colors appearance-none cursor-pointer"
                onChange={handleChange}
              >
                <option value="">Choose an option</option>
                <option>Schedule a Call</option>
                <option>Visit the Head Office</option>
                <option>Visit Model Home</option>
              </select>
            </div>
            <div />
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label htmlFor="fmessage" className="text-[10px] tracking-[2px] uppercase text-[var(--mid)] font-medium">Tell Us More</label>
              <textarea 
                id="fmessage" 
                placeholder="Describe your project, requirements, or any questions you have..."
                className="border border-[var(--border)] bg-transparent p-3 text-sm focus:border-black outline-none transition-colors min-h-[100px] mt-1 resize-y"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full p-4 bg-black text-white text-xs tracking-[3px] uppercase hover:bg-[var(--accent)] transition-colors mt-2.5">
                {submitLabel}
              </button>
            </div>
          </div>
        </form>
      </FadeUp>
    </section>
  );
}
