export type ScheduleItem = {
  label: string;
  dates: { name: string; date: string }[];
};

export type PlanCardData = {
  id: string;
  price: string;
  oldPrice: string;
  title: string;
  features: string[];
  schedule: ScheduleItem[];
};

export type SelfPacedPlan = {
  id: string;
  price: string;
  oldPrice: string;
  title: string;
  subtitle: string;
  features: string[];
};

export type HorizontalPlan = {
  id: string;
  price: string;
  oldPrice: string;
  title: string;
  features: string[];
  schedule: { name: string; date: string }[];
};

export type MockPlan = {
  id: string;
  price: string;
  oldPrice: string;
  title: string;
  features: string[];
  note: string;
};

export type CoursePlanConfig = {
  slug: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  programmeTitle: string;
  programmeSubtitle: string;
  testimonials: {
    name: string;
    role: string;
    country: string;
    quote: string;
  }[];
  primaryPlans: PlanCardData[];
  selfPacedPlans: SelfPacedPlan[];
  horizontalPlans: HorizontalPlan[];
  mockPlans: MockPlan[];
};

const sharedSchedule: ScheduleItem[] = [
  {
    label: "Data Interpretation",
    dates: [
      { name: "Batch 1", date: "29–30 Aug 2026" },
      { name: "Batch 2", date: "10–11 Oct 2026" },
    ],
  },
  {
    label: "LIVE Practical OSCE",
    dates: [
      { name: "Batch 1", date: "11–13 Sep 2026" },
      { name: "Batch 2", date: "16–18 Oct 2026" },
    ],
  },
  {
    label: "History & Communication",
    dates: [{ name: "", date: "5–6 September 2026" }],
  },
];

const pres3Plan: CoursePlanConfig = {
  slug: "pres-3",
  heroEyebrow: "PLAN’s",
  heroTitle: "UKMLA Journey with Confidence",
  heroDescription:
    "Structured, result-driven courses designed to help you clear exams and secure your medical career in the UK.",
  programmeTitle: "PRES 3",
  programmeSubtitle: "Comprehensive Programme",
  testimonials: [
    {
      name: "Safia Abdulla",
      role: "Doctor",
      country: "IRELAND",
      quote:
        "Great course. The videos were great help. Dr Karam was very kind and helpful. He helped us and gave us tips whenever he was around. He knew us by name even before he had met us in person. Dr Anjum’s advice and notes were also very useful. The timing of the course was good. It allowed for enough practice time before the exam. The environment at the center was well-suited for practicing and studying. Very grateful for the opportunity to perform procedures and the large number of needles available at the center. Was also grateful for being able to practice on the breast mannequin which was one of my exam stations. However, a few of the mannequins require replacement like the one for rectal exam. The otoscopes and fundoscopes were not working.",
    },
    {
      name: "Dr. Adeel Khan",
      role: "Doctor",
      country: "UNITED KINGDOM",
      quote:
        "PLABcoach question bank and mocks were extremely helpful. I cleared PLAB 2 in my first attempt. The structured practice helped me focus on the areas that mattered most before the exam.",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Doctor",
      country: "INDIA",
      quote:
        "The course gave me a clear plan instead of leaving me to figure everything out alone. I could revise at my own pace and use the mocks to understand exactly where I needed to improve.",
    },
    {
      name: "Dr. Mohammed Ali",
      role: "Doctor",
      country: "UAE",
      quote:
        "I found the combination of concise teaching, practical questions and mentor guidance very useful. It kept my preparation focused and helped me build consistency week after week.",
    },
    {
      name: "Dr. Sara Wilson",
      role: "Doctor",
      country: "IRELAND",
      quote:
        "The platform made a difficult syllabus feel manageable. The learning path was easy to follow and the practice resources helped me turn weak areas into strengths before the exam.",
    },
  ],
  primaryPlans: [
    {
      id: "live-course",
      price: "£660",
      oldPrice: "£800",
      title: "LIVE Course",
      features: ["Smart Notes & Videos", "3 Days LIVE OSCE (Dublin)", "4 Days Online Training"],
      schedule: sharedSchedule,
    },
    {
      id: "live-online",
      price: "£440",
      oldPrice: "£575",
      title: "LIVE Online only Mode",
      features: ["Data Interpretation", "Smart Notes", "Online Support", "History & Communication", "Mastery Videos"],
      schedule: sharedSchedule,
    },
  ],
  selfPacedPlans: [
    {
      id: "mastery-videos",
      price: "£195",
      oldPrice: "£250",
      title: "MASTERY VIDEOS",
      subtitle: "Video Course Access",
      features: ["Self-Paced Learning", "OSCE Videos", "Data Interpretation", "Anytime Access"],
    },
    {
      id: "full-bundle",
      price: "£275",
      oldPrice: "£330",
      title: "FULL BUNDLE",
      subtitle: "SmartNotes + Videos",
      features: ["Self-Paced Learning", "OSCE Videos", "Data Interpretation", "Anytime Access"],
    },
    {
      id: "smartnotes",
      price: "£140",
      oldPrice: "£175",
      title: "SMARTNOTES",
      subtitle: "Study Notes Only",
      features: ["Self-Paced Learning", "OSCE Videos", "Data Interpretation", "Anytime Access"],
    },
  ],
  horizontalPlans: [
    {
      id: "pres3-osce-programme",
      price: "£500",
      oldPrice: "£550",
      title: "PRES3 OSCE Programme",
      features: [
        "History & Communication Skills",
        "3-Day Live OSCE Training",
        "Dublin Practical Sessions",
        "SmartNotes Included",
        "Mastery Videos Included",
      ],
      schedule: [
        { name: "Batch 1", date: "11th–13th Sep 2026" },
        { name: "Batch 2", date: "16th–18th Oct 2026" },
      ],
    },
    {
      id: "data-interpretation-course",
      price: "£500",
      oldPrice: "£650",
      title: "Data Interpretation Course",
      features: ["2-Day Live Online Training", "Exam-Focused Learning", "Practical Data Analysis", "Expert-Led Sessions"],
      schedule: [
        { name: "Batch 1", date: "29th–30th Aug 2026" },
        { name: "Batch 2", date: "10th–11th Oct 2026" },
      ],
    },
  ],
  mockPlans: [
    {
      id: "data-interpretation-mock",
      price: "£49",
      oldPrice: "£75",
      title: "Data Interpretation Mock Exam",
      features: ["Real Exam Experience", "Timed Assessment", "Performance Review", "Exam-Focused Questions"],
      note: "Perfect for Practice & Confidence",
    },
    {
      id: "osce-mock",
      price: "£125",
      oldPrice: "£175",
      title: "OSCE Mock Exam",
      features: ["Simulated OSCE Stations", "Real Exam Environment", "Expert Assessment", "Performance Feedback"],
      note: "Test Your OSCE Readiness",
    },
    {
      id: "complete-mock-package",
      price: "£149",
      oldPrice: "£250",
      title: "Complete Mock Package",
      features: ["OSCE Mock Exam", "Data Interpretation Mock", "Detailed Feedback", "Full Exam Preparation"],
      note: "Best Value for Complete Practice",
    },
  ],
};

