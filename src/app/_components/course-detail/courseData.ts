export type TocItem = {
  id: string;
  label: string;
};

export type CourseSection = {
  id: string;
  heading: string;
  paragraphs: (string | LinkedText)[];
};

export type LinkedText = {
  beforeLink: string;
  linkText: string;
  href: string;
  afterLink?: string;
};

export type FAQItem = {
  question: string;
  answer: string | LinkedText;
};

export type ComparisonRow = {
  feature: string;
  colA: string;
  colB: string;
};

export type ComparisonTable = {
  heading: string;
  noteHeading?: string;
  noteBullets?: (string | { text: string; linkText: string; href: string })[];
  colAHeader: string;
  colBHeader: string;
  colAColor?: string;
  colBColor?: string;
  rows: ComparisonRow[];
  footerText?: string;
  footerBtnUrl?: string;
};

export type RelatedExam = {
  title: string;
  description: string;
  tags: { label: string; variant: 1 | 2 | 3 }[];
  iconBg?: string;
  image: string;
  href: string;
};

export type PathwayStep = {
  id: string;
  number: string;
  label: string;
  icon:
    | "eligibility"
    | "pass-plab1"
    | "prepare-plab2"
    | "pass-plab2"
    | "apply-registration"
    | "start-career"
    | "pass-pres2"
    | "prepare-pres3"
    | "pass-pres3"
    | "apply-imc"
    | "prepare-nca"
    | "pass-nca"
    | "prepare-psa"
    | "pass-psa"
    | "apply-fp";
};

export type CourseDetailData = {
  slug: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  heroImage: string;
  heroDescription: string;
  toc: TocItem[];
  sections: CourseSection[];
  faqTitle?: string;
  faqs: FAQItem[];
  faqCta?: {
    title: string;
    text: string;
    buttonLabel: string;
  };
  comparison?: ComparisonTable;
  relatedExams: RelatedExam[];
  pathway: PathwayStep[];
  videoId: string;
  videoTitle: string;
  ctaTitle: string;
  ctaCopy: string;
  subscribeButtonLabel: string;
  subscribeHref?: string;
  syllabusHref?: string;
  plabCoachHelpCta:string;
  plabCoachHelpCtaHref:string;
};

const tocPlab1: TocItem[] = [
  { id: "what-is", label: "What is PLAB 1?" },
  { id: "who-needs", label: "Who Needs to Take PLAB 1?" },
  { id: "format", label: "PLAB 1 Format & Structure" },
  { id: "syllabus", label: "PLAB 1 Syllabus / Blueprint" },
  { id: "eligibility", label: "Eligibility & Registration Process" },
  { id: "dates", label: "PLAB 1 Dates & Fees" },
  { id: "prepare", label: "How to Prepare for PLAB 1" },
  { id: "how-helps", label: "How PLABcoach Helps" },
  { id: "who-should", label: "Who Should Take This Course" },
];

