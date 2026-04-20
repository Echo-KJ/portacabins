import SectionTag from '../components/shared/SectionTag';
import FadeUp from '../components/shared/FadeUp';
import { BRAND } from '../lib/constants';

const team = [
  { name: "Gaurav Chauraria", role: "Managing Director" },
  { name: "Shiv Choudhari", role: "Director of Finance" },
  { name: "Arun Choudhari", role: "Chairman" },
  { name: "Karan Nadig", role: "Director of Architecture" },
  { name: "John Kunnath", role: "Director of Sales & Marketing" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center bg-black overflow-hidden">
         <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/about/hero/hero.jpg" 
            alt="About STC" 
            className="w-full h-full object-cover opacity-60" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://picsum.photos/seed/about/1920/1080';
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
        </div>
        <FadeUp className="relative z-10 text-center">
          <h1 className="display text-white text-5xl md:text-6xl uppercase tracking-wider">About Us</h1>
        </FadeUp>
      </section>

      <section className="py-20 px-10 bg-white">
        <div className="max-w-[900px] mx-auto">
          <FadeUp>
            <h2 className="display text-center mb-10">Our Story</h2>
            <div className="space-y-8 text-lg leading-relaxed text-[var(--mid)]">
              <p>
                Founded in 2020, {BRAND.name} is reimagining real estate through Efficient Luxury in modular construction. 
                Specializing in architectural design, factory-based construction, and real estate consultancy, we offer 
                a complete solution for investors seeking sophistication and precision.
              </p>
              
              <blockquote className="font-display text-2xl italic font-light text-black py-12 px-8 border-l-4 border-[var(--accent)] bg-[var(--brand-warm)]/50 my-12">
                "To enhance quality of life through technology-driven processes and thoughtfully curated sustainable real estate experiences."
              </blockquote>

              <p>
                Our fully integrated process covers every stage of construction — from concept and design to manufacturing, 
                sales, and installation — under one roof. This streamlined approach allows us to craft high-quality, 
                custom structures that meet each client's unique needs, with the added benefit of portability.
              </p>
              
              <p>
                Our talented team of designers, architects, and builders infuses each project with passion and innovation. 
                From chic tiny homes to stylish container cafés, site offices, or resort cabins, {BRAND.name} delivers 
                Efficient Luxury — bringing high-end, portable living spaces to life with precision and thoughtful design.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-10 bg-[var(--brand-warm)]" id="team">
        <div className="max-w-[1200px] mx-auto">
          <FadeUp>
            <h2 className="display text-center mb-15">Meet Our Team</h2>
          </FadeUp>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, idx) => (
              <FadeUp key={idx} delay={idx * 0.1} className="text-center group">
                <div className="aspect-square bg-white rounded-xl overflow-hidden mb-5 shadow-sm group-hover:shadow-md transition-shadow">
                  <img 
                    src={`/assets/images/about/team/${member.name.split(' ')[0].toLowerCase()}.jpg`} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=200`;
                    }}
                  />
                </div>
                <h4 className="font-display text-lg font-medium text-black mb-1">{member.name}</h4>
                <p className="text-xs tracking-[1px] uppercase text-[var(--mid)]">{member.role}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Office Collage Placeholder */}
      <section className="w-full bg-[#f5f5f5] overflow-hidden">
        <FadeUp>
          <img 
            src="/assets/images/about/office/collage.jpg" 
            alt="STC Office" 
            className="w-full max-h-[500px] object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://picsum.photos/seed/office-collage/1920/600';
            }}
          />
        </FadeUp>
      </section>
    </>
  );
}