const plab1Plan: CoursePlanConfig = {
  slug: "plab-1-ukmla-akt",
  heroEyebrow: "PLAB 1 PLAN",
  heroTitle: "Build AKT Confidence with a Structured Plan",
  heroDescription:
    "Choose the preparation route that matches your study style, budget, and exam timeline for PLAB 1 / UKMLA-AKT.",
  programmeTitle: "PLAB 1 / UKMLA-AKT",
  programmeSubtitle: "Knowledge-focused preparation",
  testimonials: [
    {
      name: "Dr. Faisal Ahmed",
      role: "IMG",
      country: "INDIA",
      quote:
        "The question bank and mock tests were exactly what I needed to build exam stamina. I could target weak topics and stay consistent with my revision plan.",
    },
    {
      name: "Dr. Maira Khan",
      role: "Doctor",
      country: "PAKISTAN",
      quote:
        "The notes were concise and clear, and the practice questions helped me understand how the exam actually thinks. That made a huge difference in my confidence.",
    },
    {
      name: "Dr. Rahul Nair",
      role: "Doctor",
      country: "UAE",
      quote:
        "I liked how structured the preparation felt. The smart mocks gave me the real pressure of timed revision without losing focus on weak areas.",
    },
  ],
  primaryPlans: [
    {
      id: "plab1-complete",
      price: "£299",
      oldPrice: "£399",
      title: "Complete PLAB 1 Pack",
      features: ["SmartQBank Access", "SmartNotes", "Timed Mock Exams", "AKT Strategy Guidance"],
      schedule: [
        { label: "Foundation Study", dates: [{ name: "Start anytime", date: "Flexible access" }] },
        { label: "Mock Practice", dates: [{ name: "Weekly drills", date: "Self-paced schedule" }] },
      ],
    },
  ],
  selfPacedPlans: [
    {
      id: "plab1-smartqbank",
      price: "£149",
      oldPrice: "£199",
      title: "SmartQBank",
      subtitle: "Question bank access",
      features: ["5,000+ SBA Questions", "Topic-wise practice", "Timed review mode"],
    },
    {
      id: "plab1-smartnotes",
      price: "£89",
      oldPrice: "£120",
      title: "SmartNotes",
      subtitle: "High-yield revision notes",
      features: ["Rapid recap", "Presentation-based review", "Key learning points"],
    },
  ],
  horizontalPlans: [
    {
      id: "plab1-mastery-programme",
      price: "£199",
      oldPrice: "£259",
      title: "Mastery Programme",
      features: ["Video lessons", "Question bank", "Revision summaries", "Progress tracking"],
      schedule: [{ name: "Start anytime", date: "Self-paced" }],
    },
  ],
  mockPlans: [
    {
      id: "plab1-mock",
      price: "£39",
      oldPrice: "£65",
      title: "AKT Mock Exam",
      features: ["180-question mock", "Timed conditions", "Performance feedback", "Weak topic review"],
      note: "Best way to assess readiness",
    },
    {
      id: "plab1-complete-mock",
      price: "£69",
      oldPrice: "£99",
      title: "Mock + Review Pack",
      features: ["Full mock", "Analysis review", "Priority topic list", "Revision guidance"],
      note: "Ideal before your real exam window",
    },
  ],
};

