export type ScheduleItem = {
  label: string;
  dates: { name: string; date: string }[];
};

export type PlanCardData = {
  id: string;
  externalHref: string;
  price: string;
  oldPrice: string;
  title: string;
  features: string[];
  groupDiscount?: {
    candidateRange: string;
    price: string;
    originalPrice: string;
    inclusions: string;
    email: string;
  };
  schedule: ScheduleItem[] | [];
};

export type SelfPacedPlan = {
  id: string;
  externalHref: string;
  price: string;
  oldPrice: string;
  title: string;
  subtitle: string;
  features: string[];
};

export type HorizontalPlan = {
  id: string;
  externalHref: string;
  price: string;
  oldPrice: string;
  title: string;
  features: string[];
  schedule: { name: string; date: string }[];
};

export type MockPlan = {
  id: string;
  externalHref: string;
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
  offerLine?: string;
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
  horizontalPlansTwo: HorizontalPlan[];
  mockPlans: MockPlan[];
};

const sharedSchedule: ScheduleItem[] = [
  {
    label: "Data Interpretation",
    dates: [
      { name: "Batch 1", date: "Next batch dates coming soon. Contact us to reserve a place." },
      { name: "Batch 2", date: "Next batch dates coming soon. Contact us to reserve a place." },
    ],
  },
  {
    label: "LIVE Practical OSCE",
    dates: [
      { name: "Batch 1", date: "Next batch dates coming soon. Contact us to reserve a place." },
      { name: "Batch 2", date: "Next batch dates coming soon. Contact us to reserve a place." },
    ],
  },
  {
    label: "History & Communication",
    dates: [{ name: "", date: "Next batch dates coming soon. Contact us to reserve a place." }],
  },
];
const smartQBankOffer = "Get 1 Month Extra Free on any PRES2 SmartQBank subscription & Flat 20% Off";

