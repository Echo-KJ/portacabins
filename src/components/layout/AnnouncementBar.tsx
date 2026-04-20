import { BRAND } from '@/src/lib/constants';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#0d0d0d] text-white text-center py-2.5 px-2.5 text-[10px] tracking-[2px] uppercase z-[1100] relative">
      Built to Last. Delivered Fast. | {BRAND.phone}
    </div>
  );
}
