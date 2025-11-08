type AnnouncementType = 'tender' | 'vacancy' | 'announcement';

interface Announcement {
  type: AnnouncementType;
  title: string;
  description: string;
  date: string;
  deadline?: string;
}

export const ANNOUNCEMENTS: Announcement[] = [
  {
    type: 'tender',
    title: 'Aşgabat-Daşoguz ýolunyň gurluşygy üçin tender yglan edilýär',
    description: 'Awtomobil ýollarynyň gurluşygyny dolandyrmak baradaky döwlet agentligi Aşgabat-Daşoguz ýolunyň gurluşygy üçin tender yglan edýär. Tender gatnaşyjylardan degişli resminamalary tabşyrmak talap edilýär.',
    date: '20.03.2024',
    deadline: '20.04.2024'
  },
  {
    type: 'vacancy',
    title: 'Ýol gurluşyk inženeri wezipesi üçin bäsleşik yglan edilýär',
    description: 'Awtomobil ýollarynyň gurluşygyny dolandyrmak baradaky döwlet agentligi ýol gurluşyk inženeri wezipesi üçin bäsleşik yglan edýär. Dalaşgärlerden degişli hünär we iş tejribesi talap edilýär.',
    date: '18.03.2024',
    deadline: '18.04.2024'
  },
  {
    type: 'announcement',
    title: 'Balkan welaýatynda ýol hereketiniň wagtlaýyn çäklendirilmegi',
    description: 'Balkan welaýatynda ýol abatlaýyş işleri sebäpli, 25-nji martdan 5-nji aprela çenli ýol hereketiniň wagtlaýyn çäklendirilmegi barada habar berilýär.',
    date: '15.03.2024',
    deadline: '05.04.2024'
  },
  {
    type: 'tender',
    title: 'Köpri gurluşygy üçin tender yglan edilýär',
    description: 'Mary welaýatynda täze köpri gurluşygy üçin tender yglan edilýär. Tender gatnaşyjylardan degişli tejribe we maliýe mümkinçilikleri talap edilýär.',
    date: '12.03.2024',
    deadline: '12.04.2024'
  },
  {
    type: 'announcement',
    title: 'Lebap welaýatynda ýol gurluşyk işleriniň başlanmagy',
    description: 'Lebap welaýatynda täze ýol gurluşyk işleriniň başlanmagy barada habar berilýär. Işler 2024-nji ýylyň aprel aýynda başlanar.',
    date: '10.03.2024'
  },
  {
    type: 'vacancy',
    title: 'Ýol gurluşyk tehniki işgärleri üçin bäsleşik',
    description: 'Awtomobil ýollarynyň gurluşygyny dolandyrmak baradaky döwlet agentligi tehniki işgärler üçin bäsleşik yglan edýär.',
    date: '08.03.2024',
    deadline: '08.04.2024'
  }
];
