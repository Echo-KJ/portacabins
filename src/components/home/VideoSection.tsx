import FadeUp from '@/src/components/shared/FadeUp';
import SectionTag from '@/src/components/shared/SectionTag';
import { BRAND } from '@/src/lib/constants';

const videos = [
  { 
    title: 'Precision Build in Telangana', 
    thumb: '/assets/images/main-banner-1.png',
    link: BRAND.social.youtube
  },
  { 
    title: 'The Future of Modular Homes', 
    thumb: '/assets/images/main-banner-2.png',
    link: BRAND.social.youtube
  },
];

export default function VideoSection() {
  return (
    <section className="py-20 px-10 bg-[var(--warm)]">
      <div className="max-w-[1400px] mx-auto">
        <SectionTag className="text-center">Watch & Learn</SectionTag>
        <FadeUp>
          <h2 className="display text-center">See It In Action</h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {videos.map((video, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <a href={video.link} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="aspect-video bg-black overflow-hidden relative">
                  <img 
                    src={video.thumb} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition duration-400 opacity-80 group-hover:opacity-60 group-hover:scale-[1.03]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://picsum.photos/seed/video${idx}/1280/720`;
                    }}
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 flex items-center justify-center text-black text-lg pointer-events-none">
                    ▶
                  </div>
                </div>
                <div className="bg-white p-4 md:p-5 text-sm tracking-[1.5px] uppercase text-[var(--mid)]">
                  {video.title}
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