const plab2Plan: CoursePlanConfig = {
  slug: "plab-2-ukmla-cpsa",
  heroEyebrow: "PLAB 2 PLAN",
  heroTitle: "Prepare for Clinical Skills with a Practical Path",
  heroDescription:
    "Choose a plan built around objective clinical practice, communication mastery, and exam-specific OSCE readiness.",
  programmeTitle: "PLAB 2 / UKMLA-CPSA",
  programmeSubtitle: "Clinical and professional skills programme",
  testimonials: [
    // {
    //   name: "Dr. Hina Shah",
    //   role: "Doctor",
    //   country: "UK",
    //   quote:
    //     "The clinical scenarios and communication prep made a real difference. I felt calmer in the exam because I had rehearsed the structure and flow of the stations.",
    // },
    // {
    //   name: "Dr. Omar Hassan",
    //   role: "IMG",
    //   country: "EGYPT",
    //   quote:
    //     "The practical coaching and mock stations are very realistic. It helped me understand what the examiner actually looks for in each scenario.",
    // },
    // {
    //   name: "Dr. Zainab Ali",
    //   role: "Doctor",
    //   country: "SAUDI ARABIA",
    //   quote:
    //     "I was able to practise communication and clinical reasoning in a focused way. The feedback helped me correct small mistakes that had been causing me to lose time.",
    // },
  ],
  primaryPlans: [
    // {
    //   id: "plab2-core",
    //   price: "£399",
    //   oldPrice: "£499",
    //   title: "PLAB 2 Core Course",
    //   features: ["Clinical skills training", "OSCE station rehearsal", "Communication drills", "Faculty feedback"],
    //   schedule: [
    //     { label: "Station Practice", dates: [{ name: "Weekend batches", date: "Flexible schedule" }] },
    //     { label: "Communication Lab", dates: [{ name: "Live sessions", date: "Weekly practice" }] },
    //   ],
    // },
    // {
    //   id: "plab2-elite",
    //   price: "£520",
    //   oldPrice: "£650",
    //   title: "PLAB 2 Elite Bundle",
    //   features: ["Everything in Core", "Extra mock circuits", "Personal review", "Priority mentor support"],
    //   schedule: [
    //     { label: "Mock Circuit", dates: [{ name: "Multiple batches", date: "Select your date" }] },
    //   ],
    // },
  ],
  selfPacedPlans: [
    {
      id: "plab2-videos",
      price: "£180",
      oldPrice: "£230",
      title: "Clinical Mastery Videos",
      subtitle: "Self-paced station training",
      features: ["OSCE walkthroughs", "History taking", "Clinical reasoning", "Anytime access"],
    },
  ],
  horizontalPlans: [
  //  {
  //     id: "plab2-communication-course",
  //     price: "£220",
  //     oldPrice: "£280",
  //     title: "Communication & Clinical Course",
  //     features: ["History taking", "Exam technique", "Professionalism", "Targeted coaching"],
  //     schedule: [{ name: "Live sessions", date: "Ongoing batches" }],
  //   }, 
  //   {
  //     id: "plab2-osce-bootcamp",
  //     price: "£320",
  //     oldPrice: "£420",
  //     title: "OSCE Bootcamp",
  //     features: ["Mock stations", "Performance review", "Case confidence", "Focused corrections"],
  //     schedule: [{ name: "Bootcamp batches", date: "Select a date" }],
  //   },
  ],
  mockPlans: [
    // {
    //   id: "plab2-mock",
    //   price: "£95",
    //   oldPrice: "£130",
    //   title: "PLAB 2 Mock Circuit",
    //   features: ["Realistic stations", "Exam timing", "Performance review", "Feedback notes"],
    //   note: "Practice under exam pressure",
    // },
    // {
    //   id: "plab2-mock-bundle",
    //   price: "£145",
    //   oldPrice: "£210",
    //   title: "Mock + Coaching Bundle",
    //   features: ["Station mocks", "Review session", "Clinical corrections", "Confidence building"],
    //   note: "Best value for final preparation",
    // },
  ],
};

