'use client';

import { Announcements } from '@/widgets/announcements';

export default function AnnouncementsPage() {
  return (
    <div className='p-8 pb-20 sm:p-20 bg-gradient-to-b from-darkBlue/[0.02] to-transparent'>
      <Announcements />
    </div>
  );
}