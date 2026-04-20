import HeroSection from '../components/shared/HeroSection';
import StatStrip from '../components/shared/StatStrip';
import DifferenceSection from '../components/shared/DifferenceSection';
import ProductGrid from '../components/homes/ProductGrid';
import ProcessSteps from '../components/shared/ProcessSteps';
import InteriorGallery from '../components/shared/InteriorGallery';
import ProjectsShowcase from '../components/shared/ProjectsShowcase';
import ContactForm from '../components/shared/ContactForm';
import FaqAccordion from '../components/shared/FaqAccordion';
import { officeProducts, officeFaqs } from '../data/offices-products';

const officeStats = [
  { number: '200+', label: 'Projects Completed', icon: '🏠' },
  { number: '12-16 Wks', label: 'Average Build Time', icon: '⏱️' },
  { number: '100%', label: 'Customizable', icon: '⚙️' },
  { number: 'Pan India', label: 'Delivery & Installation', icon: '🚚' },
];

const officeFeatures = [
  "Professional-grade interiors and finishes",
  "Fully air-conditioned and power-ready",
  "Relocatable when your business moves",
  "Solar-ready and energy-efficient design"
];

const officeGallery = [
  { title: "Executive Cabin", image: "/assets/images/experience_it_image.jpg" },
  { title: "Meeting Room", image: "/assets/images/experience_it_image.jpg" },
  { title: "Co-Working Area", image: "/assets/images/experience_it_image.jpg" },
];

const officeProjects = [
  { title: "Executive Office — Bangalore", badge: "Single Cabin", year: "2023", image: "/assets/images/projects_landing_page_image.jpg" },
  { title: "Co-Working Hub — Hyderabad", badge: "Co-Working", year: "2024", image: "/assets/images/projects_landing_page_image.jpg" },
  { title: "Site Office — Pune", badge: "Double Cabin", year: "2022", image: "/assets/images/projects_landing_page_image.jpg" },
];

export default function OfficesPage() {
  return (
    <>
      <HeroSection 
        tag="OFFICE CABINS & WORKSPACES"
        title="Your Office, Built Smarter"
        description="Modular office cabins and prefab workspaces — fully customizable, fast to install and ready to work in. Delivered anywhere in India in 12–16 weeks."
        image="/assets/images/main-banner-1.png"
        btn1Label="Explore Offices"
      />
      <StatStrip stats={officeStats} />
      <DifferenceSection 
        tag="THE STC DIFFERENCE"
        title="Work Smarter. Look Better."
        description="Traditional office construction takes months and costs crores with constant delays. Our modular office cabins are factory-built, installed in days and designed to impress clients."
        features={officeFeatures}
        image="/assets/images/experience_it_image.jpg"
      />
      <ProductGrid 
        products={officeProducts} 
        categories={['Single Cabin', 'Double Cabin', 'Meeting Rooms', 'Co-Working Units', 'Reception Units', 'Custom Offices']}
      />
      <ProcessSteps />
      <InteriorGallery tag="INSIDE THE OFFICE" title="Professional Workspaces" items={officeGallery} />
      <ProjectsShowcase title="Offices We've Built" description="50+ office cabins delivered across India" projects={officeProjects} />
      <ContactForm />
      <FaqAccordion items={officeFaqs} />
    </>
  );
}
