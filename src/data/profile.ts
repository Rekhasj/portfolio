// All site content lives here — edit this file to update the portfolio.

export type SocialLink = { label: string; href: string };

export type Stat = { value: string; label: string };

export type SkillGroup = { title: string; items: string[] };

export type CaseStudy = { title: string; challenge: string; approach: string; impact: string };

export type WorkProject = {
  name: string;
  type: string;
  period: string;
  summary: string;
  tech: string[];
  highlights: string[];
  link?: SocialLink;
  caseStudies?: CaseStudy[];
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  projects: WorkProject[];
};

export type PersonalProject = {
  name: string;
  description: string;
  tech: string[];
  repo: string;
  live?: string;
};

export type Education = { title: string; place: string; period: string; note?: string };

export const profile = {
  name: "Rekha SJ",
  role: "Frontend & React Native Engineer",
  location: "Bengaluru, India",
  email: "rekhasj21@gmail.com",
  resume: "/Rekha_SJ_Resume.pdf",
  playStore: "https://play.google.com/store/apps/details?id=com.farmsapp&hl=en_IN",
  tagline:
    "I build fast, reliable mobile and web experiences for real users — from farmer-facing e-commerce in React Native to modern web apps with Next.js and TypeScript.",
  about: [
    "I'm a frontend and React Native engineer with 3.5+ years of experience at Zuari FarmHub, building FarmsApp — an agri-commerce and advisory platform for farmers across India, live on Google Play.",
    "After a career break, I returned to tech in 2022 through NxtWave's Full Stack Development program and joined Zuari FarmHub in 2023 — where I've been shipping production features ever since.",
    "I've owned features end to end: product discovery, cart and checkout, Razorpay payments, voice and fuzzy search in multiple languages, video consultations with WebRTC, Google Maps field mapping and push notifications.",
    "Beyond features, I take the app all the way to users — publishing releases to the Google Play Store, investigating crashes and ANRs through Play Console, handling Android SDK upgrades and keeping releases policy-compliant. Today I'm extending the platform to the web with Next.js and TypeScript.",
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rekhasj/" },
    { label: "GitHub", href: "https://github.com/Rekhasj" },
  ] satisfies SocialLink[],
  stats: [
    { value: "3.5+", label: "Years building production apps" },
    { value: "4", label: "Products shipped at Zuari FarmHub" },
    { value: "~15%", label: "Lift in checkout completion" },
    { value: "~20%", label: "Faster product search" },
  ] satisfies Stat[],
  skills: [
    { title: "Frontend", items: ["React Native", "React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap"] },
    { title: "State Management", items: ["Redux", "Redux Toolkit", "Redux-Saga", "Redux Persist"] },
    { title: "Backend & Data", items: ["Node.js", "REST APIs", "SQL", "Firebase"] },
    { title: "Integrations", items: ["Razorpay", "Google Maps", "WebRTC", "Firebase Cloud Messaging", "Tata Tele"] },
    { title: "Tools & Delivery", items: ["Git", "Google Play publishing", "Play Console", "Android SDK upgrades", "Crash & ANR debugging", "Analytics"] },
  ] satisfies SkillGroup[],
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Zuari FarmHub Limited",
      location: "Bengaluru",
      period: "Feb 2023 – Present",
      projects: [
        {
          name: "FarmsApp",
          type: "Agri e-commerce & advisory · React Native",
          period: "Aug 2023 – Present",
          summary:
            "A mobile platform where farmers discover and buy agri products, track orders and get expert advice over video.",
          tech: ["React Native", "Redux", "Firebase", "Razorpay", "Google Maps", "WebRTC"],
          link: { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.farmsapp&hl=en_IN" },
          highlights: [
            "Published and maintained FarmsApp on the Google Play Store — owning Play Store deployments, release updates and compliance.",
            "Built farmer-focused e-commerce flows: product discovery, cart, checkout, orders and order tracking.",
            "Integrated Razorpay payments and refined checkout UX for ~15% better checkout completion.",
            "Implemented fuzzy and voice-based product search with multi-language support, cutting search time by ~20%.",
            "Delivered video consultations and product-discovery enhancements for farmers.",
            "Built Google Maps field-mapping flows, push notifications and document verification.",
            "Investigated production crashes and ANRs using Play Console diagnostics; handled Android SDK upgrades.",
            "Added analytics tracking to guide product and UX decisions.",
          ],
          caseStudies: [
            {
              title: "Making search work for every farmer",
              challenge: "Farmers often misspell product names or prefer speaking in their own language over typing.",
              approach: "Added fuzzy matching and voice input with multi-language support on top of product search.",
              impact: "~20% reduction in time taken to find a product.",
            },
            {
              title: "A smoother checkout",
              challenge: "Drop-offs during checkout and inconsistent UI across the purchase flow.",
              approach: "Integrated Razorpay and reworked checkout screens for clarity and consistency.",
              impact: "~15% improvement in checkout completion.",
            },
            {
              title: "Shipping to Google Play",
              challenge: "Getting new features to farmers reliably while meeting Play Store policies and Android target-SDK requirements.",
              approach: "Handled Play Store deployments end to end, upgraded the Android SDK and resolved Play Store compliance issues before each release.",
              impact: "FarmsApp live and regularly updated on Google Play.",
            },
            {
              title: "Keeping production stable",
              challenge: "Crashes and ANRs tied to app startup, notifications, background services and native dependencies.",
              approach: "Traced issues through Play Console diagnostics and Android crash reports to their root cause.",
              impact: "More stable releases for farmers in production.",
            },
          ],
        },
        {
          name: "FarmsApp Website",
          type: "Web platform · Next.js",
          period: "Aug 2026 – Present",
          summary: "Bringing the FarmsApp agri-commerce experience to browser-based users.",
          tech: ["Next.js", "TypeScript", "React"],
          link: { label: "Live site", href: "https://farmsappwebsite.netlify.app/" },
          highlights: [
            "Developing the FarmsApp website with Next.js and TypeScript.",
            "Building web experiences that extend the existing agri-commerce platform to the browser.",
          ],
        },
        {
          name: "Kiosk-Agent Portal",
          type: "Operations web app · React",
          period: "Sep 2023 – Present",
          summary: "A web portal that helps field agents manage enquiries, carts and orders for farmers.",
          tech: ["React", "Redux", "REST APIs", "Firebase", "Tata Tele"],
          link: { label: "Agent login", href: "https://kiosk.farm/login" },
          highlights: [
            "Developed cart, enquiry and order-management modules for agent operations.",
            "Implemented advanced filters by Order ID, mobile number, status, date and more.",
            "Built video-call and notification features to improve agent communication.",
          ],
        },
        {
          name: "Zuari FarmHub Kiosk App",
          type: "Kiosk mobile app · React Native",
          period: "Feb 2023 – Jan 2024",
          summary: "A React Native kiosk app for in-store farmer interactions.",
          tech: ["React Native", "Redux", "REST APIs", "Tata Tele"],
          highlights: [
            "Improved user experience through UI refinements and animations.",
            "Implemented core video-call and push-notification features.",
          ],
        },
      ],
    },
  ] satisfies Experience[],
  personalProjects: [
    {
      name: "FarmsApp Dashboard",
      description: "A dashboard built with the Next.js App Router and TypeScript.",
      tech: ["Next.js", "TypeScript", "React"],
      repo: "https://github.com/Rekhasj/farmsappDashboard",
    },
    {
      name: "School Website",
      description:
        "A responsive school website with animated sections, validated enquiry forms and email delivery via EmailJS.",
      tech: ["React", "Vite", "Formik", "Yup", "Framer Motion", "Bootstrap"],
      repo: "https://github.com/Rekhasj/school_website",
      live: "https://hawkingschool.netlify.app/",
    },
    {
      name: "JISI Event",
      description: "A multi-page events website with client-side routing and a Bootstrap UI.",
      tech: ["React", "Vite", "React Router", "React Bootstrap"],
      repo: "https://github.com/Rekhasj/jisi-events",
      live: "https://jisievent.netlify.app/",
    },
    {
      name: "Nxt Watch",
      description: "A video streaming app with authentication, light/dark themes, trending and saved videos.",
      tech: ["React", "React Router", "Styled Components", "JWT"],
      repo: "https://github.com/Rekhasj/Nxt-Watch-App",
    },
    {
      name: "Jobby App",
      description: "A job search app with protected routes, filters by employment type and salary, and job details.",
      tech: ["React", "React Router", "REST APIs", "JWT"],
      repo: "https://github.com/Rekhasj/jobby-app",
    },
    {
      name: "Movies App",
      description: "A Netflix / Prime-style movie browsing app with search, sliders and movie details.",
      tech: ["React", "React Router", "REST APIs"],
      repo: "https://github.com/Rekhasj/MOVIES-APP-NETFLIX-AMAZON-PRIME-CLONE",
    },
  ] as PersonalProject[],
  education: [
    {
      title: "B.Tech, Electronics & Communication Engineering",
      place: "KEC Kuppam, Chittoor",
      period: "2009 – 2013",
      note: "76%",
    },
    { title: "Full Stack Development Program", place: "NxtWave", period: "2022 – 2023" },
  ] satisfies Education[],
};
