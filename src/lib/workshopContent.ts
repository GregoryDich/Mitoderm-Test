export type WorkshopVariant = "180" | "480" | "990";

export type WorkshopContent = {
  nav: { items: string[]; lang: string };
  hero: {
    kicker: string;
    titleParts: { text: string; accent?: "gold" }[];
    subtitleLines: string[];
    cta: string;
    sideNote: string;
  };
  benefits: string[];
  invite: {
    titleLines: { text: string; accent?: "gold" }[];
    body: { parts: { text: string; accent?: "gold" }[] };
    cta: string;
  };
  topics: { heading: string; items: string[]; cta: string };
  eventDetails: {
    heading: string;
    dateLabel: string;
    dateValue: string;
    timeLabel: string;
    timeValue: string;
    locationLabel: string;
    locationValue: string;
    extraLocationValue: string;
    extraDateValue: string;
    extraTimeValue: string;
  };
  unique: {
    titleParts: { text: string; accent?: "gold" }[];
    bodyParts: { text: string; accent?: "gold" }[];
  };
  gallery: { heading: string; before: string; after: string; counter: string; cta: string };
  exosomesIntro: {
    heading: string;
    subheading: string;
    cards: { title: string; body: string }[];
    footerLine: string;
  };
  about: { heading: string; body: string; cta: string };
  speakers: {
    heading: string;
    speakers: { name: string; title: string; bio?: string }[];
  };
  vtech: {
    badge: string;
    title1: string;
    title2: string;
    body: string;
    bullets: string[];
    footnote: string;
  };
};