const pres2Plan: CoursePlanConfig = {
  slug: "pres-2",
  heroEyebrow: "PRES 2 PLAN",
  heroTitle: "Build Exam Readiness with a Focused PRES 2 Path",
  heroDescription:
    "Structured learning built for Ireland's PRES 2 exam, with practice, revision, and feedback designed around real exam priorities.",
  programmeTitle: "PRES 2",
  programmeSubtitle: "Written assessment preparation",
  testimonials: [
    {
      name: "Dr. Ananya Thomas",
      role: "Doctor",
      country: "IRELAND",
      quote:
        "The question practice helped me identify my weak spots quickly. I felt much more confident in the final revision phase and the guidance was very practical.",
    },
    {
      name: "Dr. Usman Raza",
      role: "IMG",
      country: "PAKISTAN",
      quote:
        "The structure of the programme made revision manageable. It helped me keep my focus on the topics that mattered most rather than trying to study everything at once.",
    },
  ],
  primaryPlans: [
    {
      id: "pres2-complete",
      price: "£229",
      oldPrice: "£299",
      title: "PRES 2 Complete Plan",
      features: ["SmartQBank", "SmartNotes", "Practice sessions", "Progress review"],
      schedule: [{ label: "Revision window", dates: [{ name: "Flexible", date: "Self-paced" }] }],
    },
  ],
  selfPacedPlans: [
    {
      id: "pres2-qbank",
      price: "£119",
      oldPrice: "£155",
      title: "PRES 2 QBank",
      subtitle: "Prepared for exam practice",
      features: ["Targeted topics", "Timed questions", "Detailed review"],
    },
    {
      id: "pres2-notes",
      price: "£89",
      oldPrice: "£120",
      title: "SmartNotes",
      subtitle: "Concise revision notes",
      features: ["Board-aligned topics", "Rapid revision", "Quick recap"],
    },
  ],
  horizontalPlans: [
    {
      id: "pres2-rapid-revision",
      price: "£149",
      oldPrice: "£199",
      title: "Rapid Revision Plan",
      features: ["Revision topics", "Practice blocks", "Short strategy sessions", "Confidence gains"],
      schedule: [{ name: "Bundle access", date: "Self-paced" }],
    },
  ],
  mockPlans: [
    {
      id: "pres2-mock",
      price: "£35",
      oldPrice: "£55",
      title: "PRES 2 Mock Test",
      features: ["Timed practice", "Review answers", "Weak topic report", "Exam confidence"],
      note: "Great for practice before exam day",
    },
  ],
};