const sectionsPlab1: CourseSection[] = [
  {
    id: "what-is",
    heading: "What is PLAB 1?",
    paragraphs: [
      "PLAB 1 is the first part of the Professional and Linguistic Assessments Board (PLAB) test, set and administered by the General Medical Council (GMC), the UK's medical regulator. It is a written knowledge exam designed to test whether international medical graduates (IMGs) have the clinical knowledge required to practise safely in the UK, at the standard expected of a doctor starting Foundation Year 2 (F2).",
      "Since 2024, PLAB 1 questions are drawn from GMC's Medical Licensing Assessment (MLA) content map, the same knowledge framework used to assess UK medical graduates — meaning a PLAB 1 pass is now benchmarked to the same standard as UK finals, even though IMGs continue to sit an exam named \"PLAB 1\" rather than a separately branded UKMLA paper.",
      {
        beforeLink: "",
        linkText: "GMC PLAB 1 guide",
        href: "https://www.gmc-uk.org/registration-and-licensing/join-the-register/plab/plab-1-guide/what-is-the-plab-1-exam",
        afterLink: "",
      },
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs to Take PLAB 1?",
    paragraphs: [
      "PLAB 1 is required for any international medical graduate who wants to register with the GMC and practise medicine in the UK, and who does not hold a qualification the GMC recognises as exempting them (such as certain EEA-recognised degrees or an accepted alternative like a relevant Royal College membership). Candidates can sit PLAB 1 immediately after graduating from medical school — a completed internship is not required to sit the exam itself, though it is required later for full GMC registration."
    ],
  },
  {
    id: "format",
    heading: "PLAB 1 Format & Structure",
    paragraphs: [
      "● Question format: 180 Single Best Answer (SBA) questions (written exam)",
      "● Duration: 180 minutes (Approximately 1 minute per question)",
      "● Delivery:  Written exam at GMC venues in the UK and EU.",
      "● Content basis: GMC Medical Licensing Assessment (MLA) (Approximately 430 core conditions, organised by clinical presentation)",
      "● Pass mark: Set per sitting using statistical standardisation.Your results show your score and the score needed to pass."
    ],
  },
  {
    id: "syllabus",
    heading: "PLAB 1 Syllabus / Blueprint",
    paragraphs: [
      "PLAB 1 content is mapped to the GMC's MLA content map, which organises clinical knowledge by presentation (e.g. chest pain, breathlessness) rather than by specialty alone. Broad areas covered include:",
      "● Medicine (cardiology, respiratory, gastroenterology, endocrinology, renal, neurology, haematology, infectious disease).",
      "● Surgery and peri-operative care",
      "● Obstetrics & gynaecology",
      "● Paediatrics",
      "● Psychiatry and mental health",
      "● Prescribing and therapeutics ",
      "● Ethics, law, and professionalism (Good Medical Practice)",
      "● Public health and population medicine",
       {
        beforeLink: "",
        linkText: "MLA content map",
        href: "https://www.gmc-uk.org/cdn/documents/251015---mla-content-map--english-_pdf-112647970.pdf",
        afterLink: "",
      },
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility & Registration Process",
    paragraphs: [
      "● Primary medical qualification listed in the World Directory of Medical Schools and accepted by the GMC.",
      "● English language evidence: IELTS Academic (typically 7.5 overall, minimum 7.0 in each component) or OET Grade B.",
      "● A verified GMC Online account",
      "● Primary qualification verified via EPIC (or equivalent) where required",
      "● Booking is done directly through the candidate's GMC Online account once eligibility is confirmed",
      "Registration Process:",
       "Create GMC Online account → Upload and verify primary qualification and English language evidence → Wait for eligibility confirmation → Book an available PLAB 1 seat when released."
    ],
  },
  {
    id: "dates",
    heading: "PLAB 1 Dates & Fees",
    paragraphs: [
      "PLAB 1 runs four times a year, in February, May, August and November. From 2027, it is held only in the UK and the EU. The GMC is no longer taking new bookings for overseas centres. If you already have a booking at an overseas centre, your exam will still go ahead as planned",
      "UK venues: Belfast, Birmingham, Cardiff, Edinburgh, London, Manchester, Newcastle, Oxford and Sheffield.",
      "EU venues: Dublin and Madrid.",
      "Places are limited and fill quickly. Book through your GMC Online account. If you have a UK NHS job offer that needs GMC registration, or you hold UK refugee status, email plab@gmc-uk.org and the GMC will try to give you a place as soon as possible.",
       {
        beforeLink: "",
        linkText: "GMC: When and where can I take PLAB 1",
        href: "https://www.gmc-uk.org/registration-and-licensing/join-our-registers/plab/plab-1-guide/when-and-where-can-i-take-plab-1",
        afterLink: ".",
      },
     
    ],
  },
  {
    id: "prepare",
    heading: "How to Prepare for PLAB 1",
    paragraphs: [
      "Effective PLAB 1 preparation centres on applying knowledge to 'most appropriate next step' clinical reasoning rather than exhaustive textbook recall — GMC's SBA questions are deliberately designed to test decision-making under UK guidelines (principally NICE), not simply factual knowledge.",
      "● Work through the full MLA content map systematically rather than topic-hopping.",
      "● Practise high volumes of realistic SBA questions under timed conditions",
      "● Anchor every answer to current NICE guidance and UK-standard first-line management, not home-country protocols",
      "● Sit at least one full-length, correctly-timed mock exam before the real sitting"
    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach's PLAB 1 / UKMLA-AKT preparation is built around three components:",
      "● SmartQBank — 5,000+ high-yield SBA questions mapped to the current MLA content map",
      "● SmartNotes — rapid revision summaries organised by clinical presentation",
      "● SmartMock — unlimited realistic 180-question, 180-minute practise exams",
      "Courses are led by Dr Karam Singh (M.D., MRCGP), NHS GP and founder of PLABcoach with over a decade of experience preparing IMGs for UK licensing exams.",
      "While no course can guarantee an exam result, structured preparation can improve exam readiness and help candidates avoid the mistakes that often lead to repeat attempts."
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "● International medical graduates preparing for their first PLAB 1 attempt.",
      "● Candidates who have attempted PLAB 1 before and want a more structured, feedback-driven approach",
      "● Doctors who know their home-country clinical practise well but need to recalibrate to UK/NICE-guideline-based decision-making",
      "● Candidates preparing remotely, before travelling for a British Council/international sitting",
      "● Doctors who want realistic, timed SBA practise rather than generic MCQ banks"
    ],
  },
];

const faqsPlab1: FAQItem[] = [
    {
    question: "What is PLAB 1?",
    answer:
      "PLAB 1 is the first part of the GMC’s Professional and Linguistic Assessments Board test, the main route for international medical graduates who want to register and work as doctors in the UK. It is an applied knowledge test. Rather than checking how many facts you can recall, it checks how well you use your knowledge to look after patients safely in a UK setting.",
  },
  {
    question: "Is PLAB 1 the same as the UKMLA AKT?",
    answer:
      "PLAB 1 meets the GMC’s Medical Licensing Assessment (MLA) requirements, so it is set to the same standard as the UKMLA Applied Knowledge Test that UK graduates sit. The GMC still uses the name PLAB for international candidates and expects to keep it for some time yet.",
  },
  {
    question: "What is the PLAB 1 exam format?",
    answer:
      " PLAB 1 is a written exam of 180 multiple choice questions, and you have three hours to answer them all. Each question opens with a short clinical scenario, then asks a question with five possible answers. You choose the single best one.",
  },
  {
    question: "What topics does PLAB 1 cover?",
    answer:
      "The exam can include any common, important or acute condition that a Foundation Year 2 (F2) doctor would see, including presentations common in emergency departments. It also covers how long-term conditions are managed in primary care. The advanced duties of a GP are not tested.",
  },
  {
    question: "Should I answer using UK practice or my home country’s practice?",
    answer:
      "Always UK practice. Questions are based on current UK best practice and the equipment you would find in a UK hospital. Answer according to published evidence, not the way things are done where you trained..",
  },
  {
    question: "When is PLAB 1 held?",
    answer:
      "The GMC runs PLAB 1 four times a year, in February, May, August and November. Once you are eligible, you can see the available dates in the PLAB booking service in your GMC Online account.",
  },
  {
    question: "Where can I sit PLAB 1?",
    answer:
      "In the UK, the exam runs in Belfast, Birmingham, Cardiff, Edinburgh, London, Manchester, Newcastle, Oxford and Sheffield. In the EU, you can sit it in Dublin or Madrid, and a number of international centres are run with the British Council. UK and EU candidates receive their venue address within seven days of the exam, while candidates at other overseas centres get venue details from the British Council.",
  },
    {
    question: "Are there any changes to PLAB 1 in 2027?",
    answer:
      "Yes. From February 2027, PLAB 1 will no longer run in Dhaka, Alexandria, Accra or Chennai, and the February sitting will only be held in UK and EU locations. If you planned to sit internationally in February 2027 and your English language evidence expires between 1 February and 31 May 2027, email plab@gmc-uk.org to ask about an extension before 19 March 2027.",
  },
    {
    question: "Who can book PLAB 1?",
    answer:
      "You need an acceptable primary medical qualification, approved evidence of your English language skills and a GMC Online account. Places can only be booked through GMC Online, by the account holder. Never share your login with an agent or third party, as the GMC treats this as misconduct and it can affect your future registration.",
  },
    {
    question: "How much does PLAB 1 cost?",
    answer:
      "The GMC sets the PLAB fees and lists the current amounts on its Fees page, under the PLAB tab. A cancellation fee applies if you cancel your booking, so check the current terms before you book.",
  },
   {
    question: "How should I prepare for PLAB 1?",
    answer:
      "Start with the MLA content map, which is the official guide to what the exam covers. The GMC also publishes a set of 85 sample questions written to the same content map, which are a good way to get used to the question style.",
  },
    {
    question: "When will I get my PLAB 1 results?",
    answer:
      "Results are published six weeks after the exam, and the GMC emails you when they are ready in the ‘My Tests’ section of GMC Online. Every correct answer earns one mark. Your results show your score, the score needed to pass and the average score across all candidates.",
  },
     
      {
    question: "How many times can I take PLAB 1?",
    answer:
      "You can keep sitting PLAB 1 until you have failed it four times. After a fourth fail, you can apply for one fifth and final attempt, but only after at least 12 months of further learning, shown through 12 months of clinical practice or a relevant postgraduate qualification. If the fifth attempt is unsuccessful, you can no longer sit PLAB.",
  },
      {
    question: "What happens after I pass PLAB 1?",
    answer:
      "You can apply for PLAB 2 straight away through GMC Online, though not until your PLAB 1 results have been issued. You must pass PLAB 2 within two years of passing PLAB 1, and the clock starts from the date you sat PLAB 1, not the date your results came out.",
  },
];

const comparisonPlab1: ComparisonTable = {
  heading: "PLAB 1 vs PRES 2 Comparison",
  // noteHeading: "",
  noteBullets: [
    {
    text:"The Irish Medical Council accepts a PLAB 1 pass as an alternative to PRES 2, so candidates who have passed PLAB 1 can apply directly for PRES 3. A PLAB 1 pass is valid for 2 years from the exam date.",
    linkText: "Irish Medical Council",
          href: "https://www.medicalcouncil.ie/registration-applications/pres/pre-registration-examination-system-pres-level-3/"}
          ,
    "PLAB 1 and PRES 2 are set independently by different regulators (GMC vs Irish Medical Council) and are not sat on a shared date or joint booking system, even though their content/standard is treated as equivalent.",
  ],
  colAHeader: "PLAB 1",
  colBHeader: "PRES 2",
  colAColor: "var(--course-detail-comparison-plab1-header)",
  colBColor: "var(--course-detail-comparison-pres2-header)",
  rows: [
    { feature: "Governing body", colA: "GMC (UK)", colB: "Irish Medical Council (IMC)" },
    { feature: "Format", colA: "180 SBA questions, 180 minutes", colB: "Written MCQ, clinical scenarios, ~3 hours" },
    { feature: "Registration granted", colA: "UK (GMC)", colB: "Ireland" },
    {
      feature: "Recognised equivalence",
      colA: "PLAB 1 → PRES 2 (accepted as an alternative). The GMC does not accept PRES 2 in place of PLAB 1.",
      colB: "Irish Medical Council recognises PLAB 1 pass as PRES 2-equivalent",
    },
  ],
  footerBtnUrl:
    "/pres-level-2-subscription-plans/",
    footerText:"Candidates targeting UK GMC registration primarily should sit PLAB 1; candidates targeting Ireland who already hold a PLAB 1 pass do not need to separately sit PRES 2.",

};

const relatedExamsDefault: RelatedExam[] = [
  {
    title: "PLAB 2 / UKMLA-CPSA",
    description: "the required next exam after passing PLAB 1",
    tags: [
      { label: "Next step", variant: 1 },
      { label: "plab-2-ukmla-cpsa", variant: 1 },
    ],
    image: "/plab_2_courses_img.webp",
    href: "/plab2-ukmla-cpsa-subscription/",
  },
  {
    title: "PRES 2 (Ireland)",
    description: "comparison/alternative pathway",
    tags: [
      { label: "Next step", variant: 2 },
      { label: "pres-2", variant: 2 },
    ],
    image: "/pres_2_courses_img.webp",
    href: "/pres-level-2-subscription-plans/",
  },
  {
    title: "UKFPO-NCA / UKFPO-PSA",
    description: "relevant once GMC registration is underway and Foundation Programme entry is being planned",
    tags: [
      { label: "Next step", variant: 3 },
      { label: "ukfpo-nca, /ukfpo-psa", variant: 3 },
    ],
    image: "/ukfpo_courses__indv_img.webp",
    href: "/national-clinical-assessment-nca-subscription-plans/",
  },
];

const tocPlab2: TocItem[] = [
  { id: "what-is", label: "What is PLAB 2?" },
  { id: "who-needs", label: "Who Needs to Take PLAB 2?" },
  { id: "format", label: "PLAB 2 Format & Stations" },
  { id: "skills", label: "Marking Domains" },
  { id: "eligibility", label: "Eligibility & Registration Process" },
  { id: "dates", label: "PLAB 2 Dates & Fees" },
  { id: "prepare", label: "How to Prepare for PLAB 2" },
  { id: "how-helps", label: "How PLABcoach Helps" },
  { id: "who-should", label: "Who Should Take This Course" },
];

const sectionsPlab2: CourseSection[] = [
  {
    id: "what-is",
    heading: "What is PLAB 2?",
    paragraphs: [
      "PLAB 2 is the practical, clinical component of the GMC's PLAB assessment — an Objective Structured Clinical Examination (OSCE) that tests whether an international medical graduate can safely manage real clinical encounters, not just recall knowledge. It is sat only after passing PLAB 1, and only at one of the GMC's two Clinical Assessment Centre sites in Manchester only.",
      "Since its alignment with the MLA content map, PLAB 2 is delivered to the same clinical and professional skills standard as the UKMLA Clinical and Professional Skills Assessment (CPSA) that UK medical graduates sit — the underlying competency bar is shared, even though IMGs continue to book an exam named PLAB 2.",
       {
        beforeLink: "",
        linkText: "GMC PLAB 2 guide",
        href: "https://www.gmc-uk.org/registration-and-licensing/join-the-register/plab/plab-2-guide/what-is-the-plab-2-exam",
        afterLink: "",
      },
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs to Take PLAB 2?",
    paragraphs: [
      "Any candidate who has passed PLAB 1 and wishes to proceed to full GMC registration must sit and pass PLAB 2. GMC requires PLAB 2 to be passed within 2 years of the PLAB 1 pass date (measured from the date PLAB 1 was sat, not the date results were issued) — candidates should factor this window into their booking timeline, since Manchester seats are in high demand.",
    ],
  },
  {
    id: "format",
    heading: "PLAB 2 Format & Stations",
    paragraphs: [
      "● Format: Objective Structured Clinical Examination (OSCE) (Uses simulated patients (actors),No examiner viva)",
      "● Stations: 16 scored stations.",
      "● Time per station: 8 minutes (Plus approximately 1.5–2 minutes of reading time between stations)",
      "● Total exam length: Approximately 3 hours (Full circuit)",
      "● Venue: GMC Clinical Assessment Centre, Manchester only.",
      "● Station types: History-taking, Physical examination, Practical procedures, Communication and counselling, Data interpretation ,Clinical management(e.g., ECG, X-ray, lab results)",
    ],
  },
  {
    id: "skills",
    heading: "Marking Domains",
    paragraphs: [
      "Each station is marked against three domains, applied consistently across the circuit:",
      "● Data gathering, technical and assessment skills — history-taking accuracy, examination technique, correct use of instruments",
      "● Clinical management skills — appropriate, UK-guideline-based decision-making and next steps",
      "● Interpersonal skills — communication, empathy, professionalism, and patient safety behaviours"
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility & Registration Process",
    paragraphs: [
      "● A valid PLAB 1 pass, within the current 2-year validity window",
      "● Primary medical qualification already verified (carried over from PLAB 1 booking)",
      "● A verified GMC Online account with PLAB 2 booking access unlocked after PLAB 1 results are issued",
      "● Candidates are responsible for securing any visa required to travel to and sit the exam in Manchester",
      "Registration Process:",
      "PLAB 1 pass confirmed → PLAB 2 booking option appears in GMC Online → select an available Manchester date → pay the fee to confirm the seat."
    ],
  },
  {
    id: "dates",
    heading: "PLAB 2 Dates & Fees",
    paragraphs: [
      "PLAB 2 fee: £1,036, effective from 1 April 2026-this is more consistently reported across sources than the PLAB 1 fee,since GMC revises fees annually each April.",
      "PLAB 2 runs year-round in Manchester (unlike PLAB 1's periodic international release cycle), but seats are still limited and candidates should book as early as their PLAB 1 result and 2-year window allow.",
    ],
  },
  {
    id: "prepare",
    heading: "How to Prepare for PLAB 2",
    paragraphs: [
      "PLAB 2 tests behaviour under time pressure, not theoretical knowledge — most candidates who don't pass on the first attempt already know the clinical content but lose marks on structure, time management, or communication within the 8-minute window.",
      "● Drill the 8-minute station structure repeatedly — opening, data gathering, examination/procedure, closing and safety-netting",
      "● Practise on manikins matching the type used in the real exam, not generic models",
      "● Rehearse high-stakes communication stations (breaking bad news, consent, capacity) specifically — these are consistently where marks are lost",
      "● Sit full-circuit mocks under real timing, not isolated station practise only"
    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach's PLAB 2 / UKMLA-CPSA preparation centres on hands-on, manikin-based practise rather than video-only learning:",
      "● Small-group live coaching with manikins matching real exam equipment.",
      "● Full-circuit simulated mock exams under real 8-minute timing",
      "● Communication and breaking-bad-news station coaching, delivered by NHS-experienced instructors",
      "Courses are led by Dr Karam Singh (M.D., MRCGP), NHS GP and founder of PLABcoach with over a decade of experience preparing IMGs for UK licensing exams.",
      "PLAB 2 Comprehensive Course 10 Days",
      "Our PLAB 2 Comprehensive Course is designed to provide structured preparation through a combination of online teaching, hands-on clinical skills training, and intensive OSCE practise.The programme includes:",
      "4 Days of Online Training covering Data Interpretation, History Taking, and Communication Skills.",
      "2 Days of LIVE OSCE Training with expert faculty guidance and real-exam focused scenarios.",
      "1 Day of Supervised SIMMAN practise to enhance confidence in managing acute and emergency scenarios.",
      "3 Days of OSCE practise Sessions with Manikins to develop practical skills and improve examination technique in a simulated clinical environment.",
      "While no course can guarantee an exam result, structured, feedback-driven OSCE practise can improve exam readiness and help candidates avoid the mistakes that most often lead to repeat attempts."
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "● Doctors who have passed PLAB 1 and are moving into practical OSCE preparation.",
      "● Candidates who know the clinical content well but need structured performance and station-timing practise.",
      "● Candidates who have attempted PLAB 2 before and want a more feedback-driven, targeted preparation strategy",
      "● Doctors who need to build confidence in communication-heavy stations (breaking bad news, consent, capacity)",
      "● Candidates preparing to travel to Manchester and wanting realistic, timed, manikin-based mock practise beforehand"
    ],
  },
];

const faqsPlab2: FAQItem[] = [
  {
    question: "What is PLAB 2?",
    answer:
      "PLAB 2 is a clinical and professional skills assessment (CPSA). It is a practical exam that looks at how you actually perform as a doctor: your clinical skills, knowledge and professional behaviour. The format is an objective structured clinical exam, usually called an OSCE.",
  },
  {
    question: "Is PLAB 2 the same as the UKMLA CPSA?",
    answer:
      "PLAB 2 meets the GMC’s Medical Licensing Assessment requirements for the CPSA, so it is held to the same standard expected of UK graduates. The GMC still calls it PLAB 2, and you will see both names used while the transition continues.",
  },
  {
    question: "What is the PLAB 2 exam format?",
    answer:
      "The exam has 16 scenarios, each lasting eight minutes, set up to feel like real clinical settings such as a GP consultation or an acute ward. The whole exam takes around three hours.",
  },
  {
    question: "How does a PLAB 2 station work?",
    answer:
      "Outside each room you read the instructions and patient information, then you go in and carry out the task. A timer tells you when to move to the next station. Some stations may involve a telephone consultation or a prescribing task, and the GMC gives you everything you need to complete them on the day.",
  },
  {
    question: "What does PLAB 2 cover?",
    answer:
      "Anything a Foundation Year 2 (F2) doctor could expect to meet at work. The focus is on applying your knowledge to patient care, not reciting facts, and everything is based on current published evidence rather than local practice. Drug names follow the latest edition of the British National Formulary (BNF).",
  },
  {
    question: "How is PLAB 2 marked?",
    answer:
      "Every station is marked across three areas, which the GMC calls domains. The first is data gathering, technical and assessment skills, such as history taking, examination and procedures. The second is clinical management, such as reaching a diagnosis, explaining it and agreeing a plan. The third is interpersonal skills: building rapport, using open and closed questions, involving the patient and showing professionalism and sound ethics.",
  },
  {
    question: "What is the PLAB 2 pass mark?",
    answer:
      "There is no fixed pass mark. To pass, you need to reach the overall pass mark and also pass a minimum number of stations. The overall pass mark is worked out from the cut score of each station plus a statistical margin, so it can differ between exam days and between the two centres.",
  },
   {
    question: "Where is PLAB 2 held?",
    answer:
      "PLAB 2 only runs at the GMC’s two Clinical Assessment Centre sites in Manchester: 3 Hardman Square (M3 3EB) and 3 Hardman Street (M3 3AW). The addresses look very similar, so check your booking confirmation carefully to see which one you are attending.",
  },
   {
    question: "When can I book PLAB 2?",
    answer:
      "PLAB 2 dates run all year round, but you can only see and book them in GMC Online once you have your PLAB 1 results. Demand can be high, so there may be a wait for a date. If you hold an NHS job offer that needs GMC registration, or you have UK refugee status, email plab@gmc-uk.org and the GMC will try to offer you an earlier place.",
  },
   {
    question: "Who is eligible to sit PLAB 2?",
    answer:
      "You need an acceptable overseas primary medical qualification and a valid PLAB 1 pass. You must pass PLAB 2 within two years of passing PLAB 1, counted from the date you sat PLAB 1.",
  },
   {
    question: "How much does PLAB 2 cost?",
    answer:
      "The current fee is listed on the GMC’s Fees page. Refugee doctors living in the UK get 50% off the PLAB 2 fee for their first two attempts, and can arrange this by calling the GMC on 0161 923 6602.",
  },
  {
    question: "When will I get my PLAB 2 results?",
    answer:
      "Results are published within a month of your exam, and the GMC emails you when they are ready in the ‘My Tests’ section of GMC Online. Results are not given out over the phone or at the centre reception.",
  },
  {
    question: "How many times can I take PLAB 2?",
    answer:
      "You have four attempts. After a fourth fail you can apply for a fifth and final attempt, once you have completed at least 12 months of further learning. If your PLAB 1 pass has expired by then, you may need to sit PLAB 1 again first.",
  },
  {
    question: "Can I appeal my PLAB 2 result?",
    answer:
      "Yes, but only on limited grounds, such as a problem on the day that affected your performance and was not resolved at the time. Appeals must reach the GMC within ten working days of your results being published. An appeal will not be accepted just because you feel you were under-marked or disagree with an examiner’s judgement.",
  },
  {
    question: "What happens after I pass PLAB 2?",
    answer:
      "You can apply for GMC registration with a licence to practise, and your application should be approved within two years of passing PLAB 2. If more than two years have passed, the GMC will ask for extra evidence of your knowledge and skills. In some cases, a recent PLAB 2 pass can also count as evidence of your English language skills when you register.",
  },
];
const comparisonPlab2: ComparisonTable = {
  heading: "PLAB 2 vs PRES 3 Comparison",
  noteHeading: "",
  noteBullets: [
    "",
  ],
  colAHeader: "PLAB 2",
  colBHeader: "PRES 3",
  colAColor: "var(--course-detail-comparison-plab1-header)",
  colBColor: "var(--course-detail-comparison-pres2-header)",
  rows: [
    { feature: "Governing body", colA: "GMC (UK)", colB: "Irish Medical Council (IMC)" },
    { feature: "What it tests", colA: "Clinical and professional skills, at F2 level", colB: "Communication, interpretation and practical skills" },
    { feature: "Format", colA: "16 eight-minute OSCE scenarios.", colB: "Two parts: a clinical exam of 12 stations, 8 minutes each, covering clinical scenarios and skills; and a separate interpretation skills exam, usually on paper (occasionally computer-based)" },
    { feature: "Duration", colA: "Around 3 hours", colB: "12 × 8-minute stations in the clinical exam, plus the interpretation exam" },
    {
      feature: "Where",
      colA: "Manchester only (two GMC sites)",
      colB: "Ireland; 2026 sittings were held in Cork and Dublin",
    },
    {
      feature: "Fee",
      colA: "See the GMC Fees page",
      colB: "€1,500",
    },
    {
      feature: "Results",
      colA: "Within a month",
      colB: "About six weeks; pass or fail",
    },
    {
      feature: "Recognised equivalence",
      colA: "A PLAB 2 pass exempts you from the whole PRES, including PRES 3",
      colB: "Not recognised by the GMC for UK registration",
    },
    {
      feature: "Registration granted",
      colA: "UK (GMC)",
      colB: "Ireland (IMC)",
    },



  ],
  footerBtnUrl:
    "/pres-3-osce-data-interpretation-subscription-plans/",
    footerText:" Candidates targeting UK GMC registration should sit PLAB 2 regardless; candidates also considering Ireland should check the Irish Medical Council's current position on PLAB 2 recognition before assuming exemption from PRES 3, since this is not yet finalised.",
};

const tocPres2: TocItem[] = [
  { id: "what-is", label: "What is PRES 2?" },
  { id: "who-needs", label: "Who Needs to Take PRES 2?" },
  { id: "format", label: "PRES 2 Format & Structure" },
  { id: "syllabus", label: "PRES 2 Syllabus" },
  { id: "eligibility", label: "Eligibility & Registration Process" },
  { id: "dates", label: "PRES 2 Dates & Fees" },
  { id: "prepare", label: "How to Prepare for PRES 2" },
  { id: "how-helps", label: "How PLABcoach Helps" },
  { id: "who-should", label: "Who Should Take This Course" },
];

const sectionsPres2: CourseSection[] = [
  {
    id: "what-is",
    heading: "What is PRES 2?",
    paragraphs: [
      "PRES 2 is the written knowledge component of Ireland's Pre-Registration Examination System (PRES), set by the Irish Medical Council (IMC). It is required for international medical graduates who qualified outside the EU/EEA and who do not hold a qualification or internship the IMC recognises as an exemption, before they can register to practise medicine in Ireland.",
      "PRES 2 must be passed before a candidate can attempt PRES 3, the OSCE and data interpretation component — the two levels are sat in a fixed, IMC-enforced sequence.",
       {
        beforeLink: "",
        linkText: "Irish Medical Council PRES Level 2",
        href: "https://www.medicalcouncil.ie/registration-applications/pres/what-is-the-pres-level-2-.html",
        afterLink: "",
      },
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs to Take PRES 2?",
    paragraphs: [
      "PRES 2 is required for IMGs who qualified outside the EU/EEA/Switzerland, do not hold a higher qualification or an internship the IMC deems equivalent to the Irish internship programme, and do not qualify for an exemption. Candidates who have passed the UK's PLAB 1 can use it in place of PRES 2 and apply directly for PRES 3.",
    ],
  },
  {
    id: "format",
    heading: "PRES 2 Format & Structure",
    paragraphs: [
      "● Question format: Multiple-choice questions, based on clinical scenarios.",
      "● Duration: Approximately 3 hours",
      "● Delivery: Written examination",
      "● Content areas:Obstetrics & gynaecology,Paediatrics,Psychiatry,Surgery,Medicine / general practise"
    ],
  },
  {
    id: "syllabus",
    heading: "PRES 2 Syllabus",
    paragraphs: [
      "PRES 2 tests theoretical knowledge and its application to clinical scenarios across five core areas:",
      "● Medicine / General practise",
      "● Surgery",
      "● Obstetrics & Gynaecology",
      "● Paediatrics",
      "● Psychiatry"
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility & Registration Process",
    paragraphs: [
      "● Primary medical qualification from a school outside the EU/EEA/Switzerland.",
      "● No qualifying exemption (e.g. relevant higher qualification, equivalent internship, or accepted alternative exam pass)",
      "● English language evidence: IELTS Academic (typically 7.5 overall, minimum 7.0 in each component) or OET Grade B.",
      "● Credentials verified via EPIC (Education Commission for Foreign Medical Graduates' verification service) before an eligibility decision is issued",
      "Registration Process: ",
      "● Submit application and credentials for IMC eligibility review",
      "● Credentials verified via EPIC ",
      "● Eligibility confirmed ",
      "● Booking link issued for PRES 2",
      "● Sit and pass PRES 2 before PRES 3"
    ],
  },
  {
    id: "dates",
    heading: "PRES 2 Dates & Fees",
    paragraphs: [
      "The Medical Council Irish publishes PRES sitting dates at the start of each calendar year.",
    ],
  },
  {
    id: "prepare",
    heading: "How to Prepare for PRES 2",
    paragraphs: [
      "● Work systematically through all five core content areas rather than favouring familiar specialties",
      "● Practise high volumes of clinical-scenario MCQs specifically written to the PRES syllabus, not generic MCQ banks",
      "● Time yourself against the full 3-hour format at least once before the real sitting",
      "● Review core obstetrics, paediatrics and psychiatry content in particular, as these are less heavily weighted in some competing exam syllabi and can be under-prepared as a result"
    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach's PRES 2 preparation includes:",
      "● SmartQBank for PRES 2 — question bank with online mock tests",
      "● Structured coverage across all five PRES 2 content areas",
      "Courses are led by Dr Karam Singh (M.D., MRCGP), NHS GP and founder of PLABcoach with over a decade of experience preparing IMGs for UK and Ireland licensing exams.",
      "While no course can guarantee an exam result, structured preparation across all five PRES 2 content areas can improve exam readiness and help candidates avoid the mistakes that often lead to repeat attempts."
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "● International medical graduates preparing for their first PRES 2 attempt.",
      "● Candidates who have attempted PRES 2 before and want more structured, feedback-driven revision.",
      "● Doctors who know their home-country clinical practise well but need Ireland-specific, IMC-aligned preparation.",
      "● Candidates weighing whether to sit PRES 2 or rely on a PLAB 1 exemption, and preparing either way.",
      "● Candidates preparing remotely ahead of a PRES 2 sitting."
   
    ],
  },
];

const faqsPres2: FAQItem[] = [
  {
    question: "What is PRES 2?",
    answer:
      "PRES 2 is the written multiple-choice exam component of Ireland's Pre-Registration Examination System, testing clinical knowledge across five core specialty areas.",
  },
  {
    question: "Do I need to pass PRES 2 before PRES 3?",
    answer:
      "Yes. The Irish Medical Council enforces a fixed sequence — PRES 2 must be passed before a candidate can sit PRES 3.",
  },
  {
    question: "Am I exempt from PRES 2 if I've passed PLAB 1?",
    answer:
      " Yes. The Irish Medical Council accepts a PLAB 1 pass in place of PRES 2, valid for two years from the exam date, so you can apply directly for PRES 3. A PLAB 2 pass goes further and exempts you from the whole PRES.",
  },
  {
    question: "What subjects does PRES 2 cover?",
    answer:
      "Medicine/general practise, surgery, obstetrics & gynaecology, paediatrics, and psychiatry.",
  },
  {
    question: "How long is the PRES 2 exam? ",
    answer:
      "Approximately 3 hours.",
  },
  {
    question: "How is PRES 2 different from PLAB 1?",
    answer:
      "See the comparison section below.",
  },
];

const tocPres3: TocItem[] = [
  { id: "what-is", label: "What is PRES 3?" },
  { id: "who-needs", label: "Who Needs to Take PRES 3?" },
  { id: "format", label: "PRES 3 Format & Stations" },
  { id: "data-interpret", label: "Domains Assessed" },
  { id: "eligibility", label: " Eligibility & Registration Process" },
  { id: "dates", label: "PRES 3 Dates & Fees" },
  { id: "prepare", label: "How to Prepare for PRES 3" },
  { id: "how-helps", label: "How PLABcoach Helps" },
  { id: "who-should", label: "Who Should Take This Course" },
];

const sectionsPres3: CourseSection[] = [
  {
    id: "what-is",
    heading: "What is PRES 3?",
    paragraphs: [
      "PRES 3 is the practical, clinical component of Ireland's Pre-Registration Examination System (PRES), set by the Irish Medical Council (IMC). It combines an Objective Structured Clinical Examination (OSCE) with a data interpretation assessment, and is the final exam step before an eligible international medical graduate can proceed toward Irish registration.",
      "Unlike PRES 2, which is a written exam, PRES 3 requires candidates to travel to Dublin in person — there is no remote or international sitting option.",
     {
        beforeLink: "",
        linkText: "Irish Medical Council PRES Level 3",
        href: "https://www.medicalcouncil.ie/registration-applications/pres/what-is-the-pres-level-3-.html",
        afterLink: "",
      },
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs to Take PRES 3?",
    paragraphs: [
      "Any candidate who has passed PRES 2 and does not hold an accepted exemption must sit and pass PRES 3 to proceed toward Irish Medical Council registration. Candidates who hold a PLAB 2 pass should check the Irish Medical Council's current position on PLAB 2 recognition before assuming automatic exemption from PRES 3 — as of mid-2026 this recognition was a proposed rule change,not yet confirmed."
    ],
  },
  {
    id: "format",
    heading: "PRES 3 Format & Stations",
    paragraphs: [
      "● Format: OSCE + data interpretation (Combined assessment)",
      "● Stations: Approximately 12 stations",
      "● Time per station: Approximately 8 minutes",
      "● Venue: In person in Dublin, Cork, Limerick and Galway (no international or remote sitting).",
      "● Station types:History taking,Physical examination,Communication, including breaking bad news,Prescribing safety,Practical procedures,Data interpretation"
    ],
  },
  {
    id: "data-interpret",
    heading: "Domains Assessed",
    paragraphs: [
      "PRES 3 stations assess candidates across three combined domains, consistent with Geeky Medics' and IMC-aligned prep resources:",
      "● Communication — patient interaction, breaking bad news, explaining diagnoses and management plans clearly",
      "● Interpretation — data interpretation across ECGs, blood results, blood gases, and radiology",
      "● Practical skills — clinical examination technique and procedural competence"
    ],
  },
  {
    id: "eligibility",
    heading: " Eligibility & Registration Process",
    paragraphs: [
      "● A valid PRES 2 pass (the sequence is fixed and enforced by the IMC's candidate portal — PRES 3 cannot be booked before PRES 2 is passed).",
      "● No qualifying exemption already in place",
      "● Credentials previously verified via EPIC (carried over from PRES 2 application)",
      "● Candidates are responsible for travel and accommodation in Dublin for the sitting"
    ],
  },
  {
    id: "dates",
    heading: "PRES 3 Dates & Fees",
    paragraphs: [
      "PRES 3 fee: set by the Irish Medical Council. See the current fee on the Medical Council's Fees page. It is usually the largest single cost in the Irish registration process.",
      "PRES 3 availability has historically been limited relative to demand — as of early 2026, reported figures showed several hundred candidates waiting to sit PRES 3, with only a small number of sittings run per year. This scarcity is the direct reason behind the Irish Medical Council's proposed PLAB 2 recognition (see comparison section below) — worth mentioning briefly in this section as useful context for candidates weighing their options, cited to a specific published source rather than stated as a general claim.",
    ],
  },
  {
    id: "prepare",
    heading: "How to Prepare for PRES 3",
    paragraphs: [
      "● Practise the full station circuit under real 8-minute timing, not isolated skills in isolation.",
      "● Prioritise data interpretation practise specifically — ECGs, blood gases, bloods, and radiology — as this is a distinct assessed domain, not just background knowledge",
      "● Rehearse communication-heavy stations (breaking bad news, explaining diagnoses) with a study partner or coach, since these are consistently harder to self-assess",
      "● Use manikins/simulators matching real exam equipment for practical procedure stations",
      "● Plan Dublin travel and accommodation early — sitting dates are limited and hotels near the venue fill quickly once dates are published"
    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach's PRES 3 preparation includes:",
      "● SmartNotes covering all assessed domains — communication, data interpretation, and practical skills",
      "● Self-Paced Mastery Videos for flexible, on-your-own-schedule preparation",
      "● Live Coaching, available both online and offline, with manikin-based practical skills training",
      "● Mock exams — OSCE mocks held live in Dublin, data interpretation mocks available online",
      "Courses are led by Dr Karam Singh (M.D., MRCGP), NHS GP and founder of PLABcoach with over a decade of experience preparing IMGs for UK and Ireland licensing exams.",
      "While no course can guarantee an exam result, structured, feedback-driven OSCE and data interpretation practise can improve exam readiness and help candidates avoid the mistakes that often lead to repeat attempts.",

    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "● Doctors who have passed PRES 2 and are moving into practical OSCE and data interpretation preparation.",
      "● Candidates who know the clinical content well but need structured station-timing and performance practise",
      "● Candidates who have attempted PRES 3 before and want more targeted, feedback-driven preparation",
      "● Doctors who need focused data interpretation practise (ECGs, blood gases, bloods, radiology) alongside clinical stations",
      "● Candidates planning travel to Dublin and wanting realistic mock practise beforehand"
    ],
  },
];

const faqsPres3: FAQItem[] = [
  {
    question: "What is PRES 3? ",
    answer:
      " PRES 3 is the OSCE and data interpretation exam that forms the clinical component of Ireland's Pre-Registration Examination System, sat in person in Dublin.",
  },
  {
    question: "Do I need to pass PRES 2 before PRES 3?",
    answer:
      "Yes. The Irish Medical Council enforces a fixed sequence — PRES 3 cannot be booked until PRES 2 has been passed.",
  },
  {
    question: "Can I sit PRES 3 outside Ireland?",
    answer:
      "No. Unlike PRES 2, PRES 3 is held only in person in Dublin.",
  },
  {
    question: "Am I exempt from PRES 3 if I've passed PLAB 2?",
    answer:
      "Yes. The Irish Medical Council accepts a PLAB 2 pass in place of the PRES, including PRES 3. Apply for General registration through the PRES route and upload the GMC email confirming your pass. If you passed more than three years ago and haven’t practised since, the Council will review your recency of practice.",
  },
  {
    question: "How many stations does PRES 3 have?",
    answer:
      "Approximately 12 stations, each around 8 minutes.",
  },
  {
    question: "What is the PRES 3 fee?",
    answer: {
      beforeLink:
        "The Irish Medical Council sets the PRES 3 fee. See the current fee on the Medical Council's ",
      linkText: "Fees page",
      href: "https://www.medicalcouncil.ie/registration-applications/fees/",
      afterLink: ", under Pre-Registration Exam System.",
    },
  },
];
const comparisonPres3: ComparisonTable = {
  heading: "PRES 3 vs PLAB 2 Comparison",
  noteHeading: "",
  // noteBullets: [
  //   "The Irish Medical Council already treats PLAB 1 as equivalent to PRES 2 in practise — candidates who pass PLAB 1 can be exempted from sitting PRES 2.",
  //   "PLAB 1 and PRES 2 are set independently by different regulators (GMC vs Irish Medical Council) and are not sat on a shared date or joint booking system, even though their content/standard is treated as equivalent.",
  // ],
  colAHeader: "PRES 3",
  colBHeader: "PLAB 2",
  colAColor: "var(--course-detail-comparison-plab1-header)",
  colBColor: "var(--course-detail-comparison-pres2-header)",
  rows: [
    { feature: "Governing body", colA: "Irish Medical Council (IMC)", colB: "GMC (UK)" },
    { feature: "Format", colA: "OSCE + data interpretation, ~12 stations", colB: "16-station OSCE, 8 minutes each" },
    { feature: "Registration granted", colA: "Ireland", colB: "UK (GMC)" },
    {
      feature: "Recognised equivalence",
      colA: "A PLAB 2 pass exempts you from the PRES (Irish Medical Council)",
      colB: "Irish Medical Council recognises PLAB 2 as a PRES 3 alternative",
    },
    { feature:" Venue", colA: "Dublin, Cork, Limerick and Galway, in person", colB: "Manchester only, in person" },
  ],
  footerBtnUrl:
    "/plab2-ukmla-cpsa-subscription/",
    footerText:"If you already hold a PLAB 2 pass, you don’t need to sit PRES 3. You can apply for Irish registration directly.",
};

const tocNca: TocItem[] = [
  { id: "what-is", label: "What is the UKFPO-NCA?" },
  { id: "who-needs", label: "Who Needs to Take the UKFPO-NCA?" },
  { id: "format", label: "UKFPO-NCA Format & Stations" },
  { id: "syllabus", label: "Standard Assessed" },
  { id: "eligibility", label: "Eligibility & Registration Process" },
  { id: "dates", label: " UKFPO-NCA Dates & Fees" },
  { id: "prepare", label: "How to Prepare for the UKFPO-NCA" },
  { id: "how-helps", label: "How PLABcoach Helps" },
  { id: "who-should", label: "Who Should Take This Course" },
];

const sectionsNca: CourseSection[] = [
  {
    id: "what-is",
    heading: "What is the UKFPO-NCA?",
    paragraphs: [
      "The NCA is the UKFPO’s clinical assessment for Foundation Programme applicants who qualified before the cutoff date for their round. It is delivered by Manchester University NHS Foundation Trust at Wythenshawe Hospital and Oxford Road Campus, and a pass stays valid for the following year’s round too."
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs to Take the UKFPO-NCA?",
    paragraphs: [
      "Any candidate applying to the UK Foundation Programme who qualified from medical school on or before the cycle's cutoff date must take and pass the Clinical Assessment as a condition of eligibility — regardless of citizenship, nationality, country of medical school, or current GMC registration status.",
      "Common misconception: passing PLAB does NOT exempt a candidate from the UKFPO-NCA. PLAB satisfies GMC registration requirements; the UKFPO-NCA separately assesses clinical readiness to begin Foundation training. The two serve different purposes and neither substitutes for the other.",
    ],
  },
  {
    id: "format",
    heading: "UKFPO-NCA Format & Stations",
    paragraphs: [
      "● Format: Clinical Competence Assessment (CCA), in-person",
      "● Stations: 12 stations",
      "● Time per station: 10 minutes (Includes 1 minute of preparation time)",
      "● Total session length: Approximately 4 hours (Single sitting)",
      "● Delivery body: Manchester University NHS Foundation Trust, on behalf of UKFPO"
    ],
  },
  {
    id: "syllabus",
    heading: "Standard Assessed",
    paragraphs: [
      "The level of knowledge and clinical skill required is that of a recently qualified graduate from a UK medical school who is about to start work as an F1 doctor — i.e. the same practical standard expected of any UK graduate entering the Foundation Programme, applied consistently to IMG candidates."
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility & Registration Process",
    paragraphs: [
      "● Eligibility is determined automatically as part of the UKFP application process — candidates do not opt in or register for the UKFPO-NCA separately; the UKFPO identifies who is required to sit it based on qualification date.",
      "● The qualification cutoff date (3 August 2025 for UKFP 2027) changes each year. Check the date for your application year on the UKFPO website.",
      "● Once eligibility is confirmed, UKFPO contacts the candidate directly with payment instructions — candidates should not attempt payment before receiving this email",
      "● Missing the payment window results in automatic application withdrawal — no grace period, no exceptions",
      {
        beforeLink: "",
        linkText: "UKFPO Clinical Assessment",
        href: "https://foundationprogramme.nhs.uk/programmes/2-year-foundation-programme/eligibility-information/ukfp-2027-eligibility-applications-what-you-will-need/clinical-assessment/",
        afterLink: "",
      },

    ],
  },
  {
    id: "dates",
    heading: " UKFPO-NCA Dates & Fees",
    paragraphs: [
      {
        beforeLink: "Fee has changed between recent cycles — reported at £850 for the UKFP2026 cycle (",
        linkText: "foundationprogramme.nhs.uk",
        href: "https://foundationprogramme.nhs.uk/programmes/2-year-foundation-programme/eligibility-information/ukfp-2027-eligibility-applications-what-you-will-need/clinical-assessment/",
        afterLink: ") rising to a reported £1,000 for the UKFP2027 cycle.",
      },
    ],
  },
  {
    id: "prepare",
    heading: "How to Prepare for the UKFPO-NCA",
    paragraphs: [
      "Manchester University NHS Foundation Trust explicitly states it does not recommend or endorse any specific training course for this assessment — preparation content should be framed as general skills-building support, not as an officially endorsed pathway.",
      "● Practise the 12-station CCA format specifically — short, focused stations with only 1 minute of preparation time reward speed and structure",
      "● Focus on core F1-level ward skills: safe prescribing, escalation, basic procedures, and clear communication under time pressure",
      "● Rehearse under realistic timing — 10 minutes total per station, including reading and prep",
      "● Review UK-specific ward processes and terminology if coming from a non-UK clinical background, since the standard assessed is explicitly that of a UK F1 starter"
    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach's UKFPO-NCA preparation includes:",
      "● SmartNotes covering the UKFPO-NCA station format",
      "● Self-Paced Mastery Videos for flexible preparation",
      "● Live Coaching with Dr. Karam Singh and Dr. Anjum Kohli, online and offline",
      "● SmartMocks Online & Offline",
      "● Manikin practise - practise till your Exam",
      "● One Day Crash Course",
      "While no course can guarantee an exam result, structured station practise can improve exam readiness and help candidates avoid the mistakes that often lead to repeat attempts."
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "● International medical graduates applying to the UK Foundation Programme who qualified on or before the current cycle's cutoff date",
      "● Candidates who already hold a PLAB pass but haven't realised this doesn't exempt them from the UKFPO-NCA",
      "● Doctors who need to recalibrate to UK ward-level F1 practise, prescribing, and escalation norms",
      "● Candidates who have attempted the UKFPO-NCA before and want more structured, timed station practise",
      "● Candidates preparing remotely before their assessment date"
    ],
  },
];

const faqsNca: FAQItem[] = [
  {
    question: "What does UKFPO-NCA stand for?",
    answer:
      "UKFPO-NCA stands for National Clinical Assessment. The UKFPO's own materials label it the 'Clinical Assessment' — both refer to the same eligibility requirement for the UK Foundation Programme.",
  },
  {
    question: "Does passing PLAB exempt me from the UKFPO-NCA?",
    answer:
      "No. PLAB satisfies GMC registration requirements; the UKFPO-NCA separately confirms clinical readiness for Foundation training. Passing one does not exempt a candidate from the other.",
  },
  {
    question: "Who has to take the UKFPO-NCA? ",
    answer:
      " Candidates applying to the UK Foundation Programme who qualified from medical school on or before the current cycle's cutoff date, regardless of nationality or GMC registration status.",
  },
  {
    question: "How many stations does the UKFPO-NCA have?",
    answer:
      " 12 stations, each 10 minutes including 1 minute of preparation time, in a single session of approximately 4 hours.",
  },
  {
    question: "What happens if I miss the UKFPO-NCA payment window?",
    answer:
      "Your UKFP application is automatically withdrawn — there is no grace period or exception.",
  },
  {
    question: "What is the current UKFPO-NCA fee?",
    answer:
      "The NCA fee for UKFP 2027 is £1,000, paid by the candidate. The UKFPO does not offer discounts or financial support.",
  },
];

const tocPsa: TocItem[] = [
  {
    id: "what-is", label: "What is the UKFPO-PSA?" },
  { id: "who-needs", label: "Who Needs to Take the UKFPO-PSA?" },
  {
    id: "format",
    label: "UKFPO-PSA Format & Question Types",
  },
  {
    id: "domains",
    label: "Standard Assessed",
  },
  { id: "eligibility", label: "Eligibility & Timing" },
  { id: "dates", label: " UKFPO-PSA Dates & Funding " },
  { id: "prepare", label: " How to Prepare for the UKFPO-PSA" },
  { id: "how-helps", label: "How PLABcoach Helps" },
  { id: "who-should", label: "Who Should Take This Course" },
];

const sectionsPsa: CourseSection[] = [
  {
    id: "what-is",
    heading: "What is the UKFPO-PSA?",
    paragraphs: [
      "The UKFPO Prescribing Safety Assessment (UKFPO-PSA) is a computer-based exam developed jointly by the British Pharmacological Society (BPS) and the Medical Schools Council (MSC). It tests the skills, judgement, and supporting knowledge required to prescribe medicines safely in the NHS, based on prescribing competencies the GMC defines for new medical graduates.",
      "Unlike the NCA, the PSA is not a pre-entry eligibility requirement for the Foundation Programme — it is a requirement to complete F1 and progress to F2. Most UK medical students sit and pass it during their final year at medical school; those who haven't, along with international medical graduates entering F1, sit it during the F1 year itself.",
      {
        beforeLink: "",
        linkText: "Prescribing Safety Assessment",
        href: "https://prescribingsafetyassessment.ac.uk",
        afterLink: "",
      },
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs to Take the UKFPO-PSA?",
    paragraphs: [
      "● All UK final-year medical students, as part of medical school assessment.",
      "● Any Foundation doctor who has not yet passed the PSA by the time they start F1, including international medical graduates entering F1 through the UK Foundation Programme",
      "● F2 Standalone post doctors — sitting is recommended by UKFPO but not mandatory for this group",
      "A doctor who has not passed the PSA by the end of F1 does not automatically fail — the ARCP panel will typically consider an extension to F1 to allow the assessment to be completed, provided all other F1 requirements are met."
    ],
  },
  {
    id: "format",
    heading: "UKFPO-PSA Format & Question Types",
    paragraphs: [
      "● Format: 60-question, computer-based examination (Developed by BPS and MSC).",
      "● Question types: Prescribing,Prescription review,Dose calculation,Adverse drug reaction / interaction identification,Medicines communication,Data interpretation for prescribing decisions.",
      "● Reference access:BNF and BNFc available via Medicines Complete throughout the examination."
      
    ],
  },
  {
    id: "domains",
    heading: "Standard Assessed",
    paragraphs: [
      "The PSA assesses competencies the GMC has defined for new medical graduates, including writing new prescriptions, reviewing and checking existing prescriptions, calculating drug doses accurately, identifying and avoiding adverse drug reactions and medication errors, and adjusting prescribing decisions to individual patient circumstances."
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility & Timing",
    paragraphs: [
      "● International medical graduates entering F1 through the UK Foundation Programme are expected to sit the PSA during F1, not before starting.",
      "● Candidates are supported through this process by their Foundation School, not by self-service booking as with PLAB or PRES",
    ],
  },
  {
    id: "dates",
    heading: " UKFPO-PSA Dates & Funding",
    paragraphs: [
      "Multiple sittings run across the academic year — recent published dates for the 2026/2027 cycle include 24 September 2026 (foundation year doctors), with further sittings in January, March, April and June 2027."
    ],
  },
  {
    id: "prepare",
    heading: " How to Prepare for the UKFPO-PSA",
    paragraphs: [
      "● Work through each of the core question types individually — prescribing, review, calculation, adverse reaction identification, and communication — rather than generic pharmacology revision alone.",
      "● Practise dose calculations under time pressure, as this is a common area candidates lose marks in.",
      "● Get comfortable navigating the BNF/BNFc quickly, since it's available during the real exam and speed of lookup matters as much as knowledge",
      "● Use BPS's own free PSA Prep eLearning sessions as a baseline, then supplement with realistic timed practise"

    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach's UKFPO-PSA preparation includes:",
      "●SmartNotes covering all core PSA question types",
      "● Self-Paced Mastery Videos for flexible preparation",
      "● Live Coaching with Dr. Karam Singh and Dr. Anjum Kohli, online and offline",
      "While no course can guarantee an exam result, structured practise across all core question types can improve exam readiness and help candidates avoid the mistakes that often lead to repeat attempts."
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "● F1 doctors, including international medical graduates, who haven't yet passed the PSA and need to before progressing to F2",
      "● Candidates who are confident in clinical knowledge but want dedicated practise on dose calculations and prescribing scenarios specifically",
      "● Doctors who want to get fast and comfortable navigating the BNF/BNFc before sitting the real exam",
      "● Candidates who didn't sit or pass the PSA at medical school and are approaching it for the first time during F1"
    ],
  },
];

const faqsPsa: FAQItem[] = [
  {
    question: "What does PSA stand for?",
    answer:
      " PSA stands for Prescribing Safety Assessment — a 60-question exam developed by the British Pharmacological Society and the Medical Schools Council.",
  },
  {
    question: "Do I need to pass the PSA before starting F1? ",
    answer:
      "No. Most candidates sit the PSA during F1, not before starting. It is a requirement to progress from F1 to F2, not a pre-entry eligibility requirement like the NCA.",
  },
  {
    question: "Do I have to pay for the PSA?",
    answer:
      "The PSA is typically funded by UKFPO for Foundation doctors sitting it during F1.",
  },
  {
    question: "What happens if I don't pass the PSA during F1?",
    answer:
      " The ARCP panel will typically consider an extension to F1 to allow the assessment to be completed, provided all other F1 requirements have been met.",
  },
  {
    question: "Can I access the BNF during the exam?",
    answer:
      "Yes. The BNF and BNFc are available via Medicines Complete throughout the exam; UK candidates also have NICE BNF access. No personal notes are permitted in the BNF during the assessment.",
  },
  {
    question: "How is the UKFPO-PSA different from the UKFPO-NCA?",
    answer:
      "The NCA is a pre-entry eligibility requirement sat before applying to the Foundation Programme; the PSA is sat during F1 itself, to progress to F2. They test different things at different points in the pathway and neither substitutes for the other.",
  },
];
const tocMsra: TocItem[] = [
  {
    id: "what-is", label: "What is the MSRA?" },
  { id: "who-needs", label: "Who Needs to Take the MSRA?" },
  {
    id: "format",
    label: "MSRA Format & Papers",
  },
  {
    id: "domains",
    label: "How Scoring Works",
  },
  { id: "eligibility", label: "Eligibility & Registration Process" },
  { id: "dates", label: "MSRA Dates & Fees" },
  { id: "prepare", label: " How to Prepare for the MSRA" },
  { id: "how-helps", label: "How PLABcoach Helps" },
  { id: "who-should", label: "Who Should Take This Course" },
];

const sectionsMsra: CourseSection[] = [
  {
    id: "what-is",
    heading: "What is the MSRA?",
    paragraphs: [
      "The Multi-Specialty Recruitment Assessment (MSRA) is a computer-based selection exam used by NHS specialty recruitment as part of the application process for GP training (ST1) and several other UK specialty training programmes. It is designed to provide a consistent, standardised way of comparing applicants' professional judgement and clinical problem-solving ability.",
      "Both papers are based on the Foundation Programme curriculum and assess how well a candidate applies clinical knowledge to real decision-making — the MSRA is not a knowledge-recall exam in the way PLAB 1 is; it centres on judgement under realistic scenarios.",
      {
        beforeLink: "",
        linkText: "NHS England MSRA overview",
        href: "https://medical.hee.nhs.uk/medical-training-recruitment/medical-specialty-training/multi-specialty-recruitment-assessment-msra",
        afterLink: "",
      },
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs to Take the MSRA?",
    paragraphs: [
      "Candidates applying to GP training (ST1) and a number of other specialty training programmes that use the MSRA as part of their selection process must sit it. Which specialties use the MSRA in a given recruitment year, and what score threshold each sets, is published annually by the relevant specialty recruitment office."
    ],
  },
  {
    id: "format",
    heading: "MSRA Format & Papers",
    paragraphs: [
      "● Total Exam Length: Approximately 2 hours 55 minutes (Includes a 5-minute break between the two papers.)",
      "● Paper 1: Professional Dilemmas (PD) — 95 minutes, situational judgement test, 70 questions, ranking format",
      "● Paper 2: Clinical Problem Solving (CPS) — 75 minutes, clinical knowledge test, 50 questions, multiple-choice format",
      "● Delivery: Computer-based, at Pearson VUE test centres"
      
    ],
  },
  {
    id: "domains",
    heading: "How Scoring Works",
    paragraphs: [
      "A candidate's overall MSRA result combines their Professional Dilemmas score and Clinical Problem Solving score. Each participating specialty sets its own minimum threshold score for that recruitment round, and the combined score is also used to rank candidates against each other — meaning a pass on both papers does not guarantee a training post if competition for a specialty is high that year."
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility & Registration Process",
    paragraphs: [
      "● Eligibility is set by the specific specialty training programme(s) a candidate is applying to, not by a single universal MSRA eligibility rule.",
      "● Candidates typically apply through Oriel (the national recruitment platform) as part of their specialty application, with MSRA booking instructions issued once an application is accepted into the assessment stage",
    ],
  },
  {
    id: "dates",
    heading: "MSRA Dates & Fees",
    paragraphs: [
      "The MSRA runs in scheduled sitting windows tied to each recruitment round (commonly referenced rounds include a January window for posts starting later that year, and a September window for posts starting the following February)."
    ],
  },
  {
    id: "prepare",
    heading: " How to Prepare for the MSRA",
    paragraphs: [
      "● Practise Professional Dilemmas ranking questions specifically — remember only one action is ever 'most appropriate', not a sequence (A or B or C, not A then B).",
      "● Build familiarity with NHS structures, GMC ethical guidance (Good Medical practise), and typical primary/secondary care working environments, since PD questions assume this context.",
      "● For Clinical Problem Solving, drill across the full range of clinical topics rather than concentrating only on familiar specialties",
      "● Time both papers separately under realistic conditions — 95 minutes for PD, 75 minutes for CPS, with only a short break between"

    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach’s UKFPO-PSA preparation includes **SmartNotes covering all core MSRA question types**, along with **Self-Paced Mastery Videos** for flexible, independent preparation. Candidates can also access **Live Coaching with Dr. Karam Singh and Dr. Anjum Kohli**, available both online and offline.",
      "While no course can guarantee a training post, structured practise on both Professional Dilemmas and Clinical Problem Solving can improve exam readiness and help candidates avoid common scoring mistakes."
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "● Doctors applying to GP training (ST1) or another MSRA-using specialty programme.",
      "● Candidates who find Professional Dilemmas ranking questions unintuitive and want structured practise on judgement-based scenarios",
      "● Doctors who want focused Clinical Problem Solving revision across the full range of specialty topics",
      "● Candidates who have sat the MSRA before and want to improve their combined score for a more competitive specialty"
    ],
  },
];

const faqsMsra: FAQItem[] = [
  {
    question: "What does MSRA stand for?",
    answer:
      " Multi-Specialty Recruitment Assessment — a computer-based exam used in recruitment for GP training and several other UK specialty training programmes.",
  },
  {
    question: "What are the two MSRA papers? ",
    answer:
      "Professional Dilemmas (a 95-minute situational judgement test) and Clinical Problem Solving (a 75-minute clinical knowledge paper), completed in one sitting with a short break between.",
  },
  {
    question: "Does passing the MSRA guarantee a training post?",
    answer:
      "No. The MSRA score is used to rank candidates against each other for a limited number of posts, so a pass does not guarantee a place if competition for a specialty is high that year.",
  },
  {
    question: "Where is the MSRA held?",
    answer:
      "At Pearson VUE test centres, on computer, under exam conditions.",
  },
  {
    question: "Do all specialties use the same MSRA pass mark?",
    answer:
      "No. Each participating specialty sets its own minimum threshold score for each recruitment cycle.",
  }
];

const tocMrcpAkt: TocItem[] = [
  {
    id: "what-is", label: "What is the MRCGP AKT?" },
  { id: "who-needs", label: "Who Needs to Take the MRCGP AKT?" },
  {
    id: "format",
    label: "MRCGP AKT Format & Content Weighting",
  },
  {
    id: "domains",
    label: "Attempts & Fifth-Attempt Policy",
  },
  { id: "eligibility", label: "Eligibility & Registration Process" },
  { id: "dates", label: "MRCGP AKT Dates & Fees" },
  { id: "prepare", label: "How to Prepare for the MRCGP AKT" },
  { id: "how-helps", label: "How PLABcoach Helps" },
  { id: "who-should", label: "Who Should Take This Course" },
];

const sectionsMrcpAkt: CourseSection[] = [
  {
    id: "what-is",
    heading: "What is the MRCGP AKT?",
    paragraphs: [
      "The Applied Knowledge Test (AKT) is one component of the MRCGP examination set by the Royal College of General Practitioners (RCGP). It is a summative assessment of the knowledge base underpinning independent general practice in the UK within the context of the NHS, sat by doctors in GP specialty training.",
      "From October 2025, RCGP reduced the AKT from 200 items over 190 minutes to 160 items over 160 minutes, giving candidates slightly longer per item while shortening the overall exam.",
      {
        beforeLink: "",
        linkText: "RCGP Applied Knowledge Test",
        href: "https://rcgp.org.uk/training-exams/mrcgp-exam/mrcgp-applied-knowledge-test-akt",
        afterLink: "",
      },
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs to Take the MRCGP AKT?",
    paragraphs: [
      "The AKT is required for doctors in UK GP specialty training working toward MRCGP and GMC GP Register entry. To book the AKT, a candidate's MRCGP membership must be active — resigned, lapsed, or suspended membership will prevent booking, so this should be confirmed well ahead of any booking window."
    ],
  },
  {
    id: "format",
    heading: "MRCGP AKT Format & Content Weighting",
    paragraphs: [
      "● Format: 160 questions in 160 minutes, single-best-answer (SBA) and extended matching style.",
      "● Duration:160 minutes (Changed from 190 minutes, effective October 2025)",
      "● Content weighting: Approximately 80% clinical medicine, 10% critical appraisal and evidence-based practice, and 10% health informatics and administrative issues.",
      "● Delivery: Computer-based, at Pearson VUE test centres across the UK."
      
    ],
  },
  {
    id: "domains",
    heading: "Attempts & Fifth-Attempt Policy",
    paragraphs: [
      "RCGP allows an exceptional fifth attempt at the AKT (or SCA) on the basis of additional educational attainment, via a specific application process."
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility & Registration Process",
    paragraphs: [
      "● Active MRCGP membership is required before booking — check membership status in good time, since reinstating lapsed membership takes coordination with RCGP's membership team.",
      "● Candidates apply and book through MyRCGP (RCGP's membership portal), then complete payment before the final booking deadline.",
      "● Bookings can be made up to 12 months in advance; the final booking/payment deadline is typically 2–3 months ahead of the sitting.",
      "● From 1 April 2026, RCGP introduced a staged payment option — 25% of the fee at reservation or 6 months before the exam (whichever is later), a further 25% at 12 weeks before "
    ],
  },
  {
    id: "dates",
    heading: "MRCGP AKT Dates & Fees",
    paragraphs: [
      "The AKT runs four times a year — January, April, July, and October — at Pearson VUE centres across the UK. Recommend linking this section to the dedicated /exam-dates page rather than listing specific sitting dates here, since RCGP publishes exact dates and deadlines separately each year."
    ],
  },
  {
    id: "prepare",
    heading: "How to Prepare for the MRCGP AKT",
    paragraphs: [
      "● Weight your revision to match the exam's own content split — roughly 80% clinical medicine means the bulk of preparation time should go there, not evenly across all three areas.",
      "● Don't neglect the smaller-weighted areas (critical appraisal/evidence-based practise, health informatics/admin) — they're still worth roughly 20% combined and are often under-revised",
      "● Practise under the current 160-minute, 160-item timing specifically — resources describing the older 190-minute/200-item format will train the wrong pace",
      "● Use realistic single-best-answer and extended-matching style questions rather than generic MCQ banks not calibrated to AKT's specific format"

    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach’s current MRCGP-AKT course offering and materials should be confirmed with the team before this section is finalised. The live site currently lists MRCGP-AKT under “Upcoming Courses”, so specific details such as the question-bank size, question format, course structure, and delivery method should reflect the materials actually being developed rather than being inferred from the structure of other exam-preparation courses.",
      "While no course can guarantee an examination result, structured revision aligned with the AKT’s published content weighting can support exam readiness and help candidates identify and address potential gaps across the different assessment areas."
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "● GP trainees preparing for their first AKT sitting.",
      "● Candidates who have attempted the AKT before and want more structured, content-weighted revision",
      "● Trainees who are strong on clinical medicine but under-revise critical appraisal or health informatics — the smaller-weighted but still-scored areas",
       "● Doctors preparing under the current 160-item, 160-minute format who want practise calibrated to it, not the older 200-item version"

    ],
  },
];

const faqsMrcpAkt: FAQItem[] = [
  {
    question: "How many questions are on the current MRCGP AKT?",
    answer:
      " 160 items, over 160 minutes — changed from the previous 200 items over 190 minutes, effective October 2025.",
  },
  {
    question: "What does the AKT cover? ",
    answer:
      "Approximately 80% clinical medicine, 10% critical appraisal and evidence-based practice, and 10% health informatics and administrative issues.",
  },
  {
    question: "Do I need active MRCGP membership to book the AKT?",
    answer:
      "Yes. Resigned, lapsed, or suspended membership will prevent booking — confirm your status with RCGP well before a booking window opens.",
  },
  {
    question: "How much does the MRCGP AKT cost? ",
    answer:
      " £481 per RCGP's published fees page.",
  },
  {
    question: "How many times can I attempt the AKT?",
    answer:
      "RCGP does allow an exceptional fifth attempt on the basis of additional educational attainment, via a specific application.",
  },
  {
    question: "Is the MRCGP AKT the same as the MRCGP [INT.] South Asia AKT?",
    answer:
      "No. The MRCGP [INT.] South Asia AKT is a separate 200-question, 3.5-hour exam sat in Abu Dhabi or Karachi, leading to International Membership rather than UK GP registration. This page covers the standard UK AKT only.",
  }
];

// const COMMON_HERO_IMAGE = "/courses_individual_hero_image.webp";

const pathwayUkPlab = [
  { id: "p1", number: "01", label: "Check PLAB eligibility", icon: "eligibility" as const },
  {id: "p2", number: "02", label: "IELTS / OET", icon: "start-career" as const },
  { id: "p3", number: "03", label: "Pass PLAB 1", icon: "pass-plab1" as const },
  { id: "p4", number: "04", label: "Prepare for PLAB 2", icon: "prepare-plab2" as const },
  { id: "p5", number: "05", label: "Pass PLAB 2", icon: "pass-plab2" as const },
  { id: "p6", number: "06", label: "Apply for GMC registration", icon: "apply-registration" as const },
  { id: "p7", number: "07", label: "Start your UK medical career", icon: "start-career" as const },
];

const pathwayUkPlab2 = [
  { id: "p1", number: "01", label: "Pass PLAB 1", icon: "pass-plab1" as const },
  { id: "p2", number: "02", label: "Prepare for PLAB 2", icon: "prepare-plab2" as const },
  { id: "p3", number: "03", label: "Pass PLAB 2", icon: "pass-plab2" as const },
  { id: "p4", number: "04", label: "Apply for GMC registration", icon: "apply-registration" as const },
  { id: "p5", number: "05", label: "Start your UK medical career", icon: "start-career" as const },
];

const pathwayIrelandPres = [
  { id: "p1", number: "01", label: "Check PRES eligibility", icon: "eligibility" as const },
  { id: "p2", number: "02", label: "IELTS / OET", icon: "start-career" as const },
  { id: "p3", number: "03", label: "Pass PRES 2", icon: "pass-pres2" as const },
  { id: "p4", number: "04", label: "Prepare for PRES 3", icon: "prepare-pres3" as const },
  { id: "p5", number: "05", label: "Pass PRES 3", icon: "pass-pres3" as const },
  { id: "p6", number: "06", label: "Apply for Irish Medical Council registration", icon: "apply-imc" as const },
  { id: "p7", number: "07", label: "Start your Ireland medical career", icon: "start-career" as const },
];
const pathwayPres3 = [
  { id: "p1", number: "01", label: "Pass PRES 2", icon: "pass-pres2" as const },
  { id: "p2", number: "02", label: "Prepare for PRES 3", icon: "prepare-pres3" as const },
  { id: "p3", number: "03", label: "Pass PRES 3", icon: "pass-pres3" as const },
  { id: "p4", number: "04", label: "Apply for Irish Medical Council registration", icon: "apply-imc" as const },
  { id: "p5", number: "05", label: "Start your Ireland medical career", icon: "start-career" as const },
];
const pathwayNca = [
  { id: "p1", number: "01", label: "Meet UKFP eligibility", icon: "eligibility" as const },
  { id: "p2", number: "02", label: "Pass the UKFPO-NCA", icon: "pass-nca" as const },
  { id: "p3", number: "03", label: "Apply to the UK Foundation Programme", icon: "apply-fp" as const },
  { id: "p4", number: "04", label: "Start F1", icon: "start-career" as const },
  { id: "p5", number: "05", label: "Pass the UKFPO-PSA and progress to F2", icon: "pass-psa" as const },
];
const pathwayPsa = [
  { id: "p1", number: "01", label: "Start F1", icon: "start-career" as const },
  { id: "p2", number: "02", label: "Pass the UKFPO-PSA", icon: "pass-psa" as const },
  { id: "p3", number: "03", label: "Progress to F2", icon: "eligibility" as const },
  { id: "p4", number: "04", label: "Complete the Foundation Programme", icon: "apply-registration" as const },
  { id: "p5", number: "05", label: "Apply for GP or specialty training (e.g. via MSRA)", icon: "apply-fp" as const },
];
const pathwayUkFoundation = [
  { id: "p1", number: "01", label: "Start GP specialty training", icon: "eligibility" as const },
  { id: "p2", number: "02", label: "Pass the MRCGP AKT", icon: "prepare-nca" as const },
  { id: "p3", number: "03", label: "Pass the MRCGP SCA", icon: "pass-nca" as const },
  { id: "p4", number: "04", label: "Complete MRCGP requirements", icon: "pass-psa" as const },
  { id: "p5", number: "05", label: "Join the GMC GP Register", icon: "apply-fp" as const }
];
const pathwayMsra = [
  { id: "p1", number: "01", label: "Apply to GP", icon: "apply-fp" as const },
  { id: "p2", number: "02", label: "Sit the MSRA", icon: "prepare-nca" as const },
  { id: "p3", number: "03", label: "Ranking/shortlisting based on MSRA score", icon: "pass-nca" as const },
  { id: "p4", number: "04", label: "Interview or offer stage", icon: "eligibility" as const },
  { id: "p5", number: "05", label: "Start specialty training (e.g. GP ST1)", icon: "apply-fp" as const },
];
export const courseDetails = {
  "plab-1-ukmla-akt": {
    slug: "plab-1-ukmla-akt",
    eyebrow: "PLAB 1 / UKMLA-AKT",
    title: "PLAB 1 (UKMLA AKT) 2026: \nFormat & Prep | PLABcoach",
    metaTitle: "PLAB 1 / UKMLA-AKT Exam 2026 – Format, Syllabus & Preparation | PLABcoach",
    metaDescription: "PLAB 1 (UKMLA-AKT) is GMC's 180-question written exam for IMGs seeking UK registration. Learn the format, syllabus, dates and how PLABcoach's SmartQBank & courses help you pass.",
    ogImage: "/og/plab1.webp",
    heroImage: "/course_one.webp",
    heroDescription:
      "PLAB 1 is the written knowledge exam set by the General Medical Council (GMC), part of the two-part PLAB assessment that international medical graduates (IMGs) must pass for UK medical registration. It consists of 180 single-best-answer (SBA) questions completed in 180 minutes, testing clinical knowledge at the standard expected of a doctor starting Foundation Year 2 (F2). Passing PLAB 1 is the prerequisite step before sitting PLAB 2, the clinical OSCE.",
    toc: tocPlab1,
    sections: sectionsPlab1,
     faqTitle:"PLAB 1 FAQs",
    faqs: faqsPlab1,
    faqCta: {
      title: "Still have a question?",
      text: "Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!",
      buttonLabel: "Contact us",
    },
    comparison: comparisonPlab1,
    relatedExams: relatedExamsDefault,
    pathway: pathwayUkPlab,
    videoId: "weKtryoKwqc",
    videoTitle: "Ace PLAB1 With PLABcoach",
    ctaTitle: "READY TO ACE PLAB 1?",
    ctaCopy: "Choose your learning path and start your PLAB 1 / UKMLA preparation with PLABcoach today.",
    subscribeButtonLabel: "Start PLAB 1 Preparation",
    subscribeHref: "/course-plan?course=plab-1-ukmla-akt",
    syllabusHref: "https://www.gmc-uk.org/education/medical-licensing-assessment/mla-content-map",
    plabCoachHelpCta:"See SmartQBank Pricing",
    plabCoachHelpCtaHref:"/course-plan?course=plab-1-ukmla-akt" 
  },
  "plab-2-ukmla": {
    slug: "plab-2-ukmla",
    eyebrow: "PLAB 2 / UKMLA-CPSA",
    title: "PLAB 2 (UKMLA CPSA) 2026: \nOSCE Guide | PLABcoach",
    metaTitle: "PLAB 2 / UKMLA-CPSA Exam 2026 – OSCE Stations, Format & Preparation | PLABcoach",
    metaDescription: "PLAB 2 (UKMLA-CPSA) is GMC's 16-station OSCE for IMGs, held in Manchester. Learn the station format, marking domains, dates and how PLABcoach's manikin-based training helps you pass.",
    ogImage: "/og/plab2.webp",
    heroImage: "/course_two.webp",
    heroDescription:
      "PLAB 2 is the clinical OSCE set by the General Medical Council (GMC), the second and final part of the PLAB assessment for international medical graduates (IMGs). It consists of 16 eight-minute scenarios, held only at the GMC's two Clinical Assessment Centre sites in Manchester. Candidates are marked across three domains — data gathering, clinical management, and interpersonal skills — and must pass within 2 years of their PLAB 1 pass date.",
    toc: tocPlab2,
    sections: sectionsPlab2,
    faqTitle:"PLAB 2 FAQs",
    faqs: faqsPlab2,
    faqCta: {
      title: "Still have a question?",
      text: "Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!",
      buttonLabel: "Contact us",
    },
    comparison: comparisonPlab2,
    relatedExams: [
            {
        title: "PRES 3 (Ireland)",
        description: "",
        tags: [
          { label: "Comparison", variant: 2 },
          { label: "pres-3", variant: 2 },
        ],
        image: "/ireland_course.webp",
        href: "/pres-3-osce-data-interpretation-subscription-plans/",
      },
      {
        title: "UKFPO-NCA / UKFPO-PSA",
        description: " ",
        tags: [
          { label: "Next step", variant: 3 },
          { label: "ukfpo-nca, /ukfpo-psa", variant: 3 },
        ],
        image: "/uk_course.webp",
        href: "/national-clinical-assessment-nca-subscription-plans/",
      },
      {
        title: "PLAB 1 / UKMLA-AKT",
        description: "",
        tags: [
          { label: "Prerequisite", variant: 1 },
          { label: "plab-1-ukmla-akt", variant: 1 },
        ],
        image: "/plab1_course.webp",
        href: "/plab1-ukmla-akt-subscription-plans/",
      },

      
    ],
    pathway: pathwayUkPlab2,
    videoId: "6nXIgV_8TVY",
    videoTitle: "PLAB 2 / UKMLA clinical skills preparation with PLABCoach",
    ctaTitle: "READY TO ACE PLAB 2?",
    ctaCopy: "Choose your learning path and start your PLAB 2 / UKMLA clinical preparation with PLABCOACH today.",
    subscribeButtonLabel: "Start PLAB 2 Preparation",
    subscribeHref: "/course-plan?course=plab-2-ukmla-cpsa",
    plabCoachHelpCta:"PLAB 2 Course",
    plabCoachHelpCtaHref:"/course-plan?course=plab-2-ukmla-cpsa"
  },
  "pres-2": {
    slug: "pres-2",
    eyebrow: "PRES LEVEL 2",
    title: "PRES 2 Exam Ireland 2026: \nFormat & Prep | PLABcoach",
    metaTitle: "PRES 2 Exam Ireland 2026 – Format, Syllabus & Preparation | PLABcoach",
    metaDescription: "PRES 2 is the Irish Medical Council's written exam for international medical graduates. Learn the format, syllabus, fees and how PLABcoach's SmartQBank helps you pass.",
    ogImage: "/og/pres2.webp",
    heroImage: "/course_three.webp",
    heroDescription:
      "PRES 2 is the written multiple-choice exam set by the Irish Medical Council (IMC), the first sat component of Ireland's Pre-Registration Examination System (PRES) for international medical graduates seeking Irish registration. It tests clinical knowledge across obstetrics & gynaecology, paediatrics, psychiatry, surgery, and medicine/general practice through clinical-scenario-based questions. Candidates must pass PRES 2 before attempting PRES 3, the OSCE component.",
    toc: tocPres2,
    sections: sectionsPres2,
    faqTitle:"PRES 2 FAQs",
    faqs: faqsPres2,
    faqCta: {
      title: "Still have a question?",
      text: "Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!",
      buttonLabel: "Contact us",
    },
    comparison: {
      heading: "PRES 2 vs PLAB 1 Comparison",
      noteHeading: "",
      noteBullets: [
        {
          text: "The Irish Medical Council accepts a PLAB 1 pass as an alternative to PRES 2, so PLAB 1 pass holders can apply directly for PRES 3. A PLAB 1 pass is valid for 2 years from the exam date.",
          linkText: "Irish Medical Council",
          href: "https://www.medicalcouncil.ie/registration-applications/pres/pre-registration-examination-system-pres-level-3/",
        },
        "PRES 2 and PLAB 1 remain separate exams, booked and run independently by their respective regulators (Irish Medical Council vs GMC), even where mutual recognition applies.",
      ],
      colAHeader: "PRES 2",
      colBHeader: "PLAB 1",
      colAColor: "var(--course-detail-comparison-pres2-header)",
      colBColor: "var(--course-detail-comparison-plab1-header)",
      rows: [
        { feature: "Governing body", colA: "Irish Medical Council (IMC)", colB: "GMC (UK)" },
        { feature: "Format", colA: "Written MCQ, clinical scenarios, ~3 hours", colB: "180 SBA questions, 180 minutes" },
        { feature: "Registration granted", colA: "Ireland", colB: "UK (GMC)" },
        {
          feature: "Recognised equivalence",
          colA: "Irish Medical Council recognises PLAB 1 pass as PRES 2-equivalent",
          colB: "PLAB 1 → PRES 2. The GMC does not accept PRES 2 in place of PLAB 1.",
        },
      ],
      footerBtnUrl:
        "/plab1-ukmla-akt-subscription-plans/",
        footerText:"Candidates targeting Ireland who don't yet hold a PLAB 1 pass should sit PRES 2 directly; candidates who already hold a PLAB 1 pass should check current IMC exemption rules before booking PRES 2, as they may not need to sit it separately.",
    },
    relatedExams: [
      {
        title: "PRES 3 ",
        description: "Required next exam after passing PRES 2",
        tags: [
          { label: "Next step", variant: 2 },
          { label: "pres-3", variant: 2 },
        ],
        image: "/ireland_course.webp",
        href: "/pres-3-osce-data-interpretation-subscription-plans/",
      },
      {
        title: "PLAB 1 / UKMLA-AKT",
        description: "Comparison/alternative pathway for UK-focused candidates",
        tags: [
          { label: "Comparison", variant: 1 },
          { label: "plab-1-ukmla-akt", variant: 1 },
        ],
        image: "/plab1_course.webp",
        href: "/plab1-ukmla-akt-subscription-plans/",
      },
    ],
    pathway: pathwayIrelandPres,
    videoId: "cfrFBCcj840",
    videoTitle: "Crack PRES2 with Confidence",
    ctaTitle: "READY TO ACE PRES 2?",
    ctaCopy: "Choose your learning path and start your PRES 2 preparation with PLABCOACH today.",
    subscribeButtonLabel: "Subscribe to SmartQBank for PRES 2",
    subscribeHref: "/course-plan?course=pres-2",
    plabCoachHelpCta:"Subscribe to SmartQBank for PRES 2",
    plabCoachHelpCtaHref:"/course-plan?course=pres-2"
  },
  "pres-3-osce": {
    slug: "pres-3-osce",
    eyebrow: "PRES 3",  
    title: "PRES 3 Ireland 2026: \nOSCE & Data Interpretation",
    metaTitle: "PRES 3 Exam Ireland 2026 – OSCE & Data Interpretation Guide | PLABcoach",
    metaDescription: "PRES 3 is the Irish Medical Council's OSCE and data interpretation exam for international medical graduates, held in Dublin. Learn the format, stations and how PLABcoach helps you pass.",
    ogImage: "/og/pres3.webp",
    heroImage: "/course_four.webp",
    heroDescription:
      "PRES 3 is the clinical OSCE and data interpretation exam set by the Irish Medical Council (IMC), the second and final component of Ireland's Pre-Registration Examination System (PRES) for international medical graduates. It is held in person in Dublin to It is held in person in Dublin, Cork, Limerick and Galway, combining an Objective Structured Clinical Examination (OSCE) of roughly 12 stations with a data interpretation assessment. Candidates must pass PRES 2 before they are eligible to sit PRES 3.",
    toc: tocPres3,
    sections: sectionsPres3,
    faqTitle:"PRES 3 FAQs",
    faqs: faqsPres3,
    faqCta: {
      title: "Still have a question?",
      text: "Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!",
      buttonLabel: "Contact us",
    },
    comparison: comparisonPres3,
    relatedExams: [
       {
        title: "PLAB 2 / UKMLA-CPSA",
        description: "Comparison/alternative pathway",
        tags: [
          { label: "Comparison", variant: 1 },
          { label: "plab-2-ukmla-cpsa", variant: 1 },
        ],
        image: "/plab_2_courses_img.webp",
        href: "/plab2-ukmla-cpsa-subscription/",
      },
      {
        title: "PRES 2 ",
        description: "written exam required or exempted before PRES 3",
        tags: [
          { label: "Prerequisite", variant: 2 },
          { label: "pres-2", variant: 2 },
        ],
        image: "/ireland_course.webp",
        href: "/pres-level-2-subscription-plans/",
      }
    ],
    pathway: pathwayPres3,
    videoId: "LXPbAtgIitI",
    videoTitle: "Preparing Doctors for Safe, Ethical & Effective Medical practise in Ireland",
    ctaTitle: "READY TO ACE PRES 3?",
    ctaCopy: "Choose your learning path and start your preparation with PLABCOACH today.",
    subscribeButtonLabel: "Start PRES 3 Preparation",
    subscribeHref: "/course-plan?course=pres-3",
    plabCoachHelpCta:"Subscribe — PRES 3 OSCE & Data Interpretation",
    plabCoachHelpCtaHref:"/course-plan?course=pres-3"
  },
  "national-clinical-assessment": {
    slug: "national-clinical-assessment",
    eyebrow: "NCA",
    title: "UKFPO-NCA: Complete \nGuide to Format & Preparation",
    metaTitle: "UKFPO-NCA Exam 2026 – Format & Preparation | PLABcoach",
    metaDescription: "The UKFPO-NCA is the UKFPO's required 12-station exam for eligible IMGs applying to the UK Foundation Programme. Learn the format, eligibility and how PLABcoach helps you pass.",
    ogImage: "/og/nca.webp",
    heroImage: "/course_five.webp",
    heroDescription:
      "The UKFPO National Clinical Assessment (UKFPO-NCA) is a mandatory eligibility requirement for the UK Foundation Programme, set by the UKFPO, required for any candidate who qualified from medical school on or before  3 August 2025, regardless of nationality or GMC registration status. Delivered by Manchester University NHS Foundation Trust, it consists of 12 stations, each 10 minutes long including 1 minute of preparation time, run in a single session lasting approximately 4 hours.",
    toc: tocNca,
    sections: sectionsNca,
    faqTitle: "UKFPO-NCA FAQs",
    faqs: faqsNca,
    faqCta: {
      title: "Still have a question?",
      text: "Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!",
      buttonLabel: "Contact us",
    },
    relatedExams: [
      {
        title: "UKFPO-PSA",
        description: "Prescribing Safety Assessment taken during Foundation Year 1",
        tags: [
          { label: "Next step", variant: 3 },
          { label: "prescribing-safety-assessment", variant: 3 },
        ],
        image: "/uk_course.webp",
        href: "/prescribing-safety-assessment-psa-subscription/",
      },
      {
        title: "PLAB 2 / UKMLA-CPSA",
        description: "relevant for GMC registration before UKFP applications",
        tags: [
          { label: "Prerequisite", variant: 1 },
          { label: "plab-1-ukmla-akt", variant: 1 },
        ],
        image: "/plab1_course.webp",
        href: "/plab2-ukmla-cpsa-subscription/",
      },
      // {
      //   title: "PLAB 2 / UKMLA-CPSA",
      //   description: "relevant for GMC registration before UKFP applications",
      //   tags: [
      //     { label: "Prerequisite", variant: 1 },
      //     { label: "plab-2-ukmla-cpsa", variant: 1 },
      //   ],
      //   image: "/plab_2_courses_img.webp",
      //   href: "/courses/plab-2-ukmla",
      // },
    ],
    pathway: pathwayNca,
    videoId: "XBKh3msgunc",
    videoTitle: "Master the UKFPO National Clinical Assessment NCA with PLABCOACH",
    ctaTitle: "READY TO ACE THE NCA?",
    ctaCopy: "Choose your learning path and start your National Clinical Assessment preparation with PLABCOACH today.",
    subscribeButtonLabel: "Start NCA Preparation",
    subscribeHref: "/course-plan?course=ukfpo-nca",
    plabCoachHelpCta:"Start UKFPO-NCA Preparation",
    plabCoachHelpCtaHref:"/course-plan?course=ukfpo-nca"
  },
  "prescribing-safety-assessment": {
    slug: "prescribing-safety-assessment",
    eyebrow: "PSA",
    title: "UKFPO PSA 2026: \nPrescribing Safety Guide | PLABcoach",
    metaTitle: "UKFPO-PSA Exam 2026 – Prescribing Safety Assessment Guide | PLABcoach",
    metaDescription: "The UKFPO-PSA is the 60-question prescribing exam all F1 doctors must pass to progress to F2. Learn the format, question types and how PLABcoach helps you prepare.",
    ogImage: "/og/psa.webp",
    heroImage: "/course_six.webp",
    heroDescription:
      "The UKFPO Prescribing Safety Assessment (UKFPO-PSA) is a 60-question computer-based exam, developed jointly by the British Pharmacological Society (BPS) and the Medical Schools Council (MSC), that all Foundation Year 1 (F1) doctors must pass to progress to F2. Most UK medical graduates sit and pass the PSA at medical school; international medical graduates and any UK graduates who haven't yet passed it sit it during their F1 year, with the assessment typically funded by the UKFPO rather than paid for by the candidate.",
    toc: tocPsa,
    sections: sectionsPsa,
    faqTitle: " UKFPO-PSA FAQs",
    faqs: faqsPsa,
    faqCta: {
      title: "Still have a question?",
      text: "Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!",
      buttonLabel: "Contact us",
    },
    relatedExams: [
      {
        title: "UKFPO — NCA",
        description: "The pre-entry eligibility exam most candidates encounter before the PSA in their overall pathway",
        tags: [
          { label: "Next step", variant: 3 },
          { label: "national-clinical-assessment", variant: 3 },
        ],
        image: "/ukfpo_courses__indv_img.webp",
        href: "/national-clinical-assessment-nca-subscription-plans/",
      },
      {
        title: "MSRA",
        description: "Relevant for candidates planning beyond F1/F2 toward GP or specialty training",
        tags: [
          { label: "Related", variant: 1 },
          { label: "plab-1-ukmla-akt", variant: 1 },
        ],
        image: "/plab1_course.webp",
        href: "/msra-preparation/",
      },
    ],
    pathway: pathwayPsa,
    videoId: "8vvnBr06HSI",
    videoTitle: "Prescribing Safety Assessment preparation with PLABCoach",
    ctaTitle: "READY TO ACE THE PSA?",
    ctaCopy: "Choose your learning path and start your Prescribing Safety Assessment preparation with PLABCOACH today.",
    subscribeButtonLabel: "Start UKFPO-PSA Preparation",
    subscribeHref: "/course-plan?course=ukfpo-psa",
    plabCoachHelpCta:"Start UKFPO-PSA Preparation",
    plabCoachHelpCtaHref:"/course-plan?course=ukfpo-psa"
  },
    "msra": {
    slug: "msra",
    eyebrow: "MSRA",
    title: "MSRA Exam 2026: \nFormat & Preparation | PLABcoach",
    metaTitle: "MSRA Exam 2026 – Format, Question Bank & Preparation | PLABcoach",
    metaDescription: "The MSRA is a two-paper computer-based exam used for GP and other specialty training entry in the UK. Learn the format, scoring and how PLABcoach's question bank helps you prepare.",
    ogImage: "/og/msra.webp",
    heroImage: "/course_seven.webp",
    heroDescription:
      "The Multi-Specialty Recruitment Assessment (MSRA) is a computer-based exam used as part of recruitment into GP training and several other UK specialty training programmes. It consists of two papers — Professional Dilemmas (a situational judgement test) and Clinical Problem Solving — completed in a single sitting of just under 3 hours at a Pearson VUE test centre. Each specialty sets its own minimum score threshold, and the MSRA score directly affects a candidate's ranking for training posts.",
    toc: tocMsra,
    sections: sectionsMsra,
    faqTitle: "MSRA FAQs",
    faqs: faqsMsra,
    faqCta: {
      title: "Still have a question?",
      text: "Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!",
      buttonLabel: "Contact us",
    },
    relatedExams: [
      {
        title: "MRCGP AKT",
        description: "The natural next step for candidates on the GP training pathway",
        tags: [
          { label: "Related", variant: 2 },
          { label: "mrcp-akt", variant: 2 },
        ],
        image: "/pres_2_courses_img.webp",
        href: "/mrcgp-akt-preparation/",
      },
      {
        title: "UKFPO — NCA",
        description: "Relevant earlier steps for candidates who entered via the Foundation Programme route ",
        tags: [
          { label: "Next step", variant: 3 },
          { label: "national-clinical-assessment", variant: 3 },
        ],
        image: "/ukfpo_courses__indv_img.webp",
        href: "/national-clinical-assessment-nca-subscription-plans/",
      },
      {
        title: "UKFPO-PSA",
        description: "Relevant earlier steps for candidates who entered via the Foundation Programme route ",
        tags: [
          { label: "Related", variant: 1 },
          { label: "ukfpo-psa", variant: 1 },
        ],
        image: "/plab1_course.webp",
        href: "/prescribing-safety-assessment-psa-subscription/",
      },
      
    ],
    pathway: pathwayMsra,
    videoId: "8vvnBr06HSI",
    videoTitle: "MSRA preparation with PLABcoach",
    ctaTitle: "READY TO ACE THE PSA?",
    ctaCopy: " Choose your learning path and start your MSRA preparation with PLABcoach today.",
    subscribeButtonLabel: "Start MSRA Preparation",
    subscribeHref: "/contact-us/",
    // subscribeHref: "/course-plan?course=msra",
    plabCoachHelpCta:"Register Interest — MSRA Preparation",
    plabCoachHelpCtaHref:"/contact-us/"
  },
    "mrcp-akt": {
    slug: "mrcp-akt",
    eyebrow: "MRCGP AKT",
    title: "MRCGP AKT 2026: \nFormat & Preparation | PLABcoach",
    metaTitle: "MRCGP AKT Exam 2026 – Format, Syllabus & Preparation | PLABcoach",
    metaDescription: "The MRCGP AKT is RCGP's 160-item computer-based exam for GP trainees. Learn the current format, syllabus weighting, fees and how PLABcoach helps you pass.",
    ogImage: "/og/mrccp-akt.webp",
    heroImage: "/course_eight_1.webp",
    heroDescription:
      "The MRCGP Applied Knowledge Test (AKT) is the Royal College of General Practitioners' (RCGP) summative exam of the knowledge underpinning independent general practice in the UK. Since October 2025, it is a 160-item, 160-minute computer-based exam, held at Pearson VUE centres four times a year. Around 80% of items cover clinical medicine, with the remainder split between critical appraisal/evidence-based practice and health informatics/administrative issues. GP trainees must hold active MRCGP membership to book it. Your training record must also show you are in ST2 or ST3 when you book.",
    toc: tocMrcpAkt,
    sections: sectionsMrcpAkt,
    faqTitle: "MRCGP AKT FAQs",
    faqs: faqsMrcpAkt,
    faqCta: {
      title: "Still have a question?",
      text: "Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!",
      buttonLabel: "Contact us",
    },
    relatedExams: [
      {
        title: "MSRA ",
        description: "Entry assessment for GP specialty training",
        tags: [
          { label: "Next step", variant: 3 },
          { label: "national-clinical-assessment", variant: 3 },
        ],
        image: "/ukfpo_courses__indv_img.webp",
        href: "/msra-preparation/",
      },
      {
        title: "UKFPO-PSA",
        description: "Prescribing Safety Assessment taken during Foundation Year 1",
        tags: [
          { label: "", variant: 1 },
          { label: "", variant: 1 },
        ],
        image: "/plab1_course.webp",
        href: "/prescribing-safety-assessment-psa-subscription/",
      },
      {
        title: "UKFPO-NCA",
        description: "Clinical assessment for UK Foundation Programme applicants",
        tags: [
          { label: "Related", variant: 2 },
          { label: "pres-2", variant: 2 },
        ],
        image: "/pres_2_courses_img.webp",
        href: "/national-clinical-assessment-nca-subscription-plans/",
      },
    ],
    pathway: pathwayUkFoundation,
    videoId: "8vvnBr06HSI",
    videoTitle: "MRCGP AKT preparation with PLABcoach",
    ctaTitle: "READY TO ACE THE PSA?",
    ctaCopy: "Choose your learning path and start your MRCGP AKT preparation with PLABcoach today.",
    subscribeButtonLabel: "Start MRCGP AKT Preparation",
    // subscribeHref: "/course-plan?course=mrcp-akt",
    subscribeHref: "/contact-us/",
    plabCoachHelpCta:"Register Interest — MRCGP AKT Preparation",
    plabCoachHelpCtaHref:"/contact-us/"
  },
} satisfies Record<string, CourseDetailData>;

export type CourseDetailSlug = keyof typeof courseDetails;