const pres3Plan: CoursePlanConfig = {
  slug: "pres-3",
  heroEyebrow: "PRES 3 PLAN",
  heroTitle: "Prepare for PRES 3 with a Complete OSCE and Data Interpretation Plan",
  heroDescription:
    " Structured, result-driven courses designed to help you clear exams and secure your medical career in Ireland.",
  offerLine: "",
  programmeTitle: "PRES 3",
  programmeSubtitle: "Comprehensive Programme",
  testimonials: [
    {
      name: "Safia Abdulla",
      role: "Doctor",
      country: "IRELAND",
      quote:
        "Great course. The videos were great help. Dr Karam was very kind and helpful. He helped us and gave us tips whenever he was around. He knew us by name even before he had met us in person. Dr Anjum’s advice and notes were also very useful. The timing of the course was good. It allowed for enough practice time before the exam. The environment at the center was well-suited for practicing and studying. Very grateful for the opportunity to perform procedures and the large number of needles available at the center. Was also grateful for being able to practice on the breast mannequin which was one of my exam stations.",
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
      externalHref: "https://courses.plabcoach.com/course/PRES3ComprehensiveProgrammeLIVEOFFLINE-2027-115797/checkout",
      price: "£690",
      oldPrice: "£850",
      title: "PRES 3 Comprehensive Programme LIVE Course ",
      features: [ "3 Days LIVE OSCE (Dublin)", "4 Days Online Training","SmartNotes","Self-Paced Mastery Videos"],
      groupDiscount: {
        candidateRange: "3-5 candidates only in one group",
        price: "£580",
        originalPrice: "£740",
        inclusions: "Includes access to all online materials",
        email: "support@plabcoach.com",
      },
      schedule: [],
    },
    {
      id: "live-online",
      externalHref: "https://courses.plabcoach.com/course/PRES3ComprehensiveProgrammeLIVEONLINEonly-2027-115800/checkout",
      price: "£475",
      oldPrice: "£610",
      title: "PRES 3 Comprehensive Programme LIVE Online Mode",
      features: ["6 Days of Online Training including OSCE", "SmartNotes","Self-Paced Mastery Videos"],
      schedule: [],
    },
  ],
  selfPacedPlans: [
    {
      id: "full-bundle",
      externalHref: "https://courses.plabcoach.com/course/PRES3-OSCEandDataInterpretation-83518/checkout",
      price: "£275",
      oldPrice: "£330",
      title: "FULL BUNDLE",
      subtitle: "SmartNotes + Self-Paced Mastery Videos",
      features: ["Self-Paced Mastery Videos", "SmartNotes", "Data Interpretation SmartQBank - Self Assessment"],
    },
    {
      id: "mastery-videos",
      externalHref: "https://courses.plabcoach.com/course/PRES3-OSCEandDataInterpretationSelf-PacedMasteryVi-84024/checkout",
      price: "£195",
      oldPrice: "£250",
      title: "SELF-PACED MASTERY VIDEOS",
      subtitle: "Video Course Access",
      features: ["Self-Paced Mastery Videos", "Data Interpretation SmartQBank - Self Assessment",],
    },
    
    {
      id: "smartnotes",
      externalHref: "https://courses.plabcoach.com/course/PRES3-OSCEDataInterpretation-84141/checkout",
      price: "£140",
      oldPrice: "£175",
      title: "SMARTNOTES",
      subtitle: "Study Notes Only",
      features: ["SmartNotes", "Data Interpretation SmartQBank - Self Assessment"],
    },
  ],
  horizontalPlansTwo:[
    {
      id: "pres3-osce-programme",
      externalHref: "https://courses.plabcoach.com/course/PRES3OSCE-OnlyTrainingProgramme-2027-116417/checkout",
      price: "£550",
      oldPrice: "£625",
      title: "PRES3 OSCE-Only Training Programme",
      features: [
        "History & Communication Skills",
        "3-Day Live OSCE Training",
        "Dublin Practical Sessions",
        "SmartNotes",
        "Self-Paced Mastery Videos",
      ],
      schedule: [
        { name: "Batch 1", date: "Next batch dates coming soon. Contact us to reserve a place." },
        { name: "Batch 2", date: "Next batch dates coming soon. Contact us to reserve a place." },
      ],
    },
  ],
  horizontalPlans: [
    {
      id: "data-interpretation-course",
      externalHref: "https://courses.plabcoach.com/course/PRES3DataInterpretationCourse2-DayOnlineLive-84035/checkout",
      price: "£275",
      oldPrice: "£330",
      title: "Data Interpretation Course",
      features: ["2-Day Live Online Training", "Exam-Focused Learning", "Self-Paced Mastery Videos", "SmartNotes"],
      schedule: [
        { name: "Batch 1", date: "Next batch dates coming soon. Contact us to reserve a place." },
        { name: "Batch 2", date: "Next batch dates coming soon. Contact us to reserve a place." },
      ],
    },
  ],
  mockPlans: [
    {
      id: "data-interpretation-mock",
      externalHref: "https://courses.plabcoach.com/course/MockExamforPRES3DataInterpretation-84036/checkout",
      price: "£49",
      oldPrice: "£75",
      title: "SmartMock for Data Interpretation",
      features: ["OSCE Mock Exam", "Data Interpretation SmartMock", "Detailed Feedback", "Exam-Focused Questions"],
      note: "Perfect for Practice & Confidence",
    },
    // {
    //   id: "osce-mock",
    //   externalHref: "https://courses.plabcoach.com/courses?categories_ids=11244",
    //   price: "£125",
    //   oldPrice: "£175",
    //   title: "OSCE Mock Exam",
    //   features: ["Simulated OSCE Stations", "Real Exam Environment", "Expert Assessment", "Performance Feedback"],
    //   note: "Test Your OSCE Readiness",
    // },
    {
      id: "complete-mock-package",
      externalHref: "https://courses.plabcoach.com/course/MockExamforPRES3DataInterpretation-87898/checkout",
      price: "£149",
      oldPrice: "£250",
      title: "Complete SmartMock Package",
      features: ["OSCE Mock Exam", "Data Interpretation SmartMock", "Detailed Feedback", "Exam-Focused Questions"],
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
  offerLine: "Get 1 Month Extra Free on any PLAB1 SmartQBank subscription & Flat 20% Off",
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
    // {
    //   id: "plab1-complete",
    //   externalHref: "",
    //   price: "£299",
    //   oldPrice: "£399",
    //   title: "Complete PLAB 1 Pack",
    //   features: ["SmartQBank Access", "SmartNotes", "Timed Mock Exams", "AKT Strategy Guidance"],
    //   schedule: [
    //     { label: "Foundation Study", dates: [{ name: "Start anytime", date: "Flexible access" }] },
    //     { label: "Mock Practice", dates: [{ name: "Weekly drills", date: "Self-paced schedule" }] },
    //   ],
    // },
  ],
  selfPacedPlans: [
    {
      id: "plab1-smartqbank",
      externalHref: "https://courses.plabcoach.com/course/PLAB1UKMLAAppliedKnowledgeTestAKTQuestionBankMockT-84015/checkout",
      price: "£14.99",
      oldPrice: "£44.99",
      title: "SmartQBank",
      subtitle: "SmartQBank Access",
      features: ["Unlimited SmartMocks for 1 Month", "Topic-wise practice", "Timed review mode"],
    },
    {
      id: "plab1-smartqbank2",
      externalHref: "https://courses.plabcoach.com/course/PLAB1UKMLAAppliedKnowledgeTestAKTQuestionBankMockT-84015/checkout",
      price: "£29.99",
      oldPrice: "£99.99",
      title: "SmartQBank",
      subtitle: "SmartQBank Access",
      features: ["Unlimited SmartMocks for 3 Months", "Topic-wise practice", "Timed review mode"],
    },
    {
      id: "plab1-smartnotes",
      externalHref: "https://courses.plabcoach.com/course/PLAB1UKMLAAppliedKnowledgeTestAKTQuestionBankMockT-84015/checkout",
      price: "£49.99",
      oldPrice: "£174.99",
      title: "SmartQBank",
      subtitle: "SmartQBank Access",
      features: ["Unlimited SmartMocks for 6 Months", "Presentation-based review", "Timed review mode"],
    },
    {
      id: "plab1-smartqbank3",
      externalHref: "https://courses.plabcoach.com/course/PLAB1UKMLAAppliedKnowledgeTestAKTQuestionBankMockT-84015/checkout",
      price: "£79.99",
      oldPrice: "£299.99",
      title: "SmartQBank",
      subtitle: "SmartQBank Access",
      features: ["Unlimited SmartMocks for 12 Months", "Topic-wise practice", "Timed review mode"],
    },
  ],
  horizontalPlans: [
    // {
    //   id: "plab1-mastery-programme",
    //   externalHref: "",
    //   price: "£199",
    //   oldPrice: "£259",
    //   title: "Mastery Programme",
    //   features: ["Video lessons", "Question bank", "Revision summaries", "Progress tracking"],
    //   schedule: [{ name: "Start anytime", date: "Self-paced" }],
    // },
  ],
  horizontalPlansTwo:[],
  mockPlans: [
    {
      id: "plab1-mock",
      externalHref: "https://courses.plabcoach.com/course/PLAB1UKMLAAppliedKnowledgeTestAKT1MockTest-84019/checkout",
      price: "£30",
      oldPrice: "£49",
      title: "PLAB1 1 SmartMock",
      features: ["1 Mock Test 180 Question for 1 Month","Timed conditions"],
      note: "Best way to assess readiness",
    },
    {
      id: "plab1-complete-mock",
      externalHref: "https://courses.plabcoach.com/course/PLAB1UKMLAAppliedKnowledgeTestAKTThreeMockTests-84109/checkout",
      price: "£75",
      oldPrice: "£149",
      title: "PLAB1 3 SmartMocks",
      features: ["3 Mock Tests 180 Question for 6 Months","Timed conditions"],
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
  offerLine: "",
  programmeTitle: "PLAB 2 / UKMLA-CPSA",
  programmeSubtitle: "Clinical and professional skills programme",
  testimonials: [
    {
      name: "Dr. Hina Shah",
      role: "Doctor",
      country: "UK",
      quote:
        "The clinical scenarios and communication prep made a real difference. I felt calmer in the exam because I had rehearsed the structure and flow of the stations.",
    },
    {
      name: "Dr. Omar Hassan",
      role: "IMG",
      country: "EGYPT",
      quote:
        "The practical coaching and mock stations are very realistic. It helped me understand what the examiner actually looks for in each scenario.",
    },
    {
      name: "Dr. Zainab Ali",
      role: "Doctor",
      country: "SAUDI ARABIA",
      quote:
        "I was able to practise communication and clinical reasoning in a focused way. The feedback helped me correct small mistakes that had been causing me to lose time.",
    },
  ],
  primaryPlans: [
    {
      id: "plab2-core",
      externalHref: "https://courses.plabcoach.com/course/PLAB2ComprehensiveProgrammeOFFLINE-2027-111014/checkout",
      price: "£650",
      oldPrice: "£800",
      title: "PLAB 2 Comprehensive Programme OFFLINE (10 days)",
      features: [ "4 Days of Online Training covering Data Interpretation, History Taking, and Communication Skills.", "2 Days of LIVE OSCE Training with expert faculty guidance and real-exam focused scenarios.","1 Day of Supervised SIMMAN Practice to enhance confidence in managing acute and emergency scenarios.","3 Days of OSCE Practice Sessions with Manikins to develop practical skills and improve examination technique in a simulated clinical environment.","Includes SmartNotes : OSCE Scenarios explained"],
      groupDiscount: {
        candidateRange: "3-5 candidates only in one group",
        price: "£550 ",
        originalPrice: "£740",
        inclusions: "Includes access to all online materials",
        email: "support@plabcoach.com",
      },
      schedule: [],
    },
    {
      id: "plab2-elite",
      externalHref: "https://courses.plabcoach.com/course/PLAB2ComprehensiveCourseONLINEOnly-2027-111018/checkout",
      price: "£435",
      oldPrice: "£575",
      title: "PLAB 2 Comprehensive Course ONLINE Only (7 days)",
      features: [ "4 Days of Online Training covering Data Interpretation, History Taking, and Communication Skills.", "2 Days of LIVE Online OSCE Training featuring exam-focused scenarios, clinical skills teaching, and expert faculty guidance.","1 Day of Online Supervised SIMMAN Experience designed to improve confidence in recognising and managing acute and emergency clinical situations in a structured OSCE setting.","Includes SmartNotes : OSCE Scenarios explained"],
      schedule: [],
    }
  ],
  selfPacedPlans: [
    {
      id: "plab2-videos",
      externalHref: "https://courses.plabcoach.com/course/PLAB2-UKMLA-CPSA-83517/checkout",
      price: "£99",
      oldPrice: "£120",
      title: "SmartNotes for 6 months",
      subtitle: "Comprehensive Study Package",
      features: ["OSCE walkthroughs", "History taking", "Clinical reasoning", "Anytime access"],
    },
  ],
  horizontalPlansTwo:[],
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
    {
      id: "plab2-mock",
      price: "£150",
      oldPrice: "£200",
      title: "SmartMock for PLAB2 OSCE Face to Face",
      features: ["Realistic stations", "Exam timing", "Performance review", "Feedback notes"],
      note: "Practice under exam pressure",
      externalHref: "https://courses.plabcoach.com/course/SmartMockforPLAB2OSCEFacetoFace-111021/checkout",
    },
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
  offerLine: smartQBankOffer,
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
    // {
    //   id: "pres2-complete",
    //   externalHref: "",
    //   price: "£229",
    //   oldPrice: "£299",
    //   title: "PRES 2 Complete Plan",
    //   features: ["SmartQBank", "SmartNotes", "Practice sessions", "Progress review"],
    //   schedule: [{ label: "Revision window", dates: [{ name: "Flexible", date: "Self-paced" }] }],
    // },
  ],
  selfPacedPlans: [
    {
      id: "pres2-qbank",
      externalHref: "https://courses.plabcoach.com/course/PRESLEVEL2SmartQBankSmartNotesSmartMock-101501/checkout",
      price: "£19.99",
      oldPrice: "£49.99",
      title: "SmartQBank",
      subtitle: "SmartQBank Access",
      features: ["Unlimited SmartMocks for 1 Month","SmartNotes","Self-Paced Mastery Videos", "Timed questions"],
    },
    {
      id: "pres2-notes",
      externalHref: "https://courses.plabcoach.com/course/PRESLEVEL2SmartQBankSmartNotesSmartMock-101501/checkout",
      price: "£39.99",
      oldPrice: "£109.99",
      title: "SmartQBank",
      subtitle: "SmartQBank Access",
      features: ["Unlimited SmartMocks for 3 Months","SmartNotes","Self-Paced Mastery Videos", "Timed questions"],
    },
    {
      id: "plab1-smartnotes2",
      externalHref: "https://courses.plabcoach.com/course/PRESLEVEL2SmartQBankSmartNotesSmartMock-101501/checkout",
      price: "£66.66",
      oldPrice: "£189.99",
      title: "SmartQBank",
      subtitle: "SmartQBank Access",
      features: ["Unlimited SmartMocks for 6 Months","SmartNotes","Self-Paced Mastery Videos", "Timed questions"],
    },
    {
      id: "plab1-smartqbank3",
      externalHref: "https://courses.plabcoach.com/course/PRESLEVEL2SmartQBankSmartNotesSmartMock-101501/checkout",
      price: "£99.99",
      oldPrice: "£349.99",
      title: "SmartQBank",
      subtitle: "SmartQBank Access",
      features: ["Unlimited SmartMocks for 12 Months","SmartNotes","Self-Paced Mastery Videos", "Timed questions"],
    },
  ],
  horizontalPlansTwo:[],
  horizontalPlans: [
    // {
    //   id: "pres2-rapid-revision",
    //   externalHref: "",
    //   price: "£149",
    //   oldPrice: "£199",
    //   title: "Rapid Revision Plan",
    //   features: ["Revision topics", "Practice blocks", "Short strategy sessions", "Confidence gains"],
    //   schedule: [{ name: "Bundle access", date: "Self-paced" }],
    // },
  ],
  mockPlans: [
    {
      id: "pres2-mock",
      externalHref: "https://courses.plabcoach.com/course/PRESLevel2MockTest-84022/checkout",
      price: "£49",
      oldPrice: "£75",
      title: "PRES2 One SmartMock",
      features: ["1 Mock Test 180 Question for 1 Month","Timed practice"],
      note: "Great for practice before exam day",
    },
     {
      id: "pres2-mock2",
      externalHref: "https://courses.plabcoach.com/course/PRESLevel2MockTestThree-84114/checkout",
      price: "£120",
      oldPrice: "£199",
      title: "PRES2 Three SmartMocks",
      features: ["3 Mock Tests 180 Question for 6 Months","Timed practice"],
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
      externalHref: "https://courses.plabcoach.com/course/NationalClinicalAssessmentComprehensiveProgramme-116416",
      price: "£550",
      oldPrice: "£650",
      title: "NCA Comprehensive Programme",
      features: ["3 Days of Online Training","2 Days LIVE Practical & Clinical Examination Training", "SmartMock scenarios", "Case strategy"],
      // schedule: [{ label: "Complete pathway", dates: [{ name: "Flexible", date: "Self-paced" }] }],
      schedule: [],
      groupDiscount: {
        candidateRange: "3-5 candidates only in one group",
        price: "£500",
        originalPrice: "£700",
        inclusions: "Includes access to all online materials",
        email: "support@plabcoach.com",
      },
    },
  ],
  selfPacedPlans: [
    {
      id: "nca-videos",
      externalHref: "https://courses.plabcoach.com/course/NationalClinicalAssessmentNCAFullBundle-84040/checkout",
      price: "£275",
      oldPrice: "£330",
      title: "Full Bundle",
      subtitle: "Topic-based revision",
      features: ["Self-Paced Mastery Videos", "Clinical reasoning", "SmartNotes"],
    },
    {
      id: "nca-videos2",
      externalHref: "https://courses.plabcoach.com/course/NationalClinicalAssessmentNCASelf-PacedMasteryVide-84041/checkout",
      price: "£195",
      oldPrice: "£250",
      title: "Only Self-Paced Mastery Videos",
      subtitle: "Topic-based revision",
      features: ["Self-Paced Mastery Videos", "Clinical reasoning", "SmartNotes"],
    },
    {
      id: "nca-videos3",
      externalHref: "https://courses.plabcoach.com/course/UKFoundationProgrammeNationalClinicalAssessment-83519/checkout",
      price: "£140",
      oldPrice: "£175",
      title: "Only SmartNotes",
      subtitle: "Topic-based revision",
      features: ["Self-Paced Mastery Videos", "Clinical reasoning", "SmartNotes"],
    },
    // {
    //   id: "nca-videos4",
    //   externalHref: "https://courses.plabcoach.com/courses?categories_ids=11246",
    //   price: "£200",
    //   oldPrice: "£250",
    //   title: "One Day Offline Crash Course (City: Solihull)",
    //   subtitle: "Topic-based revision",
    //   features: ["Case-based learning", "Clinical reasoning", "Structured notes"],
    // },
    // {
    //   id: "nca-videos5",
    //   externalHref: "https://courses.plabcoach.com/courses?categories_ids=11246",
    //   price: "£175",
    //   oldPrice: "£225",
    //   title: "One Day Online Crash Course",
    //   subtitle: "Topic-based revision",
    //   features: ["Case-based learning", "Clinical reasoning", "Structured notes"],
    // },
    // {
    //   id: "nca-videos6",
    //   externalHref: "https://courses.plabcoach.com/courses?categories_ids=11246",
    //   price: "£300",
    //   oldPrice: "£400",
    //   title: "Practice on Manikins : Every Day till Exam",
    //   subtitle: "Topic-based revision",
    //   features: ["Practice sessions", "Clinical skills development", "Exam preparation"],
    // },
  ],
  horizontalPlansTwo:[],
  horizontalPlans: [
    // {
    //   id: "nca-rapid-plan",
    //   externalHref: "https://courses.plabcoach.com/courses?categories_ids=11246",
    //   price: "£149",
    //   oldPrice: "£199",
    //   title: "NCA Rapid Review",
    //   features: ["Case scenarios", "Syndrome recognition", "Feedback practice", "Revision support"],
    //   schedule: [{ name: "Revision access", date: "Self-paced" }],
    // },
  ],
  mockPlans: [
    {
      id: "nca-mock",
      externalHref: "https://courses.plabcoach.com/course/MockExaminationforNCALiveFacetoFace-84043",
      price: "£150",
      oldPrice: "£200",
      title: "SmartMock for NCA LIVE Face to Face",
      features: ["Timed cases", "Clinical reasoning review", "Feedback", "Confidence building"],
      note: "Focused practice before the real assessment",
    },
     {
      id: "nca-mock2",
      externalHref: "https://courses.plabcoach.com/course/MockExaminationforNCAOnline-84044/checkout",
      price: "£125",
      oldPrice: "£175",
      title: "SmartMock for NCA Online",
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
      externalHref: "https://courses.plabcoach.com/course/PrescribingSafetyAssessment-80237/checkout",
      price: "£99",
      oldPrice: "£199",
      title: "UKFPO Prescribing Safety Assessment - SmartNotes & Self-Paced Mastery Videos",
      features: ["Self-Paced Mastery Videos", "Safety review", "Practice tests", "SmartNotes"],
      // schedule: [{ label: "Revision access", dates: [{ name: "Flexible", date: "Self-paced" }] }],
      schedule: [],
    },
  ],
  selfPacedPlans: [],
  horizontalPlans: [],
  horizontalPlansTwo:[],
  mockPlans: [],
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
      externalHref: "",
      price: "Launching soon",
      oldPrice: "£289",
      title: "MSRA Core Plan",
      features: ["Revision modules", "Practice questions", "Exam strategy", "Review support"],
      schedule: [{ label: "Study plan", dates: [{ name: "Flexible", date: "Self-paced" }] }],
    },
  ],
  selfPacedPlans: [
    {
      id: "msra-qbank",
      externalHref: "",
      price: "Launching soon",
      oldPrice: "£149",
      title: "MSRA QBank",
      subtitle: "Practice what matters most",
      features: ["High-yield questions", "Timed sets", "Topic analytics"],
    },
  ],
  horizontalPlansTwo:[],
  horizontalPlans: [
    {
      id: "msra-bootcamp",
      externalHref: "",
      price: "Launching soon",
      oldPrice: "£229",
      title: "MSRA Bootcamp",
      features: ["Revision focus", "Case interpretation", "Mock strategy", "Time management"],
      schedule: [{ name: "Live support", date: "Selected batches" }],
    },
  ],
  mockPlans: [
    {
      id: "msra-mock",
      externalHref: "",
      price: "Launching soon",
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
      externalHref: "",
      price: "Launching soon",
      oldPrice: "£329",
      title: "AKT Plus Plan",
      features: ["Question bank", "Revision notes", "Exam strategy", "Weekly review"],
      schedule: [{ label: "Study access", dates: [{ name: "Flexible", date: "Self-paced" }] }],
    },
  ],
  selfPacedPlans: [
    // {
    //   id: "mrcp-akt-qbank",
    //   externalHref: "",
    //   price: "Launching soon",
    //   oldPrice: "£169",
    //   title: "AKT QBank",
    //   subtitle: "Practice-based preparation",
    //   features: ["Exam-style questions", "Timed rounds", "Topic analytics"],
    // },
  ],
  horizontalPlansTwo:[],
  horizontalPlans: [
    // {
    //   id: "mrcp-akt-revision",
    //   externalHref: "",
    //   price: "Launching soon",
    //   oldPrice: "£219",
    //   title: "AKT Revision Route",
    //   features: ["Targeted review", "Practice drills", "Topic prioritisation", "Confidence gains"],
    //   schedule: [{ name: "Revision pass", date: "Self-paced" }],
    // },
  ],
  mockPlans: [
    {
      id: "mrcp-akt-mock",
      externalHref: "",
      price: "Launching soon",
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
