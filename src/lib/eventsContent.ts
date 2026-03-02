export const eventsContent = {
  nav: {
    items: ["אירועים", "תכנית", "מרצים", "גלריה", "צור קשר"],
    lang: "HE",
  },
  hero: {
    sideNote: "אירועים מקצועיים",
    titleParts: [
      { text: "הצטרפו ל" },
      { text: "אירועים המקצועיים", accent: "gold" as const },
      { text: " של MitoDerm" },
    ],
    subtitleLines: [
      "כנסים, סדנאות והשתלמויות מקצועיות בתחום האסתטיקה והטריכולוגיה",
      "הזדמנות ייחודית ללמוד מהמומחים המובילים בישראל",
    ],
    cta: "הרשמה לאירוע הקרוב",
    kicker: "",
  },
  upcomingEvents: {
    heading: "אירועים קרובים",
    subtitle: "בחרו את האירוע שמתאים לכם והירשמו עכשיו",
    events: [
      {
        id: 1,
        title: "השתלמות מקצועית בתחום הקרקפת והשיער",
        description: "סדנה אינטנסיבית על אקסוזומים, מיקרונידלינג וטכנולוגיות מתקדמות לטיפול בקרקפת ושיער",
        date: "08.03.26",
        time: "11:00 - 14:00",
        location: "באר שבע",
        featured: true,
        color: "from-[#dfba74] to-[#be800c]",
      },
      {
        id: 2,
        title: "כנס חדשנות באסתטיקה רפואית",
        description: "כנס מקצועי בנושא חידושים בתחום האסתטיקה הביולוגית ואקסוזומים סינתטיים",
        date: "09.05.26",
        time: "10:00 - 14:00",
        location: "חיפה",
        featured: false,
        color: "from-[#be800c] to-[#9a6600]",
      },
      {
        id: 3,
        title: "סדנת היכרות עם טכנולוגיות MitoDerm",
        description: "מפגש היכרות מקצועי עם מוצרי MitoDerm וטכנולוגיות חדשניות לטיפולי פנים וקרקפת",
        date: "15.06.26",
        time: "10:00 - 14:00",
        location: "תל אביב",
        featured: false,
        color: "from-[#c4a764] to-[#a68a4d]",
      },
    ],
  },
  agenda: {
    heading: "תכנית האירוע",
    items: [
      "11:00 - התכנסות והרשמה | קפה ונטוורקינג עם אנשי מקצוע מובילים",
      "11:30 - הרצאת פתיחה | הבנת הקרקפת כמערכת ביולוגית חיה ומבנה זקיק השערה",
      "12:00 - אקסוזומים וטכנולוגיה מתקדמת | מה הם אקסוזומים ואיך הם פועלים ברמת התא",
      "12:30 - הדגמה מעשית | שילוב אקסוזומים בטיפולי קרקפת עם מצלמה מקצועית",
      "13:00 - פאנל מומחים | שאלות ותשובות עם צוות המרצים המקצועי",
      "13:30 - סיכום ומשוב | חלוקת תעודות והזדמנות לרישום לקורסים מתקדמים",
    ],
    cta: "הרשמו עכשיו",
  },
  speakers: {
    heading: "המרצים שלנו",
    speakers: [
      {
        name: 'ד"ר מיכאל כהן',
        title: "מומחה בטריכולוגיה",
        bio: "מומחה מוביל בטיפולי קרקפת ושיער עם למעלה מ-15 שנות ניסיון בתחום",
        image: "/images/speaker1.png",
      },
      {
        name: 'ד"ר שרה לוי',
        title: "מנהלת מדעית MitoDerm",
        bio: "חוקרת מובילה בתחום אקסוזומים ורפואה אסתטית מתקדמת",
        image: "/images/speaker2.png",
      },
      {
        name: 'ד"ר דוד אבני',
        title: "מומחה אסתטיקה",
        bio: "מומחה בינלאומי בטכנולוגיות אסתטיות חדשניות ומיקרונידלינג",
        image: "/images/speaker3.png",
      },
    ],
  },
  pastEvents: {
    heading: "תמונות מאירועים קודמים",
    subtitle: "צפו ברגעים מיוחדים מהאירועים שלנו",
    photos: [
      {
        image: "https://images.unsplash.com/photo-1733222765056-b0790217baa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWRpY2FsJTIwdHJhaW5pbmclMjB3b3Jrc2hvcCUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzIyMDg0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        date: "פברואר 2024",
        location: "תל אביב",
      },
      {
        image: "https://images.unsplash.com/photo-1758691736591-5bf31a5d0dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNlbWluYXIlMjBtZWV0aW5nJTIwcm9vbSUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzcyMjA4NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        date: "ינואר 2024",
        location: "חיפה",
      },
      {
        image: "https://images.unsplash.com/photo-1766867257943-0665537fb2dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHRyYWluaW5nJTIwY2xhc3Nyb29tJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcyMjA4NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        date: "דצמבר 2023",
        location: "ירושלים",
      },
      {
        image: "https://images.unsplash.com/photo-1768796370577-c6e8b708b980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc2hvcCUyMHBlb3BsZSUyMHN0dWR5aW5nfGVufDF8fHx8MTc3MjIwODQ3MHww&ixlib=rb-4.1.0&q=80&w=1080",
        date: "נובמבר 2023",
        location: "באר שבע",
      },
      {
        image: "https://images.unsplash.com/photo-1670382417551-d2f1ee29aea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uZmVyZW5jZSUyMGF1ZGllbmNlJTIwc2VtaW5hcnxlbnwxfHx8fDE3NzIyMDg0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        date: "אוקטובר 2023",
        location: "נתניה",
      },
      {
        image: "https://images.unsplash.com/photo-1758691737182-d42aefd6dee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0cmFpbmluZyUyMGdyb3VwJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcyMjA4NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        date: "ספטמבר 2023",
        location: "אשדוד",
      },
    ],
  },
  contact: {
    heading: "צור קשר",
    phoneLabel: "טלפון",
    phoneValue: "לכל הפרטים: 054-326-2182",
    addressLabel: "כתובת",
    addressValue: "רפאל איתן 38, רמת גן, 5590500",
    emailLabel: "אימייל",
    emailValue: "events@mitoderm.com",
    follow: "עקבו אחרינו",
  },
  footer: {
    line1: "© 2026 MITODERM. כל הזכויות שמורות.\n",
    line2: "חברה בת של קבוצה גלובלית המתמחה בציוד רפואי ופתרונות אסתטיים מתקדמים",
  },
};