const ncaPlan: CoursePlanConfig = {
  slug: "ukfpo-nca",
  heroEyebrow: "NCA PLAN",
  heroTitle: "Prepare for the National Clinical Assessment with Confidence",
  heroDescription:
    "Choose the preparation plan that helps you strengthen your clinical judgment, recognition skills, and exam-ready reasoning for the NCA.",
  programmeTitle: "UKFPO NCA",
  programmeSubtitle: "Clinical assessment preparation",
  testimonials: [
    {
      name: "Dr. Aisha Mir",
      role: "Foundation Doctor",
      country: "UNITED KINGDOM",
      quote:
        "The structured revision approach made the NCA more manageable. The practice drills and clinical reasoning guidance were especially helpful.",
    },
    {
      name: "Dr. Joel Turner",
      role: "Doctor",
      country: "IRELAND",
      quote:
        "The plan felt realistic and supportive. It helped me focus on the exam’s actual demands rather than just memorising content.",
    },
  ],
  primaryPlans: [
    {
      id: "nca-complete",
      price: "£189",
      oldPrice: "£249",
      title: "NCA Complete Plan",
      features: ["Clinical revision", "Mock scenarios", "Case strategy", "Progress tracking"],
      schedule: [{ label: "Complete pathway", dates: [{ name: "Flexible", date: "Self-paced" }] }],
    },
  ],
  selfPacedPlans: [
    {
      id: "nca-videos",
      price: "£109",
      oldPrice: "£149",
      title: "Clinical Videos",
      subtitle: "Topic-based revision",
      features: ["Case-based learning", "Clinical reasoning", "Structured notes"],
    },
  ],
  horizontalPlans: [
    {
      id: "nca-rapid-plan",
      price: "£149",
      oldPrice: "£199",
      title: "NCA Rapid Review",
      features: ["Case scenarios", "Syndrome recognition", "Feedback practice", "Revision support"],
      schedule: [{ name: "Revision access", date: "Self-paced" }],
    },
  ],
  mockPlans: [
    {
      id: "nca-mock",
      price: "£39",
      oldPrice: "£59",
      title: "NCA Mock Session",
      features: ["Timed cases", "Clinical reasoning review", "Feedback", "Confidence building"],
      note: "Focused practice before the real assessment",
    },
  ],
};

const psaPlan: CoursePlanConfig = {
  slug: "ukfpo-psa",
  heroEyebrow: "PSA PLAN",
  heroTitle: "Sharpen Prescribing Skills with a Targeted PSA Plan",
  heroDescription:
    "A structured preparation route for UK Foundation doctors who want to strengthen prescribing judgment, safety, and exam confidence.",
  programmeTitle: "UKFPO PSA",
  programmeSubtitle: "Prescribing safety preparation",
  testimonials: [
    {
      name: "Dr. Lucy Hart",
      role: "Foundation Doctor",
      country: "UNITED KINGDOM",
      quote:
        "The prescribing cases felt realistic and exam-focused. It helped me improve both speed and safety in my decision-making.",
    },
    {
      name: "Dr. Samir Qureshi",
      role: "Doctor",
      country: "INDIA",
      quote:
        "The plan helped me focus on the clinical pitfalls that matter most in prescribing. It gave me a clearer and calmer revision routine.",
    },
  ],
  primaryPlans: [
    {
      id: "psa-complete",
      price: "£179",
      oldPrice: "£239",
      title: "PSA Complete Plan",
      features: ["Prescribing cases", "Safety review", "Practice tests", "Exam technique"],
      schedule: [{ label: "Revision access", dates: [{ name: "Flexible", date: "Self-paced" }] }],
    },
  ],
  selfPacedPlans: [
    {
      id: "psa-notes",
      price: "£99",
      oldPrice: "£129",
      title: "Drug Safety Notes",
      subtitle: "Fast revision for high-yield prescribing",
      features: ["Common prescriptions", "Risk review", "Clinical safety"],
    },
  ],
  horizontalPlans: [
    {
      id: "psa-rapid-plan",
      price: "£129",
      oldPrice: "£169",
      title: "PSA Rapid Review",
      features: ["Short case practice", "Safety checks", "Exam technique", "Revision notes"],
      schedule: [{ name: "Revision bundle", date: "Self-paced" }],
    },
  ],
  mockPlans: [
    {
      id: "psa-mock",
      price: "£39",
      oldPrice: "£59",
      title: "PSA Mock Test",
      features: ["Case-based practice", "Timed decisions", "Feedback", "Risk awareness"],
      note: "Strong final prep before the real assessment",
    },
  ],
};

