export type TocItem = {
  id: string;
  label: string;
};

export type CourseSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ComparisonRow = {
  feature: string;
  colA: string;
  colB: string;
};

export type ComparisonTable = {
  heading: string;
  noteHeading?: string;
  noteBullets?: string[];
  colAHeader: string;
  colBHeader: string;
  colAColor?: string;
  colBColor?: string;
  rows: ComparisonRow[];
  footerText?: string;
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
  heroImage: string;
  heroDescription: string;
  toc: TocItem[];
  sections: CourseSection[];
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
  subscribeHref?: string;
};

const tocPlab1: TocItem[] = [
  { id: "what-is", label: "What is PLAB 1?" },
  { id: "who-needs", label: "Who Needs to Take PLAB 1" },
  { id: "format", label: "PLAB 1 Format & Structure" },
  { id: "syllabus", label: "PLAB 1 Syllabus / Blueprint" },
  { id: "eligibility", label: "Eligibility & Registration Process" },
  { id: "dates", label: "LAB 1 Dates & Fees" },
  { id: "prepare", label: "How to Prepare for PLAB 1" },
  { id: "how-helps", label: "How PLABcoach Helps" },
  { id: "who-should", label: "Who Should Take This Course" },
];

const sectionsPlab1: CourseSection[] = [
  {
    id: "what-is",
    heading: "What is PLAB 1?",
    paragraphs: [
      "PLAB 1 is the first part of the Professional and Linguistic Assessments Board (PLAB) test, set and administered by the General Medical Council (GMC), the UK's medical regulator. It is a computer-based written examination designed to test whether international medical graduates (IMGs) have the clinical knowledge required to practice safely in the UK, at a standard equivalent to a doctor who has completed UK Foundation Year 1 (FY1).",
      "Since 2024, PLAB 1 questions are drawn from GMC's Medical Licensing Assessment (MLA) content map, the same knowledge framework used to assess UK medical graduates — meaning a PLAB 1 pass is now benchmarked to the same standard as UK finals, even though IMGs continue to sit an exam named \"PLAB 1\" rather than a separately branded UKMLA paper.",
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs to Take PLAB 1",
    paragraphs: [
      "International medical graduates who qualified outside the UK and wish to obtain full registration with a licence to practise in the UK are typically required to pass both parts of the PLAB test (PLAB 1 and PLAB 2) unless exempt through an acceptable European qualification or other GMC-recognised route.",
      "Candidates must hold a primary medical qualification acceptable to the GMC, demonstrate the required English language proficiency (IELTS Academic 7.5 overall with 7.0 in each skill, or OET Medicine Grade B in each sub-test), and meet the GMC's internship / post-qualification experience criteria before they can sit PLAB 1.",
    ],
  },
  {
    id: "format",
    heading: "PLAB 1 Format & Structure",
    paragraphs: [
      "PLAB 1 is a single written paper made up of 180 Single Best Answer (SBA) questions to be answered in 180 minutes. Each question presents a clinical scenario with five answer options and asks candidates to select the single most appropriate answer.",
      "The exam is delivered on computer at authorised test centres worldwide and is strictly timed. Questions cover the breadth of Foundation Year 1 practice, including acute and chronic presentations, prescribing, investigation choice, ethics, communication and data interpretation.",
    ],
  },
  {
    id: "syllabus",
    heading: "PLAB 1 Syllabus / Blueprint",
    paragraphs: [
      "The PLAB 1 blueprint is built around the GMC's MLA content map and the outcomes of UK Foundation Year 1. It includes clinical presentations and conditions commonly encountered in general and acute medicine, surgery, paediatrics, obstetrics and gynaecology, psychiatry, emergency medicine, and primary care.",
      "Higher-weighted areas typically include acute presentations, management of common chronic diseases, prescribing and therapeutics, cancer and palliative care, child health, woman's health, mental health and evidence-based practice including understanding of guidelines and screening.",
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility & Registration Process",
    paragraphs: [
      "To register for PLAB 1, candidates must first create a GMC online account, have their primary medical qualification verified by the GMC through the standard EPIC-verification pathway, and provide evidence of meeting the English language requirement.",
      "Once the GMC confirms eligibility, candidates can book PLAB 1 through their GMC online account when booking windows open. PLAB 1 is run at multiple test centres in the UK and overseas several times per year.",
    ],
  },
  {
    id: "dates",
    heading: "PLAB 1 Dates & Fees",
    paragraphs: [
      "PLAB 1 sittings are published in advance by the GMC with four or more exam dates per calendar year across UK and overseas centres. The booking window usually opens several months before each sitting and places can fill quickly.",
      "The current examination fee is set by the GMC and reviewed annually. Overseas centre fees may differ slightly due to local test-centre costs. Candidates should always check the latest dates, venues and fees directly on the GMC's official PLAB pages before booking.",
    ],
  },
  {
    id: "prepare",
    heading: "How to Prepare for PLAB 1",
    paragraphs: [
      "Effective PLAB 1 preparation combines structured revision of core clinical knowledge with high-quality SBA practice under timed conditions. Most candidates begin by mapping the MLA content map / PLAB blueprint against their existing knowledge to identify weaker specialties.",
      "A typical preparation plan includes targeted concept review, active question practice, careful review of learning points, periodic full-length mocks under exam conditions, and repeated cycles of knowledge consolidation. A guided course with expert-led explanation and structured notes is usually the most reliable way to stay on plan and cover the full blueprint.",
    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach combines expert-led recorded and live teaching, high-yield study notes, a large SBA question bank written to the latest MLA / PLAB 1 blueprint, and regular full-length mock exams with performance analytics.",
      "Our tutors are GMC-registered doctors with recent first-hand experience of PLAB and UK Foundation training, so the course reflects real exam style, current guidelines and the decision-making level the GMC is testing. Learning options include self-paced recorded packages, live small-group coaching and hybrid support to match different timelines and budgets.",
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "This course is designed for international medical graduates planning to sit PLAB 1 in the next 3-12 months, regardless of how long ago they qualified or how much UK-specific clinical exposure they already have.",
      "Candidates who have previously attempted PLAB 1 or similar written exams will also benefit from the structured question-technique coaching, targeted weakness remediation and repeated mock assessments that allow measurable progress before rebooking.",
    ],
  },
];

const faqsPlab1: FAQItem[] = [
  {
    question: "Is PLAB 1 the same as UKMLA?",
    answer:
      "Not exactly — GMC states PLAB has become compliant with the Medical Licensing Assessment (MLA) content map, not that it has been renamed. IMGs sit an exam still called \"PLAB 1,\" calibrated to the same MLA standard that UK graduates' UKMLA-AKT paper is calibrated to.",
  },
  {
    question: "Can I take PLAB 1 without completing my internship?",
    answer:
      "No. The GMC requires evidence that your internship / post-qualification training meets their criteria before you can book PLAB 1. In practice this typically means a minimum of 12 months acceptable clinical experience post-qualification, with specific rotations covered. Always check the latest GMC guidance for your country of qualification.",
  },
  {
    question: "How many attempts am I allowed at PLAB 1?",
    answer:
      "Under current GMC rules you may attempt PLAB 1 up to four attempts. If you do not pass within four attempts you are not normally permitted further attempts and should consider alternative routes to GMC registration. Always confirm the latest attempt policy on the GMC website.",
  },
  {
    question: "Where can I sit PLAB 1?",
    answer:
      "PLAB 1 is held at UK and overseas test centres via the GMC's appointed test providers. Overseas centres are usually available in major cities in India, Pakistan, Bangladesh, Egypt, Nigeria, the UAE and several other countries — the exact list for each sitting is published by the GMC when booking opens.",
  },
  {
    question: "What score do I need to pass PLAB 1?",
    answer:
      "The pass mark for PLAB 1 is set by the GMC for each sitting using standard-setting methodology, so it varies slightly by exam. Historically, candidates should aim for a performance comfortably above 60% of available marks in realistic full mocks under timed conditions to be confident of passing the real exam.",
  },
  {
    question: "How is PLAB 1 different from PRES 2 in Ireland?",
    answer:
      "PRES 2 is the written exam of Ireland's Medical Council Pre-Registration Examination System. Although both exams test applied clinical knowledge through multiple-choice questions, they are set by different regulators for different national registration pathways. In practice the Irish Medical Council often recognises a PLAB 1 pass as equivalent to PRES 2, but candidates should always verify the current position directly with the Irish Medical Council before planning either route.",
  },
];

const comparisonPlab1: ComparisonTable = {
  heading: "PLAB 1 vs PRES 2 Comparison",
  noteHeading: "Regulatory relationship (verify against Irish Medical Council before publish — active/evolving area)",
  noteBullets: [
    "The Irish Medical Council already treats PLAB 1 as equivalent to PRES 2 in practice — candidates who pass PLAB 1 can be exempted from sitting PRES 2.",
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
      colA: "PLAB 1 ≈ PRES 2 (exemption in practice)",
      colB: "Irish Medical Council recognises PLAB 1 pass as PRES 2-equivalent",
    },
  ],
  footerText:
    "Follow with 2–3 sentences: candidates targeting UK GMC registration primarily should sit PLAB 1; candidates targeting Ireland who already hold a PLAB 1 pass do not need to separately sit PRES 2. Link to Irish Medical Council's PRES page as the citable primary source.",
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
    href: "/courses/plab-2-ukmla",
  },
  {
    title: "PRES 2 (Ireland)",
    description: "comparison/alternative pathway",
    tags: [
      { label: "Next step", variant: 2 },
      { label: "pres-2", variant: 2 },
    ],
    image: "/pres_2_courses_img.webp",
    href: "/courses/pres-level-2",
  },
  {
    title: "UKFPO-NCA / UKFPO-PSA",
    description: "relevant once GMC registration is underway and Foundation Programme entry is being planned",
    tags: [
      { label: "Next step", variant: 3 },
      { label: "ukfpo-nca, /ukfpo-psa", variant: 3 },
    ],
    image: "/ukfpo_courses__indv_img.webp",
    href: "/courses/national-clinical-assessment",
  },
];

