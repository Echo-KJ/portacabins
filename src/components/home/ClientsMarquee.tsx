import FadeUp from '@/src/components/shared/FadeUp';
import SectionTag from '@/src/components/shared/SectionTag';

const clients = [
  '/assets/images/Prestige_Group.png',
  '/assets/images/10.png',
  '/assets/images/2.png',
  '/assets/images/7.png',
  '/assets/images/6_f5a17b83-9666-4bbe-8a46-82791c1779a3.png',
  '/assets/images/4.png',
  '/assets/images/8.png',
  '/assets/images/12.png',
  '/assets/images/1_77cd2a44-ee68-49a5-9601-ca0effc46bdf.png',
  '/assets/images/3.png',
  '/assets/images/5_44125f69-b5ef-4992-ba38-b67a02b6c7a2.png',
  '/assets/images/11.png',
];

export default function ClientsMarquee() {
  return (
    <section className="py-[70px] px-10 overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto">
        <SectionTag className="text-center">Trusted By</SectionTag>
        <FadeUp>
          <h2 className="display text-center mb-10">Our Happy Clientele</h2>
        </FadeUp>
        
        <div className="relative overflow-hidden group">
          <div className="flex gap-[50px] items-center w-max animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((src, idx) => (
              <img 
                key={idx}
                src={src} 
                alt="Client logo" 
                className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all flex-shrink-0"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a 
            href="https://drive.google.com/file/d/1KvV0qU9aBOfr-CxrUa8whgXPBHT-bxeO/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Download Brochure
          </a>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