const msraPlan: CoursePlanConfig = {
  slug: "msra",
  heroEyebrow: "MSRA PLAN",
  heroTitle: "Prepare for the MSRA with a Smart Revision Route",
  heroDescription:
    "Stay focused on the exam’s high-yield knowledge, reasoning, and decision-making with structured revision and exam practice.",
  programmeTitle: "MSRA",
  programmeSubtitle: "Multi-Specialty Recruitment Assessment",
  testimonials: [
    {
      name: "Dr. Riya Kapoor",
      role: "Doctor",
      country: "INDIA",
      quote:
        "The plan was highly practical and well organised. It helped me improve my speed while keeping the content focused on what matters in MSRA.",
    },
  ],
  primaryPlans: [
    {
      id: "msra-core",
      price: "£219",
      oldPrice: "£289",
      title: "MSRA Core Plan",
      features: ["Revision modules", "Practice questions", "Exam strategy", "Review support"],
      schedule: [{ label: "Study plan", dates: [{ name: "Flexible", date: "Self-paced" }] }],
    },
  ],
  selfPacedPlans: [
    {
      id: "msra-qbank",
      price: "£109",
      oldPrice: "£149",
      title: "MSRA QBank",
      subtitle: "Practice what matters most",
      features: ["High-yield questions", "Timed sets", "Topic analytics"],
    },
  ],
  horizontalPlans: [
    {
      id: "msra-bootcamp",
      price: "£169",
      oldPrice: "£229",
      title: "MSRA Bootcamp",
      features: ["Revision focus", "Case interpretation", "Mock strategy", "Time management"],
      schedule: [{ name: "Live support", date: "Selected batches" }],
    },
  ],
  mockPlans: [
    {
      id: "msra-mock",
      price: "£45",
      oldPrice: "£69",
      title: "MSRA Mock Set",
      features: ["Practice under time pressure", "Review answers", "Performance insights", "Confidence building"],
      note: "Useful when you are close to exam day",
    },
  ],
};

const mrcpAktPlan: CoursePlanConfig = {
  slug: "mrcp-akt",
  heroEyebrow: "MRCGP AKT PLAN",
  heroTitle: "Prepare for MRCGP AKT with a Clear, Focused Plan",
  heroDescription:
    "A structured preparation route for AKT study, built around exam-style questions, revision priorities, and review-based improvement.",
  programmeTitle: "MRCGP AKT",
  programmeSubtitle: "AKT preparation programme",
  testimonials: [
    {
      name: "Dr. Meera Singh",
      role: "Doctor",
      country: "INDIA",
      quote:
        "The plan helped me stay consistent and focus on high-yield areas. It made the curriculum feel more targeted and manageable.",
    },
  ],
  primaryPlans: [
    {
      id: "mrcp-akt-plus",
      price: "£249",
      oldPrice: "£329",
      title: "AKT Plus Plan",
      features: ["Question bank", "Revision notes", "Exam strategy", "Weekly review"],
      schedule: [{ label: "Study access", dates: [{ name: "Flexible", date: "Self-paced" }] }],
    },
  ],
  selfPacedPlans: [
    {
      id: "mrcp-akt-qbank",
      price: "£119",
      oldPrice: "£169",
      title: "AKT QBank",
      subtitle: "Practice-based preparation",
      features: ["Exam-style questions", "Timed rounds", "Topic analytics"],
    },
  ],
  horizontalPlans: [
    {
      id: "mrcp-akt-revision",
      price: "£159",
      oldPrice: "£219",
      title: "AKT Revision Route",
      features: ["Targeted review", "Practice drills", "Topic prioritisation", "Confidence gains"],
      schedule: [{ name: "Revision pass", date: "Self-paced" }],
    },
  ],
  mockPlans: [
    {
      id: "mrcp-akt-mock",
      price: "£49",
      oldPrice: "£79",
      title: "AKT Mock Set",
      features: ["Timed exam-style practice", "Score review", "Weak areas", "Exam readiness"],
      note: "Useful for final preparation",
    },
  ],
};

export const coursePlanCatalog: Record<string, CoursePlanConfig> = {
  "pres-3": pres3Plan,
  "pres-3-osce": pres3Plan,
  "plab-1-ukmla-akt": plab1Plan,
  "plab-1-ukmla": plab1Plan,
  "plab-2-ukmla-cpsa": plab2Plan,
  "plab-2-ukmla": plab2Plan,
  "pres-2": pres2Plan,
  "ukfpo-nca": ncaPlan,
  "national-clinical-assessment": ncaPlan,
  "ukfpo-psa": psaPlan,
  "prescribing-safety-assessment": psaPlan,
  msra: msraPlan,
  "mrcp-akt": mrcpAktPlan,
  ukmla: pres3Plan,
};

export const defaultCoursePlan = pres3Plan;

export function getCoursePlanHref(courseSlug: string) {
  return `/course-plan?course=${encodeURIComponent(courseSlug)}`;
}

export function getPlanSelectionHref(courseSlug: string, planId: string) {
  return `/course-plan?course=${encodeURIComponent(courseSlug)}&selectedPlan=${encodeURIComponent(planId)}`;
}
