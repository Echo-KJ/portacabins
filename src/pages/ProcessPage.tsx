import HeroSection from '../components/shared/HeroSection';
import StatStrip from '../components/shared/StatStrip';
import SectionTag from '../components/shared/SectionTag';
import FadeUp from '../components/shared/FadeUp';
import ContactForm from '../components/shared/ContactForm';
import FaqAccordion from '../components/shared/FaqAccordion';
import { BRAND } from '../lib/constants';

const processStats = [
  { number: '12–16', label: 'Weeks Average Delivery', icon: '⏱️' },
  { number: '200+', label: 'Projects Completed', icon: '🏠' },
  { number: '5', label: 'Simple Steps', icon: '🔢' },
  { number: '100%', label: 'Transparent Pricing', icon: '💰' },
];

const steps = [
  {
    num: "01",
    title: "We Listen First",
    duration: "Week 1",
    desc: "Every great project starts with a conversation. We take time to understand your vision, your site, your budget and your timeline before suggesting anything. No generic packages, no pressure.",
    features: [
      "Free consultation — online call or at our office",
      "Site visit arranged within 7 days of enquiry",
      "Budget and feasibility assessment included",
      "No commitment required at this stage"
    ],
    image: "/assets/images/main-banner-1.png"
  },
  {
    num: "02",
    title: "Your Vision on Paper",
    duration: "Week 2–3",
    desc: "Our architecture team creates detailed floor plans, 3D renders and a comprehensive quote based on your exact requirements. You see exactly what you are getting before paying a single rupee.",
    features: [
      "Custom floor plan and layout design",
      "3D renders and material samples provided",
      "Detailed itemized quote — no hidden costs",
      "Up to 3 design revisions included"
    ],
    image: "/assets/images/main-banner-2.png",
    reverse: true
  },
  {
    num: "03",
    title: "Built in Our Factory",
    duration: "Week 4–12",
    desc: "Once design is approved and project confirmed, your structure enters our factory. Every component is built under controlled conditions with strict quality checks at every stage.",
    features: [
      "MS steel frame fabrication",
      "Rock wool insulation, cladding and interior fit-out",
      "Electrical pre-wiring and plumbing provision",
      "Quality inspection at every build milestone"
    ],
    image: "/assets/images/someday1_f5507ea2-48a4-4637-994f-34660658ef70.jpg"
  },
  {
    num: "04",
    title: "Delivered to Your Site",
    duration: "Week 13–14",
    desc: "Your completed structure or modular components are loaded and transported to your site on standard flatbed trucks. We coordinate all logistics and keep you updated throughout the journey.",
    features: [
      "Pan India delivery including remote locations",
      "Full logistics coordination by our team",
      "Modular transport for multi-unit projects",
      "Real-time delivery tracking provided"
    ],
    image: "/assets/images/main-banner-4.png",
    reverse: true
  },
  {
    num: "05",
    title: "Move In Ready",
    duration: "Week 15–16",
    desc: "Our installation crew sets up your structure on-site, makes all connections and completes final finishes. We don't leave until everything is perfect and you are completely satisfied.",
    features: [
      "Full installation by trained STC crew",
      "All systems tested and commissioned on-site",
      "Walkthrough and handover documentation provided",
      "5-year structural warranty from handover date"
    ],
    image: "/assets/images/main-banner-5.png"
  }
];