const tocPlab2: TocItem[] = [
  { id: "what-is", label: "What is PLAB 2 / CPSA?" },
  { id: "who-needs", label: "Who Needs PLAB 2" },
  { id: "format", label: "PLAB 2 Format & Stations" },
  { id: "skills", label: "Skills & Blueprint" },
  { id: "eligibility", label: "Eligibility, Booking & Fees" },
  { id: "dates", label: "PLAB 2 Dates & Venues" },
  { id: "prepare", label: "How to Prepare for PLAB 2" },
  { id: "how-helps", label: "How PLABcoach Helps" },
  { id: "who-should", label: "Who Should Take This Course" },
];

const sectionsPlab2: CourseSection[] = [
  {
    id: "what-is",
    heading: "What is PLAB 2 / CPSA?",
    paragraphs: [
      "PLAB 2 is the second and practical part of the GMC's PLAB assessment for international medical graduates. Since the introduction of the UKMLA, PLAB 2 has been mapped to the Clinical and Professional Skills Assessment (CPSA) framework — so a PLAB 2 pass is benchmarked to the same clinical-skills standard that UK medical graduates must demonstrate before gaining registration.",
      "PLAB 2 is an Objective Structured Clinical Examination (OSCE) delivered in Manchester, UK. It tests real-world clinical skills including history taking, physical examination, practical procedures, communication skills, information giving, and management decisions in time-limited stations.",
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs PLAB 2",
    paragraphs: [
      "Almost all international medical graduates who require PLAB as their route to GMC full registration must pass PLAB 2 after passing PLAB 1. There are very few exemptions, so if your route to UK registration goes through PLAB 1, you should plan for PLAB 2 as the mandatory follow-on assessment.",
      "You cannot sit PLAB 2 before passing PLAB 1. Once PLAB 1 is passed you typically have a defined window to attempt PLAB 2 (currently up to four attempts within a set period from your PLAB 1 pass), so most candidates begin structured PLAB 2 preparation shortly after their PLAB 1 result.",
    ],
  },
  {
    id: "format",
    heading: "PLAB 2 Format & Stations",
    paragraphs: [
      "PLAB 2 is a day-long OSCE with a series of timed stations. Each station places the candidate in a realistic clinical scenario with either a simulated patient (actor) or a practical skills station using models / equipment, and assesses their performance against structured marking criteria.",
      "Station types commonly include: history taking and diagnosis, focused physical examination, management and counselling, information sharing / breaking bad news, consent, prescribing and medication review, and practical procedures such as cannulation, IV access, catheterisation, injections, lumbar puncture and others drawn from the published blueprint.",
    ],
  },
  {
    id: "skills",
    heading: "Skills & Blueprint",
    paragraphs: [
      "The PLAB 2 blueprint covers the knowledge, skills and behaviours expected of a doctor entering UK Foundation Year 1. Domains assessed are clinical and procedural skills, communication with patients, relatives and colleagues, applied clinical knowledge and decision-making, patient safety, and professional behaviour and ethics.",
      "Candidates are expected to manage common acute and chronic presentations, work under time pressure similar to a real clinical environment, and show the patient-centred communication expected in UK practice — including shared decision-making, clarity of explanation and appropriate signposting.",
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility, Booking & Fees",
    paragraphs: [
      "To be eligible to sit PLAB 2 you must have already passed PLAB 1 and maintain a valid, acceptable English language score as set out by the GMC. As of today, four attempts at PLAB 2 are permitted; any candidate who fails after the maximum number of attempts will need to review alternative routes with the GMC.",
      "PLAB 2 bookings are made through your GMC online account once your PLAB 1 result is confirmed. Exam places are released on published dates and fill quickly. Fees are set by the GMC and reviewed annually, so candidates should confirm up-to-date pricing and refund policy directly on the GMC website before booking.",
    ],
  },
  {
    id: "dates",
    heading: "PLAB 2 Dates & Venues",
    paragraphs: [
      "PLAB 2 is run at dedicated OSCE centres in the UK, primarily in Manchester. Sittings occur regularly across the year with dates published in advance on the GMC website. Candidates should allow enough notice to plan travel, accommodation, visa (if needed) and final preparation before the exam date.",
      "Because PLAB 2 can only be sat in the UK, international candidates should also factor in any visa requirements, travel costs and the time needed to practice their structured approach to stations after arrival in the UK.",
    ],
  },
  {
    id: "prepare",
    heading: "How to Prepare for PLAB 2",
    paragraphs: [
      "Successful PLAB 2 preparation is structured practice, not passive reading. Most candidates begin by learning a consistent framework for each station type (history, examination, procedure, communication) and then progressively add speed, content accuracy and realistic patient interaction.",
      "A high-yield routine combines: structured notes and checklists for high-frequency stations, repeated timed drills with a partner or small group, video or tutor feedback, dedicated mocks under realistic exam-day conditions, and targeted remediation of weaker areas such as specific procedures or more complex communication scenarios.",
    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "Our PLAB 2 / CPSA course provides a complete, tutor-led programme built around the latest blueprint and GMC marking expectations. You receive structured station notes, dedicated demonstration videos, repeated small-group practice with trained role-players, and detailed individual feedback after every mock station.",
      "We offer both in-person and online live coaching options depending on your location and timeline, together with recorded packages for self-paced drilling and optional one-to-one stations. Mock exam days mirror the real PLAB 2 format in length and station mix to build both technique and stamina before exam day.",
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "This course is for any IMG who has already passed PLAB 1 (or expects to pass soon) and is preparing for their first or a repeat PLAB 2 attempt. It is suitable regardless of whether you have recent UK clinical experience, and whether you learn best in a group or through individually tailored support.",
      "Repeat candidates in particular benefit from our detailed station-level breakdown and mock feedback, which helps identify exactly where marks were lost in a previous attempt and provides a structured remediation plan for the next sitting.",
    ],
  },
];

const faqsPlab2: FAQItem[] = [
  {
    question: "Can I sit PLAB 2 outside the UK?",
    answer:
      "No. PLAB 2 is currently delivered only at the GMC's appointed OSCE centres in the UK (Manchester). You should factor UK travel, accommodation and, if applicable, visa requirements into your timeline and budget.",
  },
  {
    question: "How long after passing PLAB 1 can I take PLAB 2?",
    answer:
      "You can usually book PLAB 2 shortly after you receive your PLAB 1 pass result and your GMC online account reflects the pass. There is a time window for completing PLAB 2 after passing PLAB 1 — confirm the latest validity rule with the GMC before making travel or course plans.",
  },
  {
    question: "How many attempts do I have at PLAB 2?",
    answer:
      "Currently the GMC allows up to four attempts at PLAB 2. If you do not pass within four attempts you are unlikely to be granted further attempts and should explore other GMC-acceptable routes to registration.",
  },
  {
    question: "Will communication skills be assessed in English?",
    answer:
      "Yes. All patient and colleague interaction in PLAB 2 is conducted in English. Even if your English language certificate is already accepted by the GMC, strong spoken communication and clear explanation tailored to the patient is central to passing every clinical and communication station.",
  },
  {
    question: "Do I need NHS experience to pass PLAB 2?",
    answer:
      "No. Many candidates pass PLAB 2 without prior NHS experience, provided they prepare using UK-guideline-based content and practice stations in a way that simulates a UK-style consultation. Our course is designed to bridge that gap for candidates preparing from overseas.",
  },
  {
    question: "Is PLAB 2 the same as PRES 3 in Ireland?",
    answer:
      "PRES 3 is the Irish Medical Council's OSCE + data interpretation assessment. It is a different exam run by a different regulator, although both are practical clinical assessments. You should not assume automatic portability of a pass; always check current reciprocity guidance directly with the GMC or Irish Medical Council for your intended route.",
  },
];

const tocPres2: TocItem[] = [
  { id: "what-is", label: "What is PRES 2?" },
  { id: "who-needs", label: "Who Needs PRES 2" },
  { id: "format", label: "PRES 2 Format & Questions" },
  { id: "syllabus", label: "PRES 2 Syllabus / Blueprint" },
  { id: "eligibility", label: "Eligibility & Registration" },
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
      "PRES 2 is the written component of Ireland's Pre-Registration Examination System, administered by the Irish Medical Council for international medical graduates who are applying to the Irish training system or seeking registration in Ireland. It is a multiple-choice written exam set in the context of Irish clinical practice.",
      "PRES 2 is delivered alongside PRES 3 (the clinical / OSCE and data interpretation component) and is designed to confirm that an IMG has the applied medical knowledge required for safe practice as an intern / pre-registration doctor in the Irish health system.",
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs PRES 2",
    paragraphs: [
      "Most international medical graduates applying for the Irish Medical Council Intern or Pre-Registration pathway are required to sit PRES unless exempt. Exemptions can apply where a candidate already holds a qualification or pass the IMC treats as equivalent — such as a valid PLAB 1 pass, under current guidance always verify with the Irish Medical Council for your own case.",
      "If you are targeting an Irish internship or Irish NCHD training post, you should check the latest IMC booklet and Health Service Executive (HSE) / NCHD guidance to confirm whether PRES 2 (and PRES 3) will be part of your required pathway.",
    ],
  },
  {
    id: "format",
    heading: "PRES 2 Format & Questions",
    paragraphs: [
      "PRES 2 is a written examination made up of multiple-choice / single-best-answer style questions rooted in realistic clinical scenarios. The exam is timed and typically runs for around 3 hours depending on the current format published by the Irish Medical Council.",
      "Questions commonly present an Irish or general hospital / general-practice style case and ask the candidate to choose the single best investigation, diagnosis, management step, prescribing choice, referral decision or ethical / communication response from the options provided.",
    ],
  },
  {
    id: "syllabus",
    heading: "PRES 2 Syllabus / Blueprint",
    paragraphs: [
      "The PRES 2 syllabus reflects the scope of knowledge expected of a competent intern / first-year pre-registration doctor in Ireland. It covers the common conditions and presentations in general medicine, general surgery, paediatrics, obstetrics and gynaecology, psychiatry, emergency medicine, musculoskeletal, primary care and therapeutics.",
      "Irish and general European guidelines, common local patterns of disease, the Irish health system context, safety and prescribing are all relevant. Candidates should also expect questions that test interpretation of common investigations, drug side effects, vaccinations, screening and ethical issues relevant to day-to-day Irish practice.",
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility & Registration",
    paragraphs: [
      "Eligibility for PRES is set by the Irish Medical Council and usually requires an acceptable primary medical qualification, verification of that qualification, and evidence of English language proficiency (IELTS, OET or equivalent, meeting the IMC's published scores).",
      "Candidates apply to the Irish Medical Council to be accepted for the PRES pathway, and once approved can register for the next available PRES 2 / PRES 3 diet via the IMC's online system. Processing of verification can take several weeks, so early application is strongly recommended.",
    ],
  },
  {
    id: "dates",
    heading: "PRES 2 Dates & Fees",
    paragraphs: [
      "The Irish Medical Council normally runs PRES diets on a scheduled calendar each year, often with two or more sittings. Exact dates, venues and closing dates are published in the current PRES information booklet on the IMC website. The exam is run in Dublin and / or in approved test centres.",
      "Fees for PRES 2 and PRES 3 are set separately and are published each diet. Candidates should budget for both written and clinical components as well as any travel or visa costs if travelling to Ireland from abroad.",
    ],
  },
  {
    id: "prepare",
    heading: "How to Prepare for PRES 2",
    paragraphs: [
      "Strong PRES 2 preparation uses a structured review of high-yield topics, a large volume of exam-style MCQ practice, and timed mock assessments to build question technique and coverage. Most candidates find that a plan of 2-4 focused months is realistic depending on their baseline knowledge and time available per week.",
      "We recommend starting with a diagnostic mock to identify weak specialties, then interleaving concept revision with daily MCQ sessions and weekly cumulative mocks. Pay special attention to Irish-higher-weighted areas such as common chronic disease, acute hospital admissions, paediatrics, women's health, psychiatry and evidence-based medicine.",
    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach's PRES 2 course is built around the latest IMC blueprint and a large, exam-style question bank written and reviewed by doctors familiar with both Irish-prescribing context and the style of question the IMC favours. The package includes recorded concept lectures, concise high-yield notes, regular homework quizzes and full-length timed mock exams.",
      "You also have access to live small-group Q&A sessions and optional 1-to-1 coaching for weaker topics, so that progress is measurable every week and you are never stuck on unclear explanations or difficult question styles.",
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "This course is ideal for IMGs who are planning to take the Irish Medical Council PRES 2 exam as part of an Intern or NCHD application pathway to Ireland, whether they are currently working in Ireland, the UK, India, the Middle East or elsewhere.",
      "It is also a strong fit for candidates who already hold a PLAB 1 pass and are exploring the Irish route as a parallel or backup plan, or for doctors switching from UK to Irish training who need to understand the IMC blueprint differences and Irish-specific content.",
    ],
  },
];

const faqsPres2: FAQItem[] = [
  {
    question: "Can I be exempted from PRES 2 if I already passed PLAB 1?",
    answer:
      "In many cases yes — the Irish Medical Council currently treats a valid PLAB 1 pass as equivalent to PRES 2 in practice, so you may be able to apply to PRES 3 directly. Always confirm the latest equivalence and any time-limit conditions directly with the Irish Medical Council for your own application before relying on this.",
  },
  {
    question: "Where is PRES 2 held?",
    answer:
      "PRES 2 is currently run in Dublin and occasionally at other approved venues depending on the diet. You should check the Irish Medical Council's current PRES booklet for venues and any travel or visa planning if you will be coming to Ireland from abroad.",
  },
  {
    question: "How many times can I take PRES 2?",
    answer:
      "Attempt limits and rules are set by the Irish Medical Council and published in the PRES handbook. You should check the current booklet for the latest position, as policies can be updated between diets.",
  },
  {
    question: "Is PRES 2 the same as PLAB 1 content-wise?",
    answer:
      "PRES 2 and PLAB 1 cover similar broad areas of applied clinical knowledge at a similar level, but they are written by different regulators for different healthcare systems. In particular, Irish guidelines, system context and local patterns of disease may differ from UK PLAB-style questions, so dedicated PRES 2 preparation is always worthwhile even if you already studied for PLAB 1.",
  },
  {
    question: "What is a safe mock score before the exam?",
    answer:
      "Because the exact pass mark can vary by diet, there is no single magic number. As a rule of thumb, candidates who are consistently scoring comfortably above the two-thirds mark in realistic timed mocks — and who are improving their weaker topics — tend to be in a strong position for exam day.",
  },
  {
    question: "Should I take PRES 2 or PRES 3 first?",
    answer:
      "For most candidates PRES 2 (the written exam) comes before PRES 3 (the practical OSCE and data interpretation exam) or is sat in the same diet. Check the Irish Medical Council's current ordering for the diet you are entering, as rules and packaging can evolve.",
  },
];

const tocPres3: TocItem[] = [
  { id: "what-is", label: "What is PRES 3?" },
  { id: "who-needs", label: "Who Needs PRES 3" },
  { id: "format", label: "PRES 3 Format & Stations" },
  { id: "data-interpret", label: "Data Interpretation Component" },
  { id: "eligibility", label: "Eligibility & Registration" },
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
      "PRES 3 is the practical component of the Irish Medical Council's Pre-Registration Examination System. It combines an Objective Structured Clinical Examination (OSCE) with a separate data interpretation assessment. Together, these two elements test whether an international medical graduate has the clinical skills and applied judgment needed to work safely as an intern / pre-registration doctor in Ireland.",
      "PRES 3 is the final stage of the PRES pathway for most candidates, usually taken after PRES 2 (or after a PRES-2-equivalent exemption such as PLAB 1) has been completed.",
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs PRES 3",
    paragraphs: [
      "Most candidates progressing through the Irish Medical Council's PRES route to Intern or NCHD-level registration will need to sit and pass PRES 3. This includes both candidates who took PRES 2 and those who were exempted from PRES 2 through the IMC's current equivalence rules.",
      "Always confirm the exact sequence and requirements for your own application by cross-checking the latest Irish Medical Council PRES booklet and any additional HSE or training-programme requirements, especially if you are applying from a non-standard route or hold qualifications from multiple jurisdictions.",
    ],
  },
  {
    id: "format",
    heading: "PRES 3 Format & Stations",
    paragraphs: [
      "PRES 3 is typically run as an OSCE with a circuit of clinical stations. Each station tests a specific skill such as history taking, focused physical examination, practical procedural skills on models or manikins, communication skills, counselling, consent-giving, breaking bad news or a management-oriented scenario with an actor patient.",
      "Stations are strictly timed, with a clear marking scheme for each task and a trained examiner present. Candidates are assessed not only on the factual correctness of what they do, but also on their communication, organisation, safety, professional behaviour and patient-centred approach.",
    ],
  },
  {
    id: "data-interpret",
    heading: "Data Interpretation Component",
    paragraphs: [
      "In addition to the OSCE stations, PRES 3 includes a dedicated data interpretation element. This tests the candidate's ability to read and act on real-world clinical data such as blood results, ECGs, chest X-rays, arterial blood gases, urinalysis, common microbiology results and other investigations commonly requested in Irish hospital and general-practice settings.",
      "Questions can cover diagnosis, immediate management, next-investigation choice or recognition of a dangerously abnormal result requiring escalation. Many candidates find that a structured approach to each data type (ECG, ABG, CXR, etc.) is the key to both speed and accuracy in this section.",
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility & Registration",
    paragraphs: [
      "Eligibility for PRES 3 is managed by the Irish Medical Council. You will typically need to have passed PRES 2 (or hold an accepted equivalent), maintain valid English language evidence, and hold a primary medical qualification that has been fully verified and accepted by the IMC.",
      "Once the IMC confirms you are eligible for the PRES pathway you can apply for an available PRES 3 diet through their online portal. Application windows close well in advance of the exam date, so apply early to avoid missing the diet you are targeting.",
    ],
  },
  {
    id: "dates",
    heading: "PRES 3 Dates & Fees",
    paragraphs: [
      "PRES 3 dates are published in the Irish Medical Council's PRES booklet for each calendar year, with multiple diets typically available. The exam is held in Ireland, usually in Dublin, at dedicated OSCE / assessment venues.",
      "Candidates should budget for the PRES 3 fee together with travel, accommodation and any visa arrangements. If PRES 2 and PRES 3 are being taken close together, plan both fees and the full travel timeline into your preparation calendar.",
    ],
  },
  {
    id: "prepare",
    heading: "How to Prepare for PRES 3",
    paragraphs: [
      "PRES 3 is a performance exam, so preparation must be active — repeated timed practice of stations, not just reading notes. The most effective approach combines: (1) a checklist-driven framework for each station type, (2) deliberate practice of common procedures, (3) regular mock circuits with trained actors and examiners, (4) a dedicated data-interpretation drill plan for ECGs, ABGs, CXRs and labs, and (5) targeted remediation of any weaker station types.",
      "Most candidates benefit from 6-12 weeks of structured, frequent practice. Solo candidates often lose momentum or miss important examiner-level feedback, so a supported programme with structured stations and regular mocks is the most reliable route to a confident first pass.",
    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "Our PRES 3 programme provides full end-to-end preparation for both the OSCE stations and the data interpretation component. You get structured station notes and checklists, demonstration videos of high-frequency procedures and communication stations, repeated small-group timed practice with trained role-players and examiners, and a series of realistic PRES 3 mock circuits that mirror the length and format of the real exam.",
      "The data interpretation module includes dedicated teaching and a large bank of ECG, ABG, CXR and lab-result drill questions with worked answers. 1-to-1 remediation sessions are available for specific weak stations or for candidates retaking PRES 3 after a close attempt.",
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "This course is designed for any doctor preparing for PRES 3 as part of an Irish Intern or NCHD registration pathway, including those who are currently practising in Ireland and those travelling to Ireland especially for the exam.",
      "It is also suitable for repeat PRES 3 candidates who need help understanding exactly where marks were lost and building a targeted remediation plan for the next diet.",
    ],
  },
];

const faqsPres3: FAQItem[] = [
  {
    question: "Is PRES 3 harder than PLAB 2?",
    answer:
      "PRES 3 and PLAB 2 are both demanding practical exams but are run by different regulators with different marking emphases and station mixes. PRES 3 additionally includes a structured data interpretation element, while PLAB 2 tends to be fully station-based. Candidates should prepare specifically for the exam they are sitting rather than assuming one maps cleanly to the other.",
  },
  {
    question: "Can PRES 3 be sat outside Ireland?",
    answer:
      "No. PRES 3 is currently held only in Ireland at the IMC's approved assessment venues. You should plan travel and any visa or accommodation arrangements well in advance of the diet you intend to sit.",
  },
  {
    question: "How is data interpretation assessed?",
    answer:
      "Data interpretation is assessed as a dedicated written / on-screen element using realistic clinical cases and standard formats for ECGs, ABGs, imaging reports, lab panels and other investigation results. The emphasis is on the decisions an intern would actually make — next investigation, safe discharge, immediate treatment or escalation — rather than pure recognition of a pattern.",
  },
  {
    question: "What if I speak with a strong accent — will I fail communication stations?",
    answer:
      "What examiners test is whether the patient clearly understands you, and whether you understand and respond appropriately to the patient. If you use clear, moderate-speed English and check the patient's understanding where needed, accent alone is not a reason to fail a communication station. Our tutors can help you with the specific communication scripts and turn-taking patterns that examiners look for.",
  },
  {
    question: "How many attempts am I allowed at PRES 3?",
    answer:
      "Attempt rules are set by the Irish Medical Council and updated in the PRES handbook. Always check the latest version for the diet you are applying to, as limits, cooling-off periods and any appeal processes can change.",
  },
  {
    question: "Do I need Irish hospital experience to pass PRES 3?",
    answer:
      "Not necessarily. Many successful PRES 3 candidates prepare from overseas using an Irish-context course and structured station practice. Irish hospital or GP experience is helpful, but the exam is designed to be fair to well-prepared IMGs from any background, and our course explicitly bridges system-context differences for candidates not already working in Ireland.",
  },
];

const tocNca: TocItem[] = [
  { id: "what-is", label: "What is the NCA?" },
  { id: "who-needs", label: "Who Needs to Sit the NCA" },
  { id: "format", label: "NCA Format & Stations" },
  { id: "syllabus", label: "Skills, Domains & Blueprint" },
  { id: "eligibility", label: "Eligibility & Application" },
  { id: "dates", label: "NCA Dates & Costs" },
  { id: "prepare", label: "How to Prepare for the NCA" },
  { id: "how-helps", label: "How PLABcoach Helps" },
  { id: "who-should", label: "Who Should Take This Course" },
];

const sectionsNca: CourseSection[] = [
  {
    id: "what-is",
    heading: "What is the NCA?",
    paragraphs: [
      "The National Clinical Assessment (NCA) is a UK-wide clinical-skills assessment used by the UK Foundation Programme Office (UKFPO) as part of the recruitment process into the UK Foundation Programme. It is used alongside educational performance measures and other recruitment elements to help rank applicants for Foundation Year 1 posts across the UK.",
      "For international medical graduates and UK graduates applying to the Foundation Programme from certain pathways, a strong NCA performance is a major driver of a higher overall ranking and therefore a better chance of being allocated to a preferred region or a competitive training rotation.",
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs to Sit the NCA",
    paragraphs: [
      "Whether you need to sit the NCA depends on your applicant group as defined by the UKFPO for the recruitment round you are entering. In recent years it has been a core part of the application for many IMG applicants to the UK Foundation Programme, as well as for some other defined applicant cohorts.",
      "You should check the current UKFPO applicant guidance booklet for the exact year you are applying, because applicant groups, the weight of the NCA in the overall ranking, and any alternative pre-employment checks required can change between rounds.",
    ],
  },
  {
    id: "format",
    heading: "NCA Format & Stations",
    paragraphs: [
      "The NCA is structured as a skills assessment — typically a series of timed clinical and communication stations — delivered at authorised assessment centres or via an approved remote/hybrid format depending on the current round. Stations are short and tightly timed, designed to test consistent, safe, patient-centred performance.",
      "Common station styles include: focused history taking, simulated patient communication, explanation and consent, management of an acutely unwell simulated patient, handover / SBAR-style communication with a colleague, a structured prioritisation task, and a practical or written data-style task such as prescribing, documentation or result interpretation embedded within a scenario.",
    ],
  },
  {
    id: "syllabus",
    heading: "Skills, Domains & Blueprint",
    paragraphs: [
      "The NCA blueprint is mapped to the capabilities expected of a new Foundation Year 1 doctor in the UK. Broad domains assessed include: clinical assessment and examination, clinical management and decision-making, patient safety, communication with patients and carers, communication with the multi-disciplinary team, documentation and prescribing, and professional behaviours and ethics.",
      "Questions and stations are rooted in realistic UK Foundation contexts: acute take scenarios, common ward issues, safe discharge, safeguarding concerns, end-of-life conversations, breaking bad news, managing relatives, prescribing common medications safely, and managing simple emergencies such as deterioration, sepsis or allergic reaction triggers.",
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility & Application",
    paragraphs: [
      "Eligibility to apply to the UK Foundation Programme and therefore to sit the NCA is set out each year in the UKFPO's person specification and applicant guide. In broad terms you will need an acceptable primary medical qualification, evidence of the required English language standard, the required internship / experience and any additional checks (including registration-status requirements) that apply to your applicant cohort.",
      "The NCA itself is booked through the UKFPO's recruitment portal once your application has been accepted for the round. You should track all published dates carefully: late applications or missed NCA booking windows usually cannot be reversed within the same recruitment round.",
    ],
  },
  {
    id: "dates",
    heading: "NCA Dates & Costs",
    paragraphs: [
      "NCA dates are tied to each UK Foundation Programme recruitment round and are published in the UKFPO timeline for that year. There is typically a defined NCA window during which all eligible applicants must complete their assessment. Fees (if any) and any eligible pass-through costs are explained in the current applicant guide.",
      "If you are applying from outside the UK you should also note whether the round you are entering offers a remote NCA option or requires travel to a UK or overseas test centre, and build any travel or technology requirements into your preparation timeline.",
    ],
  },
  {
    id: "prepare",
    heading: "How to Prepare for the NCA",
    paragraphs: [
      "Strong NCA preparation combines: (1) learning a repeatable, structured approach for each station type, (2) building familiarity with UK clinical systems and Foundation-level patient flows, (3) timed practice of realistic stations under pressure, and (4) repeated feedback on communication, organisation and safety. Because the NCA is used for ranking, the bar is not just \"passing\" — it is performing as highly as possible across every station.",
      "Most applicants spread NCA preparation over 4-10 weeks depending on their clinical background and familiarity with UK-style consultations, and combine self-practice with a structured course, peer groups and at least one full mock circuit.",
    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach's NCA course is written and delivered by doctors who have recent direct experience of UK Foundation training and NCA-style assessment. The programme covers every high-frequency station type with clear frameworks, concise notes, role-player-led practice stations, and structured examiner-style feedback after each circuit.",
      "You also receive a dedicated prescribing and documentation module, NCA-style prioritisation tasks, and multiple full mock NCAs run to realistic timings so that you build both technique and stamina. Repeat stations and optional 1-to-1 coaching are available for weaker station types or for candidates who need a top ranking to secure a competitive region.",
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "This course is for any applicant to the UK Foundation Programme — whether a UK final-year student, an IMG applying from abroad, or a doctor already working in the UK outside the Foundation Programme — who is required or electing to sit the NCA as part of their ranking.",
      "It is particularly recommended for international medical graduates who want to close any gap in familiarity with UK communication styles, Foundation-level ward tasks and the specific marking behaviour the NCA examiners are trained to reward.",
    ],
  },
];

const faqsNca: FAQItem[] = [
  {
    question: "Is the NCA the same as PLAB 2?",
    answer:
      "No. The NCA is a ranking assessment run by UKFPO as part of Foundation Programme recruitment, whereas PLAB 2 is the GMC's OSCE for full registration. The two assessments share some station styles and domains, but they are used for different purposes and are marked to a different purpose — NCA candidates are competing on rankable performance, not simply against a pass/fail bar.",
  },
  {
    question: "How much does the NCA contribute to my overall rank?",
    answer:
      "The weighting of the NCA is published by UKFPO for each recruitment round and can vary between applicant groups and between years. You should read the most up-to-date UKFPO applicant guide to see how the NCA combines with your educational performance, SJT-style elements and any other scoring in the round you are entering.",
  },
  {
    question: "Can I resit the NCA in the same recruitment round if I do poorly?",
    answer:
      "In most UKFPO rounds the NCA is a one-time assessment for that round — there is no internal resit mechanism once you have completed it. This is exactly why structured preparation and high-quality mock practice matter so much: you need to deliver your best performance on the day.",
  },
  {
    question: "Is there a minimum pass mark on the NCA?",
    answer:
      "UKFPO publishes whether a particular NCA round operates on a pure ranking basis or also has a threshold or safety element. You should check the current guidance, but even where there is no formal threshold, a low NCA performance will severely limit your overall ranking and therefore your choice of foundation school.",
  },
  {
    question: "Should I also prepare for the PSA at the same time?",
    answer:
      "For many applicants the Prescribing Safety Assessment (PSA) or a PSA-style prescribing task is either part of the NCA itself or a closely related requirement. Our NCA package includes a dedicated prescribing module, and you can also take our full PSA course alongside for the safest combined preparation.",
  },
  {
    question: "Can the NCA be taken outside the UK?",
    answer:
      "This changes between UKFPO rounds. Some years the NCA has been delivered remotely or at overseas centres; other years it may require attendance at a UK centre. Always check the UKFPO's published assessment delivery plan for the exact round you are applying to before booking flights or accommodation.",
  },
];

const tocPsa: TocItem[] = [
  {
    id: "what-is", label: "What is the PSA?" },
  { id: "who-needs", label: "Who Needs the PSA" },
  {
    id: "format",
    label: "PSA Format & Question Types",
  },
  {
    id: "domains",
    label: "Domains, Prescribing Skills & Blueprint",
  },
  { id: "eligibility", label: "Eligibility & Application" },
  { id: "dates", label: "PSA Dates & Fees" },
  { id: "prepare", label: "How to Prepare for the PSA" },
  { id: "how-helps", label: "How PLABcoach Helps" },
  { id: "who-should", label: "Who Should Take This Course" },
];

const sectionsPsa: CourseSection[] = [
  {
    id: "what-is",
    heading: "What is the PSA?",
    paragraphs: [
      "The Prescribing Safety Assessment (PSA) is a UK-wide on-line assessment of a doctor's ability to prescribe safely and effectively. It tests practical prescribing skills, therapeutics knowledge and the routine calculations and decisions that new prescribers in the UK healthcare system must make correctly every working day.",
      "For UK medical students and Foundation-level applicants, the PSA is often either a required hurdle to graduation or Foundation Programme entry, or a factor that feeds into ranking / readiness to prescribe on the first day of work. Similar PSA-style prescribing tasks also appear in related assessments such as parts of the UKFPO NCA.",
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs the PSA",
    paragraphs: [
      "The PSA is taken by most UK medical students as a requirement of their degree or as a condition of entry to Foundation Year 1. International medical graduates entering the UK Foundation Programme, or applying to roles that require an immediate demonstration of UK prescribing competence, may also be required to pass the PSA or to sit an equivalent PSA-style assessment as part of their recruitment or induction.",
      "Check the exact requirements for your route with your medical school, UKFPO applicant guidance or employer, as the mandatory status and acceptable pass validity period can vary between organisations and between training programmes.",
    ],
  },
  {
    id: "format",
    heading: "PSA Format & Question Types",
    paragraphs: [
      "The PSA is a two-hour on-screen assessment. Questions are presented in realistic clinical contexts and cover several distinct prescribing skill domains. Standard question styles include: prescribing a suitable drug in a new scenario, reviewing a patient's existing prescriptions for errors or interactions, calculating correct doses and infusions, interpreting monitoring results and advising on next steps, handling adverse drug reactions, and communicating key prescribing information either to a patient or in documentation.",
      "The exam is tightly timed and most candidates report that the main challenge is not simply knowing the answer but arriving at it accurately within the per-question time budget while double-checking calculations and dose units.",
    ],
  },
  {
    id: "domains",
    heading: "Domains, Prescribing Skills & Blueprint",
    paragraphs: [
      "The PSA blueprint covers the core prescribing capabilities of a safe new prescriber in UK practice. Key domains are: prescribing (choice of drug, route, dose, duration and formulation), prescription review (detection of errors, contraindications, interactions and duplicate therapy), planning monitoring and interpreting results, calculating doses, infusions and unit conversions, adverse drug reaction recognition and management, and communication about medicines with patients, families and colleagues.",
      "Therapeutically the exam draws from common acute and chronic areas: cardiovascular, respiratory, diabetes and endocrinology, gastroenterology, infection and antibiotics, anticoagulation, analgesia, mental health, fluids and electrolytes, paediatric prescribing principles, obstetric prescribing principles, and palliative care / symptom control. Familiarity with the current BNF / BNFC and NICE guidance is assumed.",
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility & Application",
    paragraphs: [
      "For UK medical students, eligibility to sit the PSA and the booking process is usually managed centrally by the medical school. For Foundation applicants and other candidates the process can be routed through UKFPO, your employer or another authorised host organisation depending on the pathway.",
      "If you are an international graduate unsure whether you need the PSA, confirm with the specific organisation you are applying through: in some pathways a recent PSA pass is a mandatory condition, in others it is desirable but not required, and in others it is replaced by a separate prescribing assessment during induction or probation.",
    ],
  },
  {
    id: "dates",
    heading: "PSA Dates & Fees",
    paragraphs: [
      "The PSA runs on multiple published dates during each academic year, with specific sittings aligned to medical school and UKFPO timelines. There are sometimes separate student sittings and separate sittings for post-graduation / Foundation-level candidates.",
      "Fees (if any) depend on the host pathway — for example medical schools often fund student sittings, while some post-graduation sittings may charge the candidate or employer. You should confirm the latest dates, fees, remote vs in-centre delivery format and retake policy for the sitting you plan to enter.",
    ],
  },
  {
    id: "prepare",
    heading: "How to Prepare for the PSA",
    paragraphs: [
      "A strong PSA preparation plan typically includes: (1) a structured review of high-yield therapeutics and common guidelines, (2) daily practice of PSA-style questions by domain, (3) repeated timed mocks under exam-like conditions, (4) targeted drilling of calculations, dose conversions and infusions, and (5) a clear lookup strategy for using the BNF efficiently where it is available.",
      "Many candidates underestimate the need for speed and double-checking on the PSA. The most common failure pattern is not lack of knowledge, but running out of time on calculations or making avoidable unit errors — so deliberate practice on question technique is at least as important as memorising facts.",
    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach's PSA course is built around a large bank of realistic PSA-style questions covering every blueprint domain and every question style, including detailed worked explanations that teach not just the correct answer but the fastest route to it and the common distractors to watch for.",
      "The package includes recorded concept lectures, a dedicated calculations and infusions module, full-length timed PSA mocks with performance analytics, and live Q&A sessions where tutors walk through high-error-rate questions and share time-saving lookup strategies. Optional 1-to-1 coaching is available for repeat candidates or for anyone who needs to be confident of a high, safe score on the first attempt.",
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "This course is designed for any candidate sitting the PSA or a PSA-equivalent prescribing assessment, including UK medical students preparing for their mandatory student sitting, Foundation applicants needing a recent pass for ranking or eligibility, and doctors already in post who are preparing for a prescribing safety assessment as part of induction or sign-off.",
      "It is also ideal for international medical graduates unfamiliar with the specifics of UK prescribing, BNF usage and the particular patient-safety emphases UK regulators look for in assessments of this kind.",
    ],
  },
];

const faqsPsa: FAQItem[] = [
  {
    question: "Is the PSA a closed-book or open-book exam?",
    answer:
      "The PSA uses a controlled digital format, and the question design assumes that you are expected to look up details in the BNF / BNFC for certain questions — but time is so tight that you still need to know the commonest areas by heart. The exact digital resources available during the exam are confirmed by the PSA authority for each sitting and you should train using the same resources in your mocks.",
  },
  {
    question: "How long does a PSA pass remain valid?",
    answer:
      "Validity depends on the organisation using the pass. A medical school may accept a PSA pass only within the same graduation window, while UKFPO or an employer may apply a different validity rule (often a PSA pass achieved within a defined number of years of starting work). Always confirm with the specific body that is requiring you to take it.",
  },
  {
    question: "How many times can I resit the PSA if I fail?",
    answer:
      "Resit limits depend on the host pathway. Medical students typically have a small number of resit opportunities defined by their school; other candidates may be limited to the published sittings available within their current application round. Aim to pass first time with thorough preparation rather than counting on multiple attempts.",
  },
  {
    question: "Are calculations weighted more than other question types?",
    answer:
      "The PSA uses a defined number of questions per domain and does not simply double-weight calculations, but candidates who make repeated calculation errors (doses, rates, units, infusions, weight-based dosing) lose marks heavily and often run out of time. Structured calculation practice should be a non-negotiable part of any PSA revision plan.",
  },
  {
    question: "Do I need to know rare drugs or rare conditions to pass the PSA?",
    answer:
      "No. The PSA is built around routine, day-one, high-risk prescribing in UK clinical practice. Time spent drilling the commonest high-risk areas (anticoagulation, antibiotics, analgesia, fluids, electrolytes, diabetes, cardiovascular, mental health and common paediatric / obstetric principles) is almost always better rewarded than chasing obscure topics.",
  },
  {
    question: "Is the PSA similar to prescribing questions in PLAB 1 or PRES 2?",
    answer:
      "There is overlap, but the PSA is significantly more focused on the operational act of safe prescribing — writing the correct prescription, spotting an error in a chart, calculating an infusion, choosing a safe alternative when a drug is contraindicated — whereas PLAB 1 / PRES 2 prescribing questions are embedded within a broader clinical knowledge assessment. A candidate who is already strong on PLAB 1 therapeutics still needs dedicated PSA-style practice for format, speed and BNF-lookup technique.",
  },
];

const COMMON_HERO_IMAGE = "/courses_individual_hero_image.webp";

const pathwayUkPlab = [
  { id: "p1", number: "01", label: "Check PLAB eligibility", icon: "eligibility" as const },
  { id: "p2", number: "02", label: "Pass PLAB 1", icon: "pass-plab1" as const },
  { id: "p3", number: "03", label: "Prepare for PLAB 2", icon: "prepare-plab2" as const },
  { id: "p4", number: "04", label: "Pass PLAB 2", icon: "pass-plab2" as const },
  { id: "p5", number: "05", label: "Apply for GMC registration", icon: "apply-registration" as const },
  { id: "p6", number: "06", label: "Start your UK medical career", icon: "start-career" as const },
];

const pathwayIrelandPres = [
  { id: "p1", number: "01", label: "Check IMC / PRES eligibility", icon: "eligibility" as const },
  { id: "p2", number: "02", label: "Pass PRES 2 (or exempt via PLAB 1)", icon: "pass-pres2" as const },
  { id: "p3", number: "03", label: "Prepare for PRES 3", icon: "prepare-pres3" as const },
  { id: "p4", number: "04", label: "Pass PRES 3", icon: "pass-pres3" as const },
  { id: "p5", number: "05", label: "Apply for Irish Medical Council intern / NCHD registration", icon: "apply-imc" as const },
  { id: "p6", number: "06", label: "Start your Irish medical career", icon: "start-career" as const },
];

const pathwayUkFoundation = [
  { id: "p1", number: "01", label: "Check UKFP / GMC eligibility", icon: "eligibility" as const },
  { id: "p2", number: "02", label: "Prepare for NCA & PSA", icon: "prepare-nca" as const },
  { id: "p3", number: "03", label: "Pass NCA with a strong ranking score", icon: "pass-nca" as const },
  { id: "p4", number: "04", label: "Pass the PSA", icon: "pass-psa" as const },
  { id: "p5", number: "05", label: "Apply for UK Foundation Programme allocation", icon: "apply-fp" as const },
  { id: "p6", number: "06", label: "Start your UK FY1 medical career", icon: "start-career" as const },
];

export const courseDetails = {
  "plab-1-ukmla": {
    slug: "plab-1-ukmla",
    eyebrow: "PLAB 1 / UKMLA-AKT",
    title: "PLAB 1 / UKMLA-AKT:\nComplete Guide to Format,\nSyllabus, Dates & Preparation",
    heroImage: COMMON_HERO_IMAGE,
    heroDescription:
      "PLAB 1 is the written knowledge exam set by the General Medical Council (GMC), part of the two-part PLAB assessment that international medical graduates (IMGs) must pass for UK medical registration. It consists of 180 single-best-answer (SBA) questions completed in 180 minutes, testing clinical knowledge at the standard of a doctor completing UK Foundation Year 1. Passing PLAB 1 is the prerequisite step before sitting PLAB 2, the clinical OSCE.",
    toc: tocPlab1,
    sections: sectionsPlab1,
    faqs: faqsPlab1,
    faqCta: {
      title: "Still have a questions?",
      text: "Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!",
      buttonLabel: "Start Learning",
    },
    comparison: comparisonPlab1,
    relatedExams: relatedExamsDefault,
    pathway: pathwayUkPlab,
    videoId: "weKtryoKwqc",
    videoTitle: "Ace PLAB1 With PlabCoach",
    ctaTitle: "READY TO ACE PLAB 1?",
    ctaCopy: "Choose your learning path and start your PLAB 1 / UKMLA preparation with PLABCOACH today.",
    subscribeHref: "/course-plan?course=plab-1-ukmla",
  },
  "plab-2-ukmla": {
    slug: "plab-2-ukmla",
    eyebrow: "PLAB 2 / UKMLA-CPSA",
    title: "PLAB 2 / UKMLA-CPSA:\nComplete Guide to Stations,\nSkills, Dates & Preparation",
    heroImage: COMMON_HERO_IMAGE,
    heroDescription:
      "PLAB 2 is the GMC's clinical OSCE and, together with PLAB 1, completes the UKMLA-aligned registration pathway for international medical graduates. It tests practical skills, communication, clinical reasoning and professionalism through a series of time-limited stations run in the UK. A PLAB 2 pass, alongside PLAB 1, allows IMGs to apply for full GMC registration with a licence to practise.",
    toc: tocPlab2,
    sections: sectionsPlab2,
    faqs: faqsPlab2,
    faqCta: {
      title: "Still have a questions?",
      text: "Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!",
      buttonLabel: "Start Learning",
    },
    relatedExams: [
      {
        title: "PLAB 1 / UKMLA-AKT",
        description: "mandatory written exam before PLAB 2",
        tags: [
          { label: "Prerequisite", variant: 1 },
          { label: "plab-1-ukmla-akt", variant: 1 },
        ],
        image: "/plab1_course.webp",
        href: "/courses/plab-1-ukmla",
      },
      {
        title: "PRES 3 (Ireland)",
        description: "Irish IMC practical exam / comparison pathway",
        tags: [
          { label: "Comparison", variant: 2 },
          { label: "pres-3-osce", variant: 2 },
        ],
        image: "/ireland_course.webp",
        href: "/courses/pres-3-osce",
      },
      {
        title: "UKFPO-NCA / UKFPO-PSA",
        description: "relevant if applying to UK Foundation Programme after registration",
        tags: [
          { label: "Next step", variant: 3 },
          { label: "ukfpo-nca, /ukfpo-psa", variant: 3 },
        ],
        image: "/uk_course.webp",
        href: "/courses/national-clinical-assessment",
      },
    ],
    pathway: pathwayUkPlab,
    videoId: "6nXIgV_8TVY",
    videoTitle: "PLAB 2 / UKMLA clinical skills preparation with PLABCoach",
    ctaTitle: "READY TO ACE PLAB 2?",
    ctaCopy: "Choose your learning path and start your PLAB 2 / UKMLA clinical preparation with PLABCOACH today.",
    subscribeHref: "/course-plan?course=plab-2-ukmla",
  },
  "pres-level-2": {
    slug: "pres-level-2",
    eyebrow: "PRES LEVEL 2",
    title: "PRES Level 2 — Written:\nComplete Guide to Format,\nSyllabus & Preparation",
    heroImage: COMMON_HERO_IMAGE,
    heroDescription:
      "PRES Level 2 is the written exam of Ireland's Pre-Registration Examination System, used by the Irish Medical Council to test the applied clinical knowledge of international medical graduates seeking intern / NCHD registration in Ireland. The exam consists of MCQ / SBA style questions across a 3-hour paper and covers the core knowledge needed for safe day-one practice as an Irish intern.",
    toc: tocPres2,
    sections: sectionsPres2,
    faqs: faqsPres2,
    faqCta: {
      title: "Still have a questions?",
      text: "Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!",
      buttonLabel: "Start Learning",
    },
    comparison: {
      heading: "PRES 2 vs PLAB 1 Comparison",
      noteHeading: "Equivalence note (verify against Irish Medical Council before publish — evolving area)",
      noteBullets: [
        "The Irish Medical Council currently treats a PLAB 1 pass as PRES-2 equivalent in practice, allowing many PLAB 1 pass holders to progress directly to PRES 3.",
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
          colA: "IMC may accept PLAB 1 as PRES 2-equivalent",
          colB: "PLAB 1 pass is benchmarked to UKMLA-AKT standard",
        },
      ],
      footerText:
        "Candidates targeting Irish internship should normally plan PRES 2 (or confirm PRES-2 exemption via PLAB 1). Candidates targeting UK registration primarily should sit PLAB 1. Always check the latest Irish Medical Council and GMC guidance as equivalence rules can evolve.",
    },
    relatedExams: [
      {
        title: "PRES 3 — OSCE (Ireland)",
        description: "required practical stage after PRES 2 / exemption",
        tags: [
          { label: "Next step", variant: 2 },
          { label: "pres-3-osce", variant: 2 },
        ],
        image: "/ireland_course.webp",
        href: "/courses/pres-3-osce",
      },
      {
        title: "PLAB 1 / UKMLA-AKT",
        description: "alternative/parallel UK GMC pathway",
        tags: [
          { label: "Comparison", variant: 1 },
          { label: "plab-1-ukmla-akt", variant: 1 },
        ],
        image: "/plab1_course.webp",
        href: "/courses/plab-1-ukmla",
      },
      {
        title: "UKFPO-NCA / UKFPO-PSA",
        description: "relevant if also targeting UK Foundation Programme alongside Ireland",
        tags: [
          { label: "Parallel route", variant: 3 },
          { label: "ukfpo-nca, /ukfpo-psa", variant: 3 },
        ],
        image: "/uk_course.webp",
        href: "/courses/national-clinical-assessment",
      },
    ],
    pathway: pathwayIrelandPres,
    videoId: "cfrFBCcj840",
    videoTitle: "Crack PRES2 with Confidence",
    ctaTitle: "READY TO ACE PRES 2?",
    ctaCopy: "Choose your learning path and start your PRES Level 2 preparation with PLABCOACH today.",
    subscribeHref: "/course-plan?course=pres-level-2",
  },
  "pres-3-osce": {
    slug: "pres-3-osce",
    eyebrow: "PRES 3",
    title: "PRES 3 — OSCE & Data Interpretation:\nComplete Guide to Stations,\nSkills & Preparation",
    heroImage: COMMON_HERO_IMAGE,
    heroDescription:
      "PRES 3 is the Irish Medical Council's practical OSCE combined with a separate data interpretation assessment. It is the final clinical stage of the PRES pathway for international medical graduates applying for intern or NCHD registration in Ireland, testing real-world consultation skills, procedures, communication and the ability to act on ECGs, ABGs, imaging and lab results correctly.",
    toc: tocPres3,
    sections: sectionsPres3,
    faqs: faqsPres3,
    faqCta: {
      title: "Still have a questions?",
      text: "Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!",
      buttonLabel: "Start Learning",
    },
    relatedExams: [
      {
        title: "PRES Level 2",
        description: "written exam required or exempted before PRES 3",
        tags: [
          { label: "Prerequisite", variant: 2 },
          { label: "pres-level-2", variant: 2 },
        ],
        image: "/ireland_course.webp",
        href: "/courses/pres-level-2",
      },
      {
        title: "PLAB 2 / UKMLA-CPSA",
        description: "UK GMC practical exam for comparison / parallel planning",
        tags: [
          { label: "Comparison", variant: 1 },
          { label: "plab-2-ukmla-cpsa", variant: 1 },
        ],
        image: "/plab_2_courses_img.webp",
        href: "/courses/plab-2-ukmla",
      },
      {
        title: "UKFPO-NCA / UKFPO-PSA",
        description: "relevant if also applying to UK Foundation Programme",
        tags: [
          { label: "Parallel route", variant: 3 },
          { label: "ukfpo-nca, /ukfpo-psa", variant: 3 },
        ],
        image: "/ukfpo_courses__indv_img.webp",
        href: "/courses/national-clinical-assessment",
      },
    ],
    pathway: pathwayIrelandPres,
    videoId: "LXPbAtgIitI",
    videoTitle: "Preparing Doctors for Safe, Ethical & Effective Medical Practice in Ireland",
    ctaTitle: "READY TO ACE PRES 3?",
    ctaCopy: "Choose your learning path and start your preparation with PLABCOACH today.",
    subscribeHref: "/course-plan?course=pres-3-osce",
  },
  "national-clinical-assessment": {
    slug: "national-clinical-assessment",
    eyebrow: "NCA",
    title: "National Clinical Assessment (NCA):\nComplete Guide to Stations,\nRanking & Preparation",
    heroImage: COMMON_HERO_IMAGE,
    heroDescription:
      "The National Clinical Assessment (NCA) is used by the UK Foundation Programme Office (UKFPO) as a core ranked component of UK Foundation Programme recruitment for eligible applicant groups. It combines short clinical, communication and prioritisation stations to assess the day-one capabilities of a safe FY1 doctor and to rank candidates competitively against each other across the country.",
    toc: tocNca,
    sections: sectionsNca,
    faqs: faqsNca,
    faqCta: {
      title: "Still have a questions?",
      text: "Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!",
      buttonLabel: "Start Learning",
    },
    relatedExams: [
      {
        title: "Prescribing Safety Assessment (PSA)",
        description: "often required alongside NCA for UKFPO ranking / FY1 readiness",
        tags: [
          { label: "Next step", variant: 3 },
          { label: "prescribing-safety-assessment", variant: 3 },
        ],
        image: "/uk_course.webp",
        href: "/courses/prescribing-safety-assessment",
      },
      {
        title: "PLAB 1 / UKMLA-AKT",
        description: "relevant for GMC registration before UKFP applications",
        tags: [
          { label: "Prerequisite", variant: 1 },
          { label: "plab-1-ukmla-akt", variant: 1 },
        ],
        image: "/plab1_course.webp",
        href: "/courses/plab-1-ukmla",
      },
      {
        title: "PLAB 2 / UKMLA-CPSA",
        description: "relevant for GMC registration before UKFP applications",
        tags: [
          { label: "Prerequisite", variant: 1 },
          { label: "plab-2-ukmla-cpsa", variant: 1 },
        ],
        image: "/plab_2_courses_img.webp",
        href: "/courses/plab-2-ukmla",
      },
    ],
    pathway: pathwayUkFoundation,
    videoId: "XBKh3msgunc",
    videoTitle: "Master the UKFPO National Clinical Assessment NCA with PLABCOACH",
    ctaTitle: "READY TO ACE THE NCA?",
    ctaCopy: "Choose your learning path and start your National Clinical Assessment preparation with PLABCOACH today.",
    subscribeHref: "/course-plan?course=national-clinical-assessment",
  },
  "prescribing-safety-assessment": {
    slug: "prescribing-safety-assessment",
    eyebrow: "PSA",
    title: "Prescribing Safety Assessment (PSA):\nComplete Guide to Format,\nDomains & Preparation",
    heroImage: COMMON_HERO_IMAGE,
    heroDescription:
      "The Prescribing Safety Assessment (PSA) is a two-hour online assessment that tests the core prescribing skills of a safe new prescriber in UK practice. It covers drug selection, prescription review, calculations and infusions, monitoring and interpretation of results, adverse-drug-reaction management and patient communication about medicines. A clear PSA pass is often required for UK medical student graduation, UKFPO Foundation entry or an employer's pre-induction prescribing sign-off.",
    toc: tocPsa,
    sections: sectionsPsa,
    faqs: faqsPsa,
    faqCta: {
      title: "Still have a questions?",
      text: "Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!",
      buttonLabel: "Start Learning",
    },
    relatedExams: [
      {
        title: "UKFPO — NCA",
        description: "UK Foundation Programme ranking assessment, often paired with PSA",
        tags: [
          { label: "Next step", variant: 3 },
          { label: "national-clinical-assessment", variant: 3 },
        ],
        image: "/ukfpo_courses__indv_img.webp",
        href: "/courses/national-clinical-assessment",
      },
      {
        title: "PLAB 1 / UKMLA-AKT",
        description: "broader GMC written exam, overlapping therapeutics knowledge",
        tags: [
          { label: "Related", variant: 1 },
          { label: "plab-1-ukmla-akt", variant: 1 },
        ],
        image: "/plab1_course.webp",
        href: "/courses/plab-1-ukmla",
      },
      {
        title: "PRES Level 2 (Ireland)",
        description: "Irish written exam with prescribing and therapeutics overlap",
        tags: [
          { label: "Related", variant: 2 },
          { label: "pres-level-2", variant: 2 },
        ],
        image: "/pres_2_courses_img.webp",
        href: "/courses/pres-level-2",
      },
    ],
    pathway: pathwayUkFoundation,
    videoId: "8vvnBr06HSI",
    videoTitle: "Prescribing Safety Assessment preparation with PLABCoach",
    ctaTitle: "READY TO ACE THE PSA?",
    ctaCopy: "Choose your learning path and start your Prescribing Safety Assessment preparation with PLABCOACH today.",
    subscribeHref: "/course-plan?course=prescribing-safety-assessment",
  },
} satisfies Record<string, CourseDetailData>;

export type CourseDetailSlug = keyof typeof courseDetails;
