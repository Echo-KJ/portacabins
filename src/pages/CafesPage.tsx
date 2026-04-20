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

const cafeStats = [
  { number: '200+', label: 'Projects Completed', icon: '🏠' },
  { number: '12-16 Wks', label: 'Average Build Time', icon: '⏱️' },
  { number: '100%', label: 'Brandable', icon: '⚙️' },
  { number: 'Pan India', label: 'Delivery & Installation', icon: '🚚' },
];

const cafeFeatures = [
  "Instagram-worthy exterior design as standard",
  "Fully equipped kitchen and service counter",
  "Relocatable — take your café to new locations",
  "Brandable interior and exterior finishes"
];

const cafeProducts = [
  {
    id: 'caf-1',
    name: 'Compact Kiosk',
    category: 'Kiosk Units',
    description: 'Perfect for takeaways, coffee spots or juice bars in high-footfall areas.',
    specs: ['2–4 Staff', 'Counter Service'],
    price: '₹2,50,000',
    image: '/assets/images/cafes/products/placeholder.jpg'
  },
  {
    id: 'caf-2',
    name: 'Small Café Cabin',
    category: 'Small Café',
    description: 'Boutique café setup with indoor seating and full kitchen provision.',
    specs: ['10–15 capacity', 'A/C · Kitchen'],
    price: '₹7,00,000',
    badge: 'BESTSELLER',
    image: '/assets/images/cafes/products/placeholder.jpg'
  },
  {
    id: 'caf-3',
    name: 'Full Café Unit',
    category: 'Full Café',
    description: 'Expansive café with large glass windows and outdoor deck provision.',
    specs: ['25–30 capacity', 'Premium Decor'],
    price: '₹15,00,000',
    image: '/assets/images/cafes/products/placeholder.jpg'
  }
];

const cafeFaqs = [
  {
    question: "Can the café unit be installed anywhere — malls, rooftops, parks?",
    answer: "Yes. Our café units can be installed on flat surfaces including parking areas, rooftops, parks and open grounds."
  },
  {
    question: "Does the unit include the kitchen equipment?",
    answer: "The unit includes kitchen infrastructure — platform, plumbing provision, electrical points and exhaust provision. Equipment is typically client-supplied."
  }
];

export default function CafesPage() {
  return (
    <>
      <HeroSection 
        tag="PREFAB CAFÉ & RETAIL SPACES"
        title="Your Café, Built to Stand Out"
        description="Unique prefab café cabins and modular retail spaces — fully brandable, Instagram-worthy and delivered anywhere in India in 12–16 weeks."
        image="/assets/images/main-banner-1.png"
        btn1Label="Explore Cafés"
      />
      <StatStrip stats={cafeStats} />
      <DifferenceSection 
        tag="THE STC DIFFERENCE"
        title="Built Different. Sold More."
        description="Your café needs to stop people in their tracks. Our prefab café cabins are designed to be visually striking and fully functional."
        features={cafeFeatures}
        image="/assets/images/categories/CAFE.png"
      />
      <ProductGrid 
        products={cafeProducts} 
        categories={['Kiosk Units', 'Small Café', 'Full Café', 'Drive-Through', 'Rooftop Units', 'Custom Builds']}
      />
      <ProcessSteps />
      <InteriorGallery tag="INSIDE THE CAFÉ" title="Spaces That Sell" items={[{ title: "Seating Area", image: "/assets/images/categories/CAFE.png" }, { title: "Service Counter", image: "/assets/images/categories/CAFE.png" }, { title: "Kitchen Space", image: "/assets/images/categories/CAFE.png" }]} />
      <ProjectsShowcase title="Cafés We've Built" projects={[{ title: "Container Café — Bangalore", badge: "Full Café", year: "2023", image: "/assets/images/someday2.jpg" }]} />
      <ContactForm />
      <FaqAccordion items={cafeFaqs} />
    </>
  );
}