const processFaqs = [
  {
    question: "Do I need to pay anything for the initial consultation?",
    answer: "No. The first consultation — whether online or at our office — is completely free. We also arrange a site visit at no charge. You only pay once you approve the design and confirm the project."
  },
  {
    question: "Can I make changes after the design is approved?",
    answer: "Minor changes can be accommodated before factory production begins. Once production starts, structural changes may affect cost and timeline. We encourage you to finalise all requirements during the design phase to avoid any delays."
  },
  {
    question: "What happens if there is a delay in my project?",
    answer: "We provide a detailed project schedule at the time of order confirmation. If any delay occurs on our side, we communicate immediately and provide a revised schedule. Delays caused by client-side decisions — such as late approvals or site readiness — are handled case by case."
  },
  {
    question: "Is site preparation my responsibility?",
    answer: "Yes — site preparation including levelling, access road and basic foundation pad is the client's responsibility. Our team will advise on exact site requirements during the consultation and site visit stage."
  },
  {
    question: "Can I visit the factory during my project build?",
    answer: "Absolutely. We encourage factory visits during the production phase. You can see your unit being built, inspect quality first-hand and meet the team. Factory visits are arranged by appointment."
  },
  {
    question: "What warranty do you provide and what does it cover?",
    answer: `Every ${BRAND.shortName} structure comes with a 5-year structural warranty covering the steel frame, roof, walls and floor structure. All fittings, fixtures, electrical and plumbing components are covered for 1 year under normal use conditions.`
  }
];

