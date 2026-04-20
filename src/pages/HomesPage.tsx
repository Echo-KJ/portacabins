import HeroSection from '../components/shared/HeroSection';
import StatStrip from '../components/shared/StatStrip';
import DifferenceSection from '../components/shared/DifferenceSection';
import ProductGrid from '../components/homes/ProductGrid';
import ProcessSteps from '../components/shared/ProcessSteps';
import InteriorGallery from '../components/shared/InteriorGallery';
import ProjectsShowcase from '../components/shared/ProjectsShowcase';
import TestimonialSection from '../components/shared/TestimonialSection';
import ContactForm from '../components/shared/ContactForm';
import FaqAccordion from '../components/shared/FaqAccordion';
import { homesProducts, homesFaqs } from '../data/homes-products';

const homesStats = [
  { number: '200+', label: 'Delivered', icon: '🏠' },
  { number: '16 Weeks', label: 'Build Time', icon: '⏱️' },
  { number: '100%', label: 'Custom', icon: '⚙️' },
  { number: 'Pan India', label: 'Delivery', icon: '🚚' },
];

const homesFeatures = [
  "Zero construction nightmares. Factory-built precision ensures flawless finishing.",
  "Stay cool in summer and warm in winter without sky-high AC bills.",
  "Engineered for permanence. Built with rust-proof, commercial-grade steel.",
  "Completely future-proof. Pre-wired for easy off-grid solar integration."
];

const homesGallery = [
  { title: "Living Area", image: "/assets/images/someday2.jpg" },
  { title: "Bedroom", image: "/assets/images/someday3.jpg" },
  { title: "Kitchen", image: "/assets/images/someday4_bccb7ded-ebdf-409b-a1e1-f401e1fdcb68.jpg" },
];

const homesProjects = [
  { title: "Weekend Cabin — Coorg", badge: "1 BHK", year: "2023", image: "/assets/images/someday1_f5507ea2-48a4-4637-994f-34660658ef70.jpg" },
  { title: "Luxury Villa — Goa", badge: "2 BHK Luxury", year: "2024", image: "/assets/images/IMG_20230607_120141.jpg" },
  { title: "Farm Retreat — Mysuru", badge: "Studio Cabin", year: "2022", image: "/assets/images/experience_it_image.jpg" },
];

const homesTestimonials = [
  { 
    name: "Rajesh M.", location: "Coorg", product: "Weekend Retreat",
    quote: "We were honestly worried a prefab home would feel flimsy or hot. This feels more solid than our brick home in the city, and the insulation keeps it perfectly cool even during the Coorg summer."
  },
  { 
    name: "Priya & Suresh K.", location: "Bangalore", product: "1 BHK Home",
    quote: "Traditional builders quoted us 18 months; STC handed over the keys in exactly 14 weeks. Zero cost overruns and zero stress. It was the best decision we made for our farm."
  },
  { 
    name: "Anand T.", location: "Mysuru", product: "Studio Cabin",
    quote: "We checked several builders, but STC’s finishing is on another level. It survived the heavy monsoon without a single leak or issue. Truly a premium build from start to finish."
  },
];

export default function HomesPage() {
  return (
    <>
      <HeroSection 
        tag="PREFAB HOMES & PORTABLE CABINS"
        title="Handover in 16 Weeks. Zero Construction Stress."
        description="Skip the contractors, delays, and hidden costs. We build premium, weather-proof modular homes off-site and install them on your land—flawlessly finished and guaranteed to last."
        image="/assets/images/main-banner-1.png"
      />
      <StatStrip stats={homesStats} />
      <DifferenceSection 
        tag="The STC Difference"
        title="No Delays. No Hidden Costs. Just Premium Living."
        features={homesFeatures}
        image="/assets/images/hero/Interior Details.png"
      />
      <ProductGrid 
        products={homesProducts} 
        categories={['Studio Cabins', '1 BHK Homes', '2 BHK Homes', 'Weekend Retreats', 'Office Cabins', 'Custom Builds']}
      />
      <ProcessSteps />
      <InteriorGallery items={homesGallery} />
      <ProjectsShowcase 
        title="Homes We've Built"
        description="200+ homes delivered across India"
        projects={homesProjects}
      />
      <TestimonialSection testimonials={homesTestimonials} />
      <ContactForm 
        heading="Request Your Detailed Cost Estimate"
        submitLabel="Get My Custom Quote"
        successMessage="Request received! We will call you within 24 hours to discuss your land and share a detailed pricing estimate."
      />
      <FaqAccordion items={homesFaqs} />
    </>
  );
}
