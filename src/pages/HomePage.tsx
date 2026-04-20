import HeroSlider from '../components/home/HeroSlider';
import ExperienceSection from '../components/home/ExperienceSection';
import CategoriesGrid from '../components/home/CategoriesGrid';
import ProjectsCta from '../components/home/ProjectsCta';
import ServicesSection from '../components/home/ServicesSection';
import WhyModular from '../components/home/WhyModular';
import AgricultureCta from '../components/home/AgricultureCta';
import SomedaySection from '../components/home/SomedaySection';
import ClientsMarquee from '../components/home/ClientsMarquee';
import VideoSection from '../components/home/VideoSection';
import LocationSection from '../components/home/LocationSection';
import ContactForm from '../components/shared/ContactForm';
import FaqAccordion from '../components/shared/FaqAccordion';
import { BRAND } from '../lib/constants';

const homeFaqs = [
  {
    question: "What is modular construction, and how is it different from traditional construction?",
    answer: "Modular construction involves building structures in a factory setting in modules, which are then transported to the site for assembly. This process is faster, more controlled, and minimizes on-site disruptions compared to traditional construction."
  },
  {
    question: `What materials are used in ${BRAND.name}'s modular buildings?`,
    answer: "We use high-quality materials like mild steel frames, Corten steel containers, rock wool for insulation and drywalls for internal partitions. These materials ensure durability, thermal efficiency, and weather resistance."
  },
  {
    question: `Are ${BRAND.name} structures customisable to my specific requirements?`,
    answer: "Yes, our modular homes and offices are fully customizable. You can choose layouts, designs, finishes, and even integrate sustainable features like solar panels."
  },
  {
    question: "How quickly can you deliver a modular home or office?",
    answer: "We can deliver a modular home or office in as little as 12–16 weeks, depending on the complexity and customization required."
  },
  {
    question: "Is modular construction more expensive than traditional building?",
    answer: "Modular construction can be more cost-effective than traditional construction due to reduced labor costs, faster delivery timelines, and factory-controlled quality. You also gain predictability in both budget and schedule, which reduces costly overruns."
  },
  {
    question: "Can modular structures be relocated?",
    answer: "Yes! One of the key advantages of modular structures is their relocatability. Our standard modular units can be disassembled and moved to a new location, making them ideal for temporary installations, business expansions, or changing land requirements."
  }
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ExperienceSection />
      <CategoriesGrid />
      <ProjectsCta />
      <ServicesSection />
      <WhyModular />
      <AgricultureCta />
      <SomedaySection />
      <ClientsMarquee />
      <VideoSection />
      <LocationSection />
      <ContactForm />
      <FaqAccordion items={homeFaqs} isFullWidth={true} />
    </>
  );
}