export default function ProcessPage() {
  return (
    <>
      <HeroSection 
        tag="HOW WE WORK"
        title="From Idea to Installation"
        description="A transparent, step-by-step process designed to take your project from first conversation to final handover — in as little as 12 to 16 weeks."
        image="/assets/images/main-banner-1.png"
        btn1Label="See the Steps"
        btn1Href="#steps"
      />
      <StatStrip stats={processStats} className="bg-black text-white border-none py-10" />

      {/* Overview */}
      <section className="py-24 px-[7%] bg-[#c9b99a]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeUp>
            <SectionTag className="text-black/60">THE STC WAY</SectionTag>
            <div className="w-12 h-0.5 bg-[var(--accent)] mb-6" />
            <h2 className="display text-5xl leading-[1.1] mb-7.5 text-black">A Process BuiltAround You</h2>
            <div className="space-y-5 text-[var(--mid)] leading-relaxed mb-10 text-black/70">
              <p>Most construction projects go over budget, over time and under expectations. We built our process specifically to eliminate all three problems.</p>
              <p>Every STC project follows the same 5-step process — designed for complete transparency, zero surprises and a finished space that matches exactly what was promised on day one.</p>
              <p>From your first call to the moment you walk through the door — you always know what is happening, when it is happening and what it will cost.</p>
            </div>
            <ul className="space-y-3 mb-10">
              {["Free consultation — no commitment required", "Fixed quote — price does not change after approval", "Factory-built under controlled conditions", "5-year structural warranty from handover"].map(item => (
                <li key={item} className="flex items-center gap-3 text-black font-medium">
                  <span className="text-[var(--accent)] font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-dark">Book a Free Consultation</a>
          </FadeUp>
          <div className="relative">
            <FadeUp delay={0.2}>
              <img src="/assets/images/experience_it_image.jpg" alt="Factory process overview" className="w-full h-auto object-cover rounded shadow-lg" />
              <div className="absolute -bottom-7.5 -left-7.5 bg-white p-7.5 shadow-xl border-l-4 border-[var(--accent)]">
                <div className="text-[var(--accent)] font-display text-4xl leading-none mb-1">₹0</div>
                <div className="uppercase text-[12px] tracking-[2px] text-[var(--mid)] font-medium">Consultation Fee</div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-[7%] max-w-[1400px] mx-auto" id="steps">
        <div className="text-center mb-15">
          <SectionTag>THE PROCESS</SectionTag>
          <h2 className="display text-4xl">5 Steps to Your Perfect Space</h2>
        </div>

        {steps.map((step, idx) => (
          <FadeUp key={step.num}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20 border-b border-[var(--border)] last:border-none ${step.reverse ? 'lg:flex-row-reverse' : ''}`}>
               <div className={step.reverse ? 'lg:order-2' : ''}>
                <div className="font-display text-[96px] text-[var(--border)] leading-none mb-5">{step.num}</div>
                <div className="text-[var(--brand-accent)] mb-4 tracking-[2px] font-display text-sm uppercase">STEP {step.num}</div>
                <h3 className="font-display text-4xl mb-6">{step.title}</h3>
                <div className="inline-block bg-black text-white px-4 py-2 text-[11px] tracking-[1.5px] rounded-full uppercase mb-6">{step.duration}</div>
                <p className="text-[var(--mid)] leading-relaxed mb-8">{step.desc}</p>
                <ul className="space-y-3 mb-8">
                  {step.features.map(f => (
                    <li key={f} className="flex gap-4 text-[var(--mid)] text-sm">
                      <span className="text-[var(--accent)] font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                {step.num === "01" && <a href="#contact" className="btn btn-outline">Book a Consultation</a>}
              </div>
              <div className={step.reverse ? 'lg:order-1' : ''}>
                 <img src={step.image} alt={step.title} className="w-full aspect-[4/3] object-cover rounded shadow-md" />
              </div>
            </div>
          </FadeUp>
        ))}
      </section>

      {/* Timeline Section */}
      <section className="bg-black text-white py-24 px-[7%] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <SectionTag className="text-[var(--brand-sand)]">PROJECT TIMELINE</SectionTag>
          <h2 className="display text-white text-4xl mt-4 mb-15">16 Weeks. Start to Finish.</h2>
          
          <div className="relative mt-20 pb-10">
            {/* Desktop Horizontal Line */}
            <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-0.5 bg-[var(--brand-sand)] opacity-30" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">
              {[
                { week: "Week 1", label: "Consultation & Site Visit" },
                { week: "Week 2–3", label: "Design & Quote Approval" },
                { week: "Week 4", label: "Factory Production Begins", dotColor: "var(--accent)" },
                { week: "Week 12", label: "Factory Build Complete", dotColor: "var(--accent)" },
                { week: "Week 13–14", label: "Delivery to Site" },
                { week: "Week 16", label: "Installation & Handover", dotColor: "white" }
              ].map((p, idx) => (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="text-[10px] tracking-[2px] text-white/60 mb-3.5 uppercase">{p.week}</div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[var(--brand-sand)] mb-3.5 relative z-10" style={p.dotColor ? { background: p.dotColor } : {}} />
                    <div className="text-[12px] leading-snug" dangerouslySetInnerHTML={{ __html: p.label.replace(' & ', ' &<br/>') }} />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
          <p className="text-center text-[10px] text-white/30 mt-15">Timeline is indicative. Actual schedule depends on project complexity, customization and site location.</p>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-24 px-[7%] bg-[var(--brand-warm)]">
        <div className="max-w-[1400px] mx-auto text-center">
          <SectionTag>WHAT TO EXPECT</SectionTag>
          <FadeUp>
            <h2 className="display text-4xl mb-4">No Surprises. Ever.</h2>
            <p className="text-[var(--mid)] text-lg mb-15">Three guarantees we make on every single project.</p>
          </FadeUp>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-15">
            {[
              { num: "01", title: "Fixed Quote, Fixed Cost", desc: "Once your quote is approved the price does not change. No surprise bills mid-project. What we quote is what you pay — guaranteed in writing." },
              { num: "02", title: "Weekly Progress Reports", desc: "You receive a factory build update every week with photos of your unit in production. You always know exactly what stage your project is at — no chasing required." },
              { num: "03", title: "5-Year Structural Warranty", desc: `Every ${BRAND.shortName} structure carries a 5-year structural warranty from the date of handover. One year on all fittings and fixtures. We stand behind everything we build.` }
            ].map((g, idx) => (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="bg-white p-12 text-left h-full flex flex-col shadow-sm border border-black/5 hover:shadow-md transition-shadow">
                  <div className="font-display text-[64px] text-[var(--brand-sand)] leading-none mb-5">{g.num}</div>
                  <h3 className="font-display text-2xl mb-5 leading-tight" dangerouslySetInnerHTML={{ __html: g.title.replace(', ', ',<br/>') }} />
                  <p className="text-[var(--mid)] text-sm leading-relaxed">{g.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion items={processFaqs} heading="Frequently Asked Questions" tag="GOT QUESTIONS?" />
      <ContactForm />
    </>
  );
}
