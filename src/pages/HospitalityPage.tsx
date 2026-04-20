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

const hospitalityStats = [
  { number: '200+', label: 'Units Delivered', icon: '🏨' },
  { number: '16 Weeks', label: 'Turnaround Time', icon: '⏱️' },
  { number: 'Resort-Grade', label: 'Quality Standards', icon: '✨' },
  { number: 'ROI Focused', label: 'Design Strategy', icon: '💹' },
];

const hospitalityProducts = [
  {
    id: 'hosp-1',
    name: 'Resort Suite',
    category: 'Resort Units',
    description: 'Luxury guest suite with private deck and premium washroom fit-outs.',
    specs: ['1 BHK', 'Luxury Finish'],
    price: 'Starting from ₹12,00,000',
    image: '/assets/images/hospitality/hero/hero.jpg'
  },
  {
    id: 'hosp-2',
    name: 'Glamping Pod',
    category: 'Glamping',
    description: 'Unique geometric design for high-impact retreat centers and eco-resorts.',
    specs: ['Studio', 'Rapid Setup'],
    price: 'Starting from ₹6,00,000',
    badge: 'NEW',
    image: '/assets/images/hospitality/hero/hero.jpg'
  }
];

export default function HospitalityPage() {
  return (
    <>
      <HeroSection 
        tag="HOSPITALITY & RESORT SOLUTIONS"
        title="Luxury Stays, Built with Speed"
        description="Scalable, premium lodging solutions for resorts and hotels. High-end finishes, rapid deployment, and maximum reliability."
        image="/assets/images/hospitality/hero/hero.jpg"
        btn1Label="Explore Models"
      />
      <StatStrip stats={hospitalityStats} />
      <DifferenceSection 
        tag="THE STC ADVANTAGE"
        title="Built for Return on investment."
        description="We understand the hospitality business. Our modular units are designed for faster occupancy, higher ADR, and lower maintenance costs."
        features={["Resort-grade acoustic and thermal insulation", "Turnkey interior decor and furniture packages", "Relocatable structures for dynamic land use", "Plug-and-play mechanical and plumbing systems"]}
        image="/assets/images/experience_it_image.jpg"
      />
      <ProductGrid 
        products={hospitalityProducts} 
        categories={['Resort Units', 'Glamping', 'Clubhouses', 'Staff Housing', 'Wellness Centers']}
      />
      <ProcessSteps />
      <InteriorGallery items={[{ title: "Resort Suite", image: "/assets/images/someday2.jpg" }, { title: "Luxury Bath", image: "/assets/images/someday3.jpg" }, { title: "Private Deck", image: "/assets/images/someday4_bccb7ded-ebdf-409b-a1e1-f401e1fdcb68.jpg" }]} />
      <ProjectsShowcase title="Hospitality Projects" projects={[{ title: "Eco Resort — Coorg", badge: "12 Units", year: "2023", image: "/assets/images/IMG_20230607_120141.jpg" }]} />
      <ContactForm heading="Plan Your Project" />
      <FaqAccordion items={[{ question: "What is the typical lifespan of a modular resort unit?", answer: "Designed for permanent use, our units have a lifespan of 25+ years with standard maintenance." }]} />
    </>
  );
}