export const contentByVariant: Record<WorkshopVariant, WorkshopContent> = {
  "990": {
    nav: {
      items: ["Products", "More Info", "Agenda", "Contact us", "Results", "About us "],
      lang: "EN",
    },
    hero: {
      sideNote: "עוסק בתחום השיער?",
      titleParts: [
        { text: "תחום הקרקפת", accent: "gold" },
        { text: " ועולם הטריקולוגיה מעניין אותך? הכשרות והשתלמויות שבו המדע פוגש תוצאות!", accent: undefined },
      ],
      subtitleLines: [
        "האקסוזומים הסינתטיים הבלעדיים של מיטודרם!",
        "הדור החדש של האסתטיקה הביולוגית",
      ],
      cta: "הרשמה דרך WhatsApp",
      kicker: "",
    },
    benefits: [
      "Innovative Products ",
      "Networking with professionals",
      "Certificate",
      "Personal Growth",
      "Official Italian Distributor in Israel",
      "Limited offer",
    ],
    invite: {
      titleLines: [
        { text: "MitoDerm company invites you \n", accent: undefined },
        { text: "to a ", accent: undefined },
        { text: "boutique conference for leaders", accent: "gold" },
        { text: " in the field of aesthetics in Israel", accent: undefined },
      ],
      body: {
        parts: [
          { text: "At the conference, you'll be introduced to this ", accent: undefined },
          { text: "breakthrough technology!", accent: "gold" },
          {
            text:
              "\nThis conference will open the door for you to the world of innovative treatments, which are what clients really want and look for,along with a significant reduction in working time, corresponding increase in profits, and faster recovery time compared to traditional and simpler treatments",
          },
        ],
      },
      cta: "Contact for Price details",
    },
    topics: {
      heading: "נושאים שנלמד:",
      items: [
        "הבנת הקרקפת כמערכת ביולוגית חיה,מבנה הקרקפת וזקיק השערה.",
        "תהליכי נשירה ואבחון- הקשר בין עור, דלקת, סטרס והשפעת הזקיק",
        "אקסוזומים וטכנולוגיה מתקדמת בקרקפת- מה הם אקסוזומים ואיך הם פועלים ברמת התא",
        "יתרונות מקור סינתטי ויציב: שיקום קרקפת, חיזוק זקיקים והתאמת צמיחה",
        "פרקטיקה קלינית ופרוטוקולים: שילוב אקסוזומים בטיפולי קרקפת- הוכחת טיפול לפי אבחון יחד עם המצלמה",
        "בידול, תוצאות וערך עסקי: שילוב הטיפול בעסק- איך להציע טיפול קרקפת נכון,בידול מקצועי מול המתחרים,יצירת תוצאות, אמון ומכירות",
      ],
      cta: "Reserve Seat",
    },
    eventDetails: {
      heading: "פרטי האירוע",
      dateLabel: "תאריך",
      dateValue: "08.03.26",
      timeLabel: "שעות",
      timeValue: "11:00 - 14:00",
      locationLabel: "מיקום",
      locationValue: "באר שבע",
      extraLocationValue: "חיפה",
      extraDateValue: "09.05.26",
      extraTimeValue: "10:00 - 14:00",
    },
    unique: {
      titleParts: [
        { text: "What ", accent: undefined },
        { text: "makes you", accent: "gold" },
        { text: " ", accent: undefined },
        { text: "unique", accent: "gold" },
        { text: " compared to competitors?", accent: undefined },
      ],
      bodyParts: [
        { text: "MitoDerm company is the ", accent: undefined },
        { text: "only company in Israel working with exosomes", accent: "gold" },
        {
          text:
            " that can connect and trigger a chain reaction of natural cell actions, allowing the skin to enjoy great benefits",
        },
      ],
    },
    gallery: {
      heading: "Gallery",
      before: "Before",
      after: "After  ",
      counter: "1 / 14",
      cta: "Reserve Seat",
    },
    exosomesIntro: {
      heading: "מהם אקסוזומים?",
      subheading: "היכרות ראשונית עם הטכנולוגיה המהפכנית שמשנה את פני תעשיית האסתטיקה",
      cards: [
        {
          title: "למה זה חשוב?",
          body: "מאפשרים טיפולים יעילים יותר בנשירת שיער, שיקום קרקפת והאצת צמיחה",
        },
        {
          title: "איך זה עובד?",
          body: "מעבירים מסרים ביולוגיים בין תאים, מעוררים תהליכי התחדשות והתאוששות טבעיים",
        },
        {
          title: "מה זה?",
          body: "חלקיקים ננומטריים הנוצרים באופן טבעי בתאי הגוף ומשמשים לתקשורת בין-תאית",
        },
      ],
      footerLine: "בסדנה תלמדו את היסודות המדעיים ואת היישומים המעשיים",
    },
    about: {
      heading: "מי אנחנו?",
      body:
        " היא חברה בת של קבוצה גלובלית המתמחה בציוד רפואי והפצת פתרונות אסתטיים מתקדמים באסיה, אוסטרליה וארצות הברית\n\nהמשימה שלנו: להעצים אנשי מקצוע בתחום היופי והאסתטיקה באמצעות ידע, כלים וטכנולוגיות בקצה החנית.",
      cta: "Contact for personalized solutions",
    },
    speakers: {
      heading: "המרצים שלנו",
      speakers: [
        {
          name: "ד\"ר מיכאל כהן",
          title: "מומחה בטריכולוגיה",
          bio: "מומחה מוביל בטיפולי קרקפת ושיער עם למעלה מ-15 שנות ניסיון בתחום",
        },
        {
          name: "ד\"ר שרה לוי",
          title: "מנהלת מדעית MitoDerm",
          bio: "חוקרת מובילה בתחום אקסוזומים ורפואה אסתטית מתקדמת",
        },
        {
          name: "ד\"ר דוד אבני",
          title: "מומחה אסתטיקה",
          bio: "מומחה בינלאומי בטכנולוגיות אסתטיות חדשניות ומיקרונידלינג",
        },
      ],
    },
    vtech: {
      badge: "המוצר שנעבוד איתו",
      title1: "Exosignal Hair",
      title2: "MITODERM",
      body: "הדור הבא של פתרונות טיפוליים לקרקפת ושיער, המשלב מדע מתקדם עם יעילות מוכחת.\n",
      bullets: [
        "טכנולוגיית אקסוזומים מתקדמת",
        "פורמולה איטלקית ייחודית",
        "תוצאות מוכחות קלינית",
        "יעילות מרבית בטיפולי קרקפת",
      ],
      footnote: "*בסדנה תקבלו היכרות מעמיקה עם המוצר ושיטות העבודה",
    },
    contact: {
      heading: "Contact Us",
      phoneLabel: "Phone",
      phoneValue: "For all details: +972 54-326-2182",
      addressLabel: "Address",
      addressValue: "רפאל איתן 38, Ramat Gan, 5590500",
      emailLabel: "Email",
      emailValue: "info@mitoderm.com",
      follow: "Follow us on",
    },
    footer: {
      line1: "© 2026 MITODERM. כל הזכויות שמורות.\n",
      line2: "חברה בת של קבוצה גלובלית המתמחה בציוד רפואי ופתרונות אסתטיים מתקדמים",
    },
  },

  "180": {
    nav: {
      items: ["Products", "More Info", "Agenda", "Contact us", "Results", "About us"],
      lang: "EN",
    },
    hero: {
      sideNote: "קורס מקצועי בן 180 שעות",
      titleParts: [
        { text: "הכשרה מקצועית ", accent: "gold" },
        { text: "בקוסמטיקה רפואית ותחום הפנים - קורס מקיף בן 180 שעות!", accent: undefined },
      ],
      subtitleLines: [
        "קורס מעמיק המשלב תיאוריה ופרקטיקה",
        "עם טכנולוגיות מתקדמות ותעודה מוכרת",
      ],
      cta: "הרשמה דרך WhatsApp",
      kicker: "",
    },
    benefits: [
      "180 שעות הכשרה",
      "תעודה מוכרת",
      "ליווי אישי",
      "כלים מקצועיים",
      "קורס פרונטלי",
      "מומחים מובילים",
    ],
    invite: {
      titleLines: [
        { text: "MitoDerm מזמינה אותך\n", accent: undefined },
        { text: "לקורס ", accent: undefined },
        { text: "מקצועי ומקיף", accent: "gold" },
        { text: " בתחום הקוסמטיקה הרפואית", accent: undefined },
      ],
      body: {
        parts: [
          { text: "קורס בן ", accent: undefined },
          { text: "180 שעות", accent: "gold" },
          {
            text:
              " המשלב ידע תיאורטי מעמיק עם פרקטיקה נרחבת. תלמדו טכניקות מתקדמות, תכירו את הטכנולוגיות החדישות ביותר ותקבלו כלים מקצועיים להצלחה בתחום",
          },
        ],
      },
      cta: "פרטים נוספים",
    },
    topics: {
      heading: "תכנית הלימודים:",
      items: [
        "הבנת העור כמערכת ביולוגית חיה: תהליכי הזדקנות העור והקשר בין דלקת כרונית, סטרס, ירידה בתקשורת תאית ופגיעה באיכות הקולגן",
        "טיפולים קוסמטיים מתקדמים - פילינגים, מזותרפיה וטיפולים משולבים",
        "אקסוזומים וטכנולוגיות ביולוגיות - הדור החדש של טיפולים אסתטיים",
        "מיקרונידלינג מקצועי - טכניקות, פרוטוקולים ויישומים מעשיים",
        "ניהול קליניקה עצמאית - שיווק, מכירות ובניית מותג אישי",
        "פרקטיקה קלינית נרחבת - תרגול על מודלים אמיתיים עם ליווי צמוד",
      ],
      cta: "הרשמה לקורס",
    },
    eventDetails: {
      heading: "פרטי הקורס",
      dateLabel: "תאריך התחלה",
      dateValue: "15.04.26",
      timeLabel: "משך",
      timeValue: "180 שעות",
      locationLabel: "מיקום",
      locationValue: "תל אביב",
      extraLocationValue: "ירושלים",
      extraDateValue: "20.05.26",
      extraTimeValue: "180 שעות",
    },
    unique: {
      titleParts: [
        { text: "למה ", accent: undefined },
        { text: "MitoDerm", accent: "gold" },
        { text: " היא הבחירה הנכונה עבורך?", accent: undefined },
      ],
      bodyParts: [
        { text: "אנחנו ", accent: undefined },
        { text: "היחידים בישראל", accent: "gold" },
        {
          text:
            " שמשלבים בקורס פרונטלי טכנולוגיות אקסוזומים מתקדמות עם ליווי אישי וכלים מקצועיים לכל תלמיד",
        },
      ],
    },
    gallery: {
      heading: "תוצאות התלמידים שלנו",
      before: "לפני",
      after: "אחרי",
      counter: "1 / 14",
      cta: "הצטרף אלינו",
    },
    exosomesIntro: {
      heading: "מה תלמדו בקורס?",
      subheading: "תכנית לימודים מקיפה המשלבת תיאוריה מעשית ופרקטיקה מתקדמת",
      cards: [
        {
          title: "בסיס תיאורטי",
          body: "מעמיקה של אנטומיה, פיזיולוגיה ומבנה העור והפנים",
        },
        {
          title: "פרקטיקה מעשית",
          body: "תרגול נרחב על מודלים אמיתיים עם ליווי מומחים מנוסים",
        },
        {
          title: "טכנולוגיות מתקדמות",
          body: "היכרות והתנסות עם הציוד והמוצרים המתקדמים ביותר",
        },
      ],
      footerLine: "בסיום הקורס תקבלו תעודה מוכרת וכלים להתחלת קריירה מוצלחת",
    },
    about: {
      heading: "על MitoDerm Academy",
      body:
        "האקדמיה המובילה להכשרות מקצועיות בתחום הקוסמטיקה הרפואית בישראל.\n\nאנחנו מציעים קורסים מקיפים עם המרצים המובילים בתחום, טכנולוגיות חדשניות וליווי אישי לכל תלמיד.",
      cta: "פרטים נוספים על האקדמיה",
    },
    speakers: {
      heading: "הצוות המקצועי שלנו",
      speakers: [
        {
          name: "ד\"ר מיכאל כהן",
          title: "מנהל האקדמיה",
          bio: "מומחה מוביל עם למעלה מ-20 שנות ניסיון בתחום הקוסמטיקה הרפואית",
        },
        {
          name: "ד\"ר שרה לוי",
          title: "מרצה בכירה",
          bio: "מומחית בטיפולים אסתטיים מתקדמים ואקסוזומים",
        },
        {
          name: "ד\"ר דוד אבני",
          title: "מומחה מיקרונידלינג",
          bio: "מרצה בינלאומי ומומחה בטכנולוגיות אסתטיות",
        },
      ],
    },
    vtech: {
      badge: "הציוד והמוצרים בקורס",
      title1: "Exosignal Full Range",
      title2: "MITODERM PROFESSIONAL",
      body: "בקורס תעבדו עם הציוד והמוצרים המקצועיים של MitoDerm, כולל קו האקסוזומים המלא.\n",
      bullets: [
        "ציוד מקצועי לכל תלמיד",
        "מוצרי MitoDerm פרימיום",
        "טכנולוגיות אקסוזומים",
        "ערכת כלים מקצועית",
      ],
      footnote: "*כל תלמיד מקבל ערכה מקצועית לתרגול",
    },
    contact: {
      heading: "צור קשר",
      phoneLabel: "טלפון",
      phoneValue: "לכל הפרטים: 054-326-2182",
      addressLabel: "כתובת",
      addressValue: "רפאל איתן 38, רמת גן, 5590500",
      emailLabel: "אימייל",
      emailValue: "academy@mitoderm.com",
      follow: "עקבו אחרינו",
    },
    footer: {
      line1: "© 2026 MITODERM ACADEMY. כל הזכויות שמורות.\n",
      line2: "האקדמיה המובילה להכשרות מקצועיות בקוסמטיקה רפואית",
    },
  },

  "480": {
    nav: {
      items: ["Products", "More Info", "Agenda", "Contact us", "Results", "About us"],
      lang: "EN",
    },
    hero: {
      sideNote: "קורס מקצועי מתקדם 480 שעות",
      titleParts: [
        { text: "הסמכה מקצועית מלאה ", accent: "gold" },
        { text: "בקוסמטיקה רפואית מתקדמת - 480 שעות של מצוינות!", accent: undefined },
      ],
      subtitleLines: [
        "התכנית המקיפה והמתקדמת ביותר בישראל",
        "הסמכה מלאה + התמחות + ליווי עסקי",
      ],
      cta: "הרשמה דרך WhatsApp",
      kicker: "",
    },
    benefits: [
      "480 שעות מקצועיות",
      "הסמכה מלאה",
      "התמחות קלינית",
      "ליווי עסקי",
      "תיק עבודות",
      "הצבה בקליניקות",
    ],
    invite: {
      titleLines: [
        { text: "MitoDerm Academy מציגה\n", accent: undefined },
        { text: "את התכנית ", accent: undefined },
        { text: "המקצועית המתקדמת ביותר", accent: "gold" },
        { text: "ישראל", accent: undefined },
      ],
      body: {
        parts: [
          { text: "תכנית של ", accent: undefined },
          { text: "480 שעות", accent: "gold" },
          {
            text:
              " המשלבת לימוד אקדמי מעמיק, התמחות קלינית, בניית תיק עבודות מקצועי וליווי עסקי להקמת קליניקה עצמאית. המסלול המלא להצלחה מקצועית!",
          },
        ],
      },
      cta: "פגישת ייעוץ אישית",
    },
    topics: {
      heading: "תכנית הלימודים המקיפה:",
      items: [
        "הבנת נשירת שיער מזווית מקצועית-מחזור חיי השערה, סוגי נשירה נפוצים, מתי הבעיה בקרקפת ומתי בזקיק",
        "קרקפת כבסיס לשיער בריא-אבחון מצבי קרקפת בעזרת מצלמה.",
        "אקסוזומים, מיקרונידלינג וטכנולוגיה מתקדמת: איך טכנולוגיה ביולוגית פוגשת את עולם המספרה",
        "התאמת טיפול לפי אבחון: שילוב מיקרונידלינג וטכנולוגיות משלימות: עבודה בטוחה ומדויקת",
        "פרקטיקה קלינית ופרוטוקולים: שילוב אקסוזומים בטיפולי קרקפת - מעשי",
        "בידול, תוצאות וערך עסקי: שילוב הטיפול בעסק- איך להציע טיפול קרקפת נכון,בידול מקצועי מול המתחרים,יצירת תוצאות, אמון ומכירות",
      ],
      cta: "קבע פגישה ייעוץ",
    },
    eventDetails: {
      heading: "פרטי התכנית המקצועית",
      dateLabel: "תאריך התחלה",
      dateValue: "01.05.26",
      timeLabel: "משך",
      timeValue: "480 שעות",
      locationLabel: "מיקום",
      locationValue: "תל אביב + קליניקות",
      extraLocationValue: "חיפה + קליניקות",
      extraDateValue: "15.06.26",
      extraTimeValue: "480 שעות",
    },
    unique: {
      titleParts: [
        { text: "מה עושה את התכנית שלנו ", accent: undefined },
        { text: "ייחודית", accent: "gold" },
        { text: "?", accent: undefined },
      ],
      bodyParts: [
        { text: "התכנית היחידה בישראל שמשלבת ", accent: undefined },
        { text: "הסמכה אקדמית + התמחות קלינית + ליווי עסקי מלא", accent: "gold" },
        {
          text:
            ". תקבלו את כל הכלים להצלחה: ידע, ניסיון מעשי, תיק עבודות ותכנית עסקית מוכנה",
        },
      ],
    },
    gallery: {
      heading: "תיקי עבודות של בוגרינו",
      before: "לפני",
      after: "אחרי",
      counter: "1 / 14",
      cta: "הצטרף למצוינים",
    },
    exosomesIntro: {
      heading: "מה כולל המסלול המקצועי?",
      subheading: "תכנית מקיפה בת 480 שעות המובילה אתכם להצלחה מקצועית מלאה",
      cards: [
        {
          title: "לימוד אקדמי",
          body: "300 שעות לימוד תיאורטי מעמיק עם המרצים המובילים בתחום",
        },
        {
          title: "התמחות קלינית",
          body: "120 שעות עבודה מעשית על לקוחות אמיתיים בקליניקות מובילות",
        },
        {
          title: "ליווי עסקי",
          body: "60 שעות ליווי אישי להקמת קליניקה עצמאית והצלחה עסקית",
        },
      ],
      footerLine: "בסיום: הסמכה מלאה + תיק עבודות מקצועי + תכנית עסקית",
    },
    about: {
      heading: "למה לבחור ב-MitoDerm Academy?",
      body:
        "האקדמיה היחידה בישראל שמציעה מסלול מקצועי מלא ומקיף.\n\nצוות מרצים בינלאומי, קליניקות להתמחות, ציוד מתקדם וליווי אישי עד להקמת קליניקה עצמאית מצליחה.",
      cta: "קבע פגישה ייעוץ אישית",
    },
    speakers: {
      heading: "צוות ההוראה המקצועי",
      speakers: [
        {
          name: "פרופ' מיכאל כהן",
          title: "מנהל אקדמי",
          bio: "פרופסור לדרמטולוגיה עם 25+ שנות ניסיון והוראה",
        },
        {
          name: "ד\"ר שרה לוי",
          title: "ראש המחלקה לאסתטיקה",
          bio: "מומחית מובילה באקסוזומים ורפואה רגנרטיבית",
        },
        {
          name: "ד\"ר דוד אבני",
          title: "מנהל ההתמחות הקלינית",
          bio: "מנתח קליניקות מובילות ומרצה בינלאומי",
        },
      ],
    },
    vtech: {
      badge: "הציוד המקצועי המלא",
      title1: "MitoDerm Professional Suite",
      title2: "COMPLETE TRAINING KIT",
      body: "כל תלמיד מקבל ערכת ציוד מקצועית מלאה + גישה לקליניקות עם טכנולוגיות מתקדמות.\n",
      bullets: [
        "ערכת ציוד אישית מקצועית",
        "גישה לכל מוצרי MitoDerm",
        "התנסות במכשור מתקדם",
        "תיק כלים מקצועי מלא",
      ],
      footnote: "*ערכת הציוד נשארת אצלכם לשימוש מקצועי",
    },
    contact: {
      heading: "מעוניינים להצטרף?",
      phoneLabel: "טלפון",
      phoneValue: "לפגישת ייעוץ: 054-326-2182",
      addressLabel: "כתובת",
      addressValue: "רפאל איתן 38, רמת גן, 5590500",
      emailLabel: "אימייל",
      emailValue: "pro@mitoderm.com",
      follow: "הצטרפו לקהילה",
    },
    footer: {
      line1: "© 2026 MITODERM PROFESSIONAL ACADEMY. כל הזכויות שמורות.\n",
      line2: "המסלול המקצועי המתקדם ביותר להכשרה בקוסמטיקה רפואית",
    },
  },
};