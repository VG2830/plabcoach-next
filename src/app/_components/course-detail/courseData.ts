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
  subscribeButtonLabel: string;
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
      " Yes. PLAB 1 can be sat immediately after graduating from medical school; a completed internship is required later, for full GMC registration, not for sitting the exam.",
  },
  {
    question: "How many attempts am I allowed at PLAB 1?",
    answer:
      " GMC allows a standard number of attempts (commonly cited as four); candidates who don't pass within that limit may apply for an additional attempt with evidence of further learning.",
  },
  {
    question: "Where can I sit PLAB 1?",
    answer:
      " At British Council or GMC-approved test centres worldwide, including UK and international venues — unlike PLAB 2, which is only held in Manchester.",
  },
  {
    question: "What score do I need to pass PLAB 1?",
    answer:
      "The pass mark is set per sitting using a standardised process rather than a single fixed number.",
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
  { id: "who-needs", label: "Who Needs to Take PLAB 2" },
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
    heading: "What is PLAB 2 / CPSA?",
    paragraphs: [
      "PLAB 2 is the second and practical part of the GMC's PLAB assessment for international medical graduates. Since the introduction of the UKMLA, PLAB 2 has been mapped to the Clinical and Professional Skills Assessment (CPSA) framework — so a PLAB 2 pass is benchmarked to the same clinical-skills standard that UK medical graduates must demonstrate before gaining registration.",
      "PLAB 2 is an Objective Structured Clinical Examination (OSCE) delivered in Manchester, UK. It tests real-world clinical skills including history taking, physical examination, practical procedures, communication skills, information giving, and management decisions in time-limited stations.",
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs to Take PLAB 2",
    paragraphs: [
      "Any candidate who has passed PLAB 1 and wishes to proceed to full GMC registration must sit and pass PLAB 2. GMC requires PLAB 2 to be passed within 2 years of the PLAB 1 pass date (measured from the date PLAB 1 was sat, not the date results were issued) — candidates should factor this window into their booking timeline, since Manchester seats are in high demand.",
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
    heading: "Marking Domains",
    paragraphs: [
      "Each station is marked against three domains, applied consistently across the circuit ,Data gathering, technical and assessment skills — history-taking accuracy, examination technique, correct use of instruments , Clinical management skills — appropriate, UK-guideline-based decision-making and next steps,Interpersonal skills — communication, empathy, professionalism, and patient safety behaviours",
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility & Registration Process",
    paragraphs: [
      "A valid PLAB 1 pass, within the current 2-year validity window , Primary medical qualification already verified (carried over from PLAB 1 booking) ,A verified GMC Online account with PLAB 2 booking access unlocked after PLAB 1 results are issued , Candidates are responsible for securing any visa required to travel to and sit the exam in Manchester",
    ],
  },
  {
    id: "dates",
    heading: "PLAB 2 Dates & Fees",
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
      " No. Unlike PLAB 1, PLAB 2 is held only at the GMC's Clinical Assessment Centre in Manchester.",
  },
  {
    question: "How long do I have to pass PLAB 2 after passing PLAB 1?",
    answer:
      "GMC requires PLAB 2 to be passed within 2 years of the PLAB 1 pass date — plan your booking timeline around this window.",
  },
  {
    question: "How many stations does PLAB 2 have?",
    answer:
      "16 scored clinical stations, plus 2 rest stations, each scored station lasting 8 minutes.",
  },
  {
    question: "How many attempts am I allowed at PLAB 2?",
    answer:
      "Check the  attempt limit on gmc-uk.org (commonly cited as 4, consistent with PLAB 1) ",
  },
  {
    question: "What is the PLAB 2 fee?",
    answer:
      "£1,036, effective from 1 April 2026 — ⚠ confirm current figure on gmc-uk.org, as GMC revises fees annually.",
  },
  {
    question: "How is PLAB 2 different from PRES 3 in Ireland?",
    answer:
      "PRES 3 is the Irish Medical Council's OSCE + data interpretation assessment. It is a different exam run by a different regulator, although both are practical clinical assessments. You should not assume automatic portability of a pass; always check current reciprocity guidance directly with the GMC or Irish Medical Council for your intended route.",
  },
];
const comparisonPlab2: ComparisonTable = {
  heading: "PLAB 2 vs PRES 3 Comparison",
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
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs to Take PRES 2?",
    paragraphs: [
      "PRES 2 is required for IMGs who qualified outside the EU/EEA/Switzerland, do not hold a higher qualification or an internship the IMC deems equivalent to the Irish internship programme, and do not qualify for an exemption. Candidates who have passed the UK's PLAB 1 are generally recognised by the IMC as PRES 2-equivalent in practice and may be exempt.",
    ],
  },
  {
    id: "format",
    heading: "PRES 2 Format & Structure",
    paragraphs: [
      "The exam consists of multiple-choice questions that are clinically based. It has an approximate duration of three hours and is delivered as a written exam. The content areas include obstetrics and gynaecology, paediatrics, psychiatry, surgery, medicine, and general practice."
    ],
  },
  {
    id: "syllabus",
    heading: "PRES 2 Syllabus",
    paragraphs: [
      "PRES 2 tests theoretical knowledge and its application to clinical scenarios across five core areas:Medicine / General Practice,Surgery,Obstetrics & Gynaecology,Paediatrics,Psychiatry."
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility & Registration Process",
    paragraphs: [
      "Eligibility generally requires a primary medical qualification from a medical school outside the EU/EEA/Switzerland, with no qualifying exemption, such as a relevant higher qualification, equivalent internship, or accepted alternative examination pass. Applicants must also provide evidence of English-language proficiency; however, the exact current IELTS requirement should be confirmed directly with the Medical Council of Ireland, as published sources may differ."
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
      "Preparation for PRES 2 should involve systematically covering all five core content areas rather than focusing mainly on familiar specialties. Candidates should practise a high volume of clinical-scenario MCQs specifically aligned with the PRES syllabus, rather than relying solely on generic question banks. It is also advisable to complete at least one full timed practice session under the three-hour exam format before the actual sitting. Particular attention should be given to obstetrics, paediatrics, and psychiatry, as these areas may receive less emphasis in some other medical examinations and can therefore be overlooked during preparation."
    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach's PRES 2 preparation programme includes SmartQBank for PRES 2, featuring a comprehensive question bank and online mock tests, along with structured coverage of all five PRES 2 content areas. The courses are led by Dr. Karam Singh (MD, MRCGP), an NHS doctor and educator with more than a decade of experience preparing international medical graduates (IMGs) for medical licensing examinations in the UK and Ireland.",
      "While no course can guarantee an exam result, structured preparation across all five PRES 2 content areas can improve exam readiness and help candidates avoid the mistakes that often lead to repeat attempts.",
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "This course is designed for international medical graduates preparing for their first PRES 2 attempt, as well as candidates who have previously attempted the examination and want a more structured, feedback-driven approach to revision. It is also suitable for doctors who are familiar with clinical practice in their home country but need Ireland-specific, IMC-aligned preparation. Candidates considering whether to sit PRES 2 or pursue a PLAB 1 exemption can also use the course to prepare for their chosen pathway, including those studying remotely in preparation for an upcoming PRES 2 sitting."
   
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
      " The Irish Medical Council generally recognises a PLAB 1 pass as equivalent to PRES 2 in practice. Confirm your specific exemption eligibility directly with the Irish Medical Council, as individual circumstances vary.",
  },
  {
    question: "What subjects does PRES 2 cover?",
    answer:
      "Medicine/general practice, surgery, obstetrics & gynaecology, paediatrics, and psychiatry.",
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
  { id: "who-needs", label: "Who Needs PRES 3" },
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
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs PRES 3",
    paragraphs: [
      "Any candidate who has passed PRES 2 and does not hold an accepted exemption must sit and pass PRES 3 to proceed toward Irish Medical Council registration. Candidates who hold a PLAB 2 pass should check the Irish Medical Council's current position on PLAB 2 recognition before assuming automatic exemption from PRES 3 — as of mid-2026 this recognition was a proposed rule change"
    ],
  },
  {
    id: "format",
    heading: "PRES 3 Format & Stations",
    paragraphs: [
      "The PRES 3 assessment uses an OSCE format combined with data interpretation, delivered across approximately 12–16 stations. Each station lasts approximately 8 minutes. The assessment is conducted in person in Dublin only. Station types include history taking, physical examination, communication (including breaking bad news), prescribing safety, practical procedures, and data interpretation."
    ],
  },
  {
    id: "data-interpret",
    heading: "Domains Assessed",
    paragraphs: [
      "PRES 3 stations assess candidates across three combined domains: **communication**, including patient interaction, breaking bad news, and clearly explaining diagnoses and management plans; **interpretation**, involving the interpretation of ECGs, blood results, blood gases, and radiology; and **practical skills**, including clinical examination techniques and procedural competence."
    ],
  },
  {
    id: "eligibility",
    heading: " Eligibility & Registration Process",
    paragraphs: [
      "To be eligible for PRES 3, candidates must have a **valid PRES 2 pass**, as the examination sequence is fixed and enforced through the IMC candidate portal, meaning PRES 3 cannot be booked until PRES 2 has been passed. Candidates must not already hold a **qualifying exemption**, and their credentials must have been **previously verified through EPIC**, with this verification carried forward from the PRES 2 application. Candidates are also responsible for arranging and covering their own **travel and accommodation in Dublin** for the examination sitting."
    ],
  },
  {
    id: "dates",
    heading: "PRES 3 Dates & Fees",
    paragraphs: [
      "PRES 3 fee: reported at approximately €1,500 in the most recently published 2026 figures referenced by third-party sources — the most significant single cost in the Irish registration process.",
      "PRES 3 availability has historically been limited relative to demand — as of early 2026, reported figures showed several hundred candidates waiting to sit PRES 3, with only a small number of sittings run per year. This scarcity is the direct reason behind the Irish Medical Council's proposed PLAB 2 recognition (see comparison section below) — worth mentioning briefly in this section as useful context for candidates weighing their options, cited to a specific published source rather than stated as a general claim.",
    ],
  },
  {
    id: "prepare",
    heading: "How to Prepare for PRES 3",
    paragraphs: [
      "To prepare effectively for PRES 3, candidates should practise the **full station circuit under the actual 8-minute timing**, rather than focusing on individual skills in isolation. Particular emphasis should be placed on **data interpretation**, including ECGs, blood gases, blood results, and radiology, as this is a distinct assessed domain. Candidates should also rehearse **communication-focused stations**, such as breaking bad news and explaining diagnoses, ideally with a study partner or coach, as these skills can be difficult to self-assess. For practical procedure stations, using **manikins or simulators that closely match the equipment used in the examination** can help familiarise candidates with the required techniques. Finally, candidates should **plan travel and accommodation in Dublin well in advance**, as examination dates may be limited and accommodation near the venue can become scarce once dates are announced."
    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach’s PRES 3 preparation includes SmartNotes covering all assessed domains, including communication, data interpretation, and practical skills, along with Self-Paced Mastery Videos that allow candidates to prepare according to their own schedule. The programme also offers Live Coaching, available both online and offline, with manikin-based practical skills training, as well as mock examinations, including live OSCE mocks in Dublin and online data interpretation mocks. The courses are led by Dr. Karam Singh (MD, MRCGP), an NHS doctor and educator with over a decade of experience preparing IMGs for UK and Ireland licensing examinations.",
      "While no course can guarantee an examination result, structured, feedback-driven OSCE and data interpretation practice can improve exam readiness and help candidates identify and avoid common mistakes that may otherwise contribute to repeat attempts.",
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "This course is designed for **doctors who have passed PRES 2 and are progressing to practical OSCE and data interpretation preparation**. It is particularly suitable for candidates who have a strong understanding of the clinical content but need **structured practice with station timing and performance**, as well as those who have attempted PRES 3 previously and are looking for more **targeted, feedback-driven preparation**. The course is also useful for doctors who require focused practice in **data interpretation**, including ECGs, blood gases, blood results, and radiology, alongside clinical stations, and for candidates planning to travel to **Dublin** who want to experience realistic mock examination practice beforehand."
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
      "As of mid-2026, the Irish Medical Council had proposed recognising PLAB 2 as an alternative to PRES 3, but this was not yet confirmed. Check the Irish Medical Council's current published position directly before assuming exemption.",
  },
  {
    question: "How many stations does PRES 3 have?",
    answer:
      "Approximately 12–16 stations, each around 8 minutes — ⚠ confirm the current exact figure on medicalcouncil.ie.",
  },
  {
    question: "What is the PRES 3 fee??",
    answer:
      "Reported at approximately €1,500 in recent published figures — ⚠ confirm current fee on medicalcouncil.ie, separate from travel/accommodation costs.",
  },
];
const comparisonPres3: ComparisonTable = {
  heading: "PRES 3 vs PLAB 2 Comparison",
  noteHeading: "",
  // noteBullets: [
  //   "The Irish Medical Council already treats PLAB 1 as equivalent to PRES 2 in practice — candidates who pass PLAB 1 can be exempted from sitting PRES 2.",
  //   "PLAB 1 and PRES 2 are set independently by different regulators (GMC vs Irish Medical Council) and are not sat on a shared date or joint booking system, even though their content/standard is treated as equivalent.",
  // ],
  colAHeader: "PRES 3",
  colBHeader: "PLAB 2",
  colAColor: "var(--course-detail-comparison-plab1-header)",
  colBColor: "var(--course-detail-comparison-pres2-header)",
  rows: [
    { feature: "Governing body", colA: "Irish Medical Council (IMC)", colB: "GMC (UK)" },
    { feature: "Format", colA: "OSCE + data interpretation, ~12–16 stations", colB: "16-station OSCE, 8 minutes each" },
    { feature: "Registration granted", colA: "Ireland", colB: "UK (GMC)" },
    {
      feature: "Recognised equivalence",
      colA: "Formal recognition of PLAB 2 as alternative proposed — verify current status",
      colB: "Irish Medical Council has proposed recognising PLAB 2 as a PRES 3 alternative — not yet confirmed",
    },
  ],
  footerText:
    "",
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
      "The UKFPO National Clinical Assessment (UKFPO-NCA) is an eligibility requirement set by the UK Foundation Programme Office (UKFPO), delivered by Manchester University NHS Foundation Trust. The UKFPO's own materials label it the Clinical Assessment — worth citing accurately when linking to foundationprogramme.nhs.uk — but UKFPO-NCA is the name used throughout this page and PLABcoach's course, as it's the term candidates search for and recognise. It is not a GMC exam and is separate from PLAB: it exists specifically to confirm that a candidate applying to the UK Foundation Programme has the clinical skills to work safely as an F1 doctor, at the point of eligibility application rather than at the point of GMC registration.",
      "It applies only to candidates who qualified from medical school on or before a specific cutoff date set for each UKFP application cycle (5 August 2024 for the UKFP2026 cycle) — candidates who qualify after that date are assessed differently. There are no exceptions or exemptions once a candidate falls within the required group.",
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
      "The UKFPO-NCA is delivered as a **Clinical Competence Assessment (CCA)** conducted in person and consists of **12 scored stations**. Each station lasts **10 minutes**, including **1 minute of preparation time**, with the complete assessment session taking approximately **4 hours** in a single sitting. The assessment is delivered by **Manchester University NHS Foundation Trust on behalf of the UKFPO**."
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
      "Eligibility for the UKFPO-NCA is determined automatically as part of the **UK Foundation Programme (UKFP) application process**. Candidates do not opt in or register separately for the UKFPO-NCA; instead, the UKFPO identifies candidates who are required to sit the assessment based on their **qualification date**. The qualification cutoff date is **cycle-specific** and may change between recruitment cycles, so candidates should confirm the exact cutoff date for the relevant cycle on the official foundation programme website. Once eligibility is confirmed, the UKFPO contacts candidates directly with **payment instructions**, and candidates should not attempt to make payment before receiving this communication. Failure to complete payment within the specified payment window results in **automatic withdrawal of the application**, with no grace period or exceptions."
    ],
  },
  {
    id: "dates",
    heading: " UKFPO-NCA Dates & Fees",
    paragraphs: [
      "Fee has changed between recent cycles — reported at £850 for the UKFP2026 cycle (primary source: foundationprogramme.nhs.uk) rising to a reported £1,000 for the UKFP2027 cycle."
    ],
  },
  {
    id: "prepare",
    heading: "How to Prepare for the UKFPO-NCA",
    paragraphs: [
      "Manchester University NHS Foundation Trust does not recommend or endorse any specific training course for the UKFPO-NCA, so preparation should be viewed as **general skills-building support rather than an officially endorsed pathway**. Candidates should practise the **12-station CCA format**, focusing on short, structured stations where the limited **1-minute preparation time** makes speed and organisation important. Preparation should cover core **F1-level ward skills**, including safe prescribing, appropriate escalation, basic clinical procedures, and clear communication under time pressure. Candidates should also rehearse under realistic conditions, completing each station within the **10-minute timeframe, including reading and preparation**. For those coming from a non-UK clinical background, reviewing **UK-specific ward processes, terminology, and clinical practices** can help familiarise them with the standards expected of a UK F1 starter."
    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach’s UKFPO-NCA preparation includes **SmartNotes covering the UKFPO-NCA station format** and **Self-Paced Mastery Videos** to support flexible, independent preparation. Candidates can also access **Live Coaching with Dr. Karam Singh and Dr. Anjum Kohli**, available both online and offline. While no course can guarantee an examination result, **structured station practice can improve exam readiness and help candidates identify and avoid common mistakes that may otherwise contribute to repeat attempts**."
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "This course is designed for **international medical graduates applying to the UK Foundation Programme who qualified on or before the relevant cycle’s cutoff date**. It is also suitable for candidates who already hold a **PLAB pass but may not realise that this does not exempt them from the UKFPO-NCA**, as well as doctors who need to familiarise themselves with **UK ward-level F1 practice, prescribing, and escalation processes**. Candidates who have previously attempted the UKFPO-NCA and want more **structured, timed station practice** may also benefit from the course, as can those preparing remotely before their assessment date."
    ],
  },
];

const faqsNca: FAQItem[] = [
  {
    question: "What does UKFPO-NCA stand for?",
    answer:
      "UKFPO-NCA stands for National Clinical Assessment. The UKFPO's own materials label it the Clinical Assessment — both refer to the same eligibility requirement for the UK Foundation Programme.",
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
      "Check on foundationprogramme.nhs.uk — recently reported figures range from £850 to £1,000 depending on cycle",
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
    ],
  },
  {
    id: "who-needs",
    heading: "Who Needs to Take the UKFPO-PSA?",
    paragraphs: [
      "The UKFPO-PSA is required for **all UK final-year medical students as part of their medical school assessment**. It is also required for **Foundation doctors who have not yet passed the PSA by the time they start F1**, including international medical graduates entering F1 through the UK Foundation Programme. For **F2 Standalone doctors**, sitting the PSA is recommended by the UKFPO but is not mandatory. A doctor who has not passed the PSA by the end of F1 does not automatically fail; the **ARCP panel will typically consider an extension to F1** to allow the doctor to complete the assessment, provided all other F1 requirements have been met."
    ],
  },
  {
    id: "format",
    heading: "UKFPO-PSA Format & Question Types",
    paragraphs: [
      "The UKFPO-PSA is a **60-question, computer-based examination** developed by the British Pharmacological Society (BPS) and the Medical Schools Council (MSC). The assessment covers key areas including **prescribing, prescription review, dose calculation, identification of adverse drug reactions and interactions, medicines communication, and data interpretation to support prescribing decisions**, with eight core question types covered in the BPS’s PSA preparation resources. The **exam duration should be confirmed on the official Prescribing Safety Assessment website**. During the assessment, candidates have access to the **BNF and BNF for Children (BNFc) through MedicinesComplete**, while UK candidates also have access to the NICE BNF; however, personal notes cannot be added to the BNF during the assessment",
      
    ],
  },
  {
    id: "domains",
    heading: "Standard Assessed",
    paragraphs: [
      "The PSA assesses competencies the GMC has defined for new medical graduates, including writing new prescriptions, reviewing and checking existing prescriptions, calculating drug doses accurately, identifying and avoiding adverse drug reactions and medication errors, and adjusting prescribing decisions to individual patient circumstances"
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility & Timing",
    paragraphs: [
      "International medical graduates entering F1 through the UK Foundation Programme are expected to sit the PSA during F1, not before starting.",
      "Candidates are supported through this process by their Foundation School, not by self-service booking as with PLAB or PRES",
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
      "Work through each of the core question types individually — prescribing, review, calculation, adverse reaction identification, and communication — rather than generic pharmacology revision alone.",
      "Practise dose calculations under time pressure, as this is a common area candidates lose marks in.Get comfortable navigating the BNF/BNFc quickly, since it's available during the real exam and speed of lookup matters as much as knowledge",

    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach’s UKFPO-PSA preparation includes **SmartNotes covering all core PSA question types**, along with **Self-Paced Mastery Videos** for flexible, independent preparation. Candidates can also access **Live Coaching with Dr. Karam Singh and Dr. Anjum Kohli**, available both online and offline."
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "This course is designed for **F1 doctors, including international medical graduates, who have not yet passed the PSA and need to complete it before progressing to F2**. It is particularly suitable for candidates who are confident in their clinical knowledge but want focused practice in **dose calculations and prescribing scenarios**. The course is also useful for doctors who want to become **faster and more confident navigating the BNF and BNFc** before sitting the examination, as well as candidates who did not sit or pass the PSA at medical school and are approaching the assessment for the first time during F1"
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
    heading: "What is the UKFPO-PSA?",
    paragraphs: [
      "The Multi-Specialty Recruitment Assessment (MSRA) is a computer-based selection exam used by NHS specialty recruitment as part of the application process for GP training (ST1) and several other UK specialty training programmes. It is designed to provide a consistent, standardised way of comparing applicants' professional judgement and clinical problem-solving ability.",
      "Both papers are based on the Foundation Programme curriculum and assess how well a candidate applies clinical knowledge to real decision-making — the MSRA is not a knowledge-recall exam in the way PLAB 1 is; it centres on judgement under realistic scenarios."
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
      "The MSRA is a **computer-based examination** with a total duration of approximately **2 hours and 55 minutes**, including a **5-minute break between the two papers**. The first paper, **Professional Dilemmas (PD)**, lasts **95 minutes** and contains approximately **50 scenario-based questions** in a situational judgement format, including ranking and single-best-answer questions. The second paper, **Clinical Problem Solving (CPS)**, lasts **75 minutes** and assesses **clinical knowledge and decision-making** through multiple-choice questions across approximately **12 clinical topic areas**. The examination is delivered at **Pearson VUE test centres**.",
      
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
      "Eligibility is set by the specific specialty training programme(s) a candidate is applying to, not by a single universal MSRA eligibility rule.",
      "Candidates typically apply through Oriel (the national recruitment platform) as part of their specialty application, with MSRA booking instructions issued once an application is accepted into the assessment stage",
    ],
  },
  {
    id: "dates",
    heading: "MSRA Dates & Fees",
    paragraphs: [
      "The MSRA runs in scheduled sitting windows tied to each recruitment round (commonly referenced rounds include a January window for posts starting later that year, and a September window for posts starting the following February"
    ],
  },
  {
    id: "prepare",
    heading: " How to Prepare for the MSRA",
    paragraphs: [
      "To prepare for the MSRA, candidates should practise **Professional Dilemmas ranking questions** specifically, keeping in mind that each question asks for the single most appropriate action rather than a sequence of actions. Candidates should also build familiarity with **NHS structures, GMC ethical guidance, including Good Medical Practice, and typical primary and secondary care working environments**, as the Professional Dilemmas paper assumes this context. For **Clinical Problem Solving**, preparation should cover the full range of clinical topics rather than focusing only on familiar specialties. Candidates should also practise both papers under realistic timed conditions, allowing **95 minutes for Professional Dilemmas and 75 minutes for Clinical Problem Solving**, with only a short break between them."

    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach’s UKFPO-PSA preparation includes **SmartNotes covering all core MSRA question types**, along with **Self-Paced Mastery Videos** for flexible, independent preparation. Candidates can also access **Live Coaching with Dr. Karam Singh and Dr. Anjum Kohli**, available both online and offline."
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "This course is designed for **doctors applying to GP training (ST1) or other specialty programmes that use the MSRA**. It is particularly suitable for candidates who find **Professional Dilemmas ranking questions** unintuitive and want structured practice with judgement-based scenarios. The course also supports doctors seeking **focused Clinical Problem Solving revision across a broad range of specialty topics**, as well as candidates who have previously sat the MSRA and want to strengthen their performance across both papers."
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
      "Professional Dilemmas (a 95-minute situational judgement test) and Clinical Problem Solving (a 75-minute clinical knowledge paper), completed in one sitting with a short break between",
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

const sectionsMrcpAkt: CourseSection[] = [
  {
    id: "what-is",
    heading: "What is the UKFPO-PSA?",
    paragraphs: [
      "The Multi-Specialty Recruitment Assessment (MSRA) is a computer-based selection exam used by NHS specialty recruitment as part of the application process for GP training (ST1) and several other UK specialty training programmes. It is designed to provide a consistent, standardised way of comparing applicants' professional judgement and clinical problem-solving ability.",
      "Both papers are based on the Foundation Programme curriculum and assess how well a candidate applies clinical knowledge to real decision-making — the MSRA is not a knowledge-recall exam in the way PLAB 1 is; it centres on judgement under realistic scenarios."
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
      "The MSRA is a **computer-based examination** with a total duration of approximately **2 hours and 55 minutes**, including a **5-minute break between the two papers**. The first paper, **Professional Dilemmas (PD)**, lasts **95 minutes** and contains approximately **50 scenario-based questions** in a situational judgement format, including ranking and single-best-answer questions. The second paper, **Clinical Problem Solving (CPS)**, lasts **75 minutes** and assesses **clinical knowledge and decision-making** through multiple-choice questions across approximately **12 clinical topic areas**. The examination is delivered at **Pearson VUE test centres**.",
      
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
      "Eligibility is set by the specific specialty training programme(s) a candidate is applying to, not by a single universal MSRA eligibility rule.",
      "Candidates typically apply through Oriel (the national recruitment platform) as part of their specialty application, with MSRA booking instructions issued once an application is accepted into the assessment stage",
    ],
  },
  {
    id: "dates",
    heading: "MSRA Dates & Fees",
    paragraphs: [
      "The MSRA runs in scheduled sitting windows tied to each recruitment round (commonly referenced rounds include a January window for posts starting later that year, and a September window for posts starting the following February"
    ],
  },
  {
    id: "prepare",
    heading: " How to Prepare for the MSRA",
    paragraphs: [
      "To prepare for the MSRA, candidates should practise **Professional Dilemmas ranking questions** specifically, keeping in mind that each question asks for the single most appropriate action rather than a sequence of actions. Candidates should also build familiarity with **NHS structures, GMC ethical guidance, including Good Medical Practice, and typical primary and secondary care working environments**, as the Professional Dilemmas paper assumes this context. For **Clinical Problem Solving**, preparation should cover the full range of clinical topics rather than focusing only on familiar specialties. Candidates should also practise both papers under realistic timed conditions, allowing **95 minutes for Professional Dilemmas and 75 minutes for Clinical Problem Solving**, with only a short break between them."

    ],
  },
  {
    id: "how-helps",
    heading: "How PLABcoach Helps",
    paragraphs: [
      "PLABcoach’s UKFPO-PSA preparation includes **SmartNotes covering all core MSRA question types**, along with **Self-Paced Mastery Videos** for flexible, independent preparation. Candidates can also access **Live Coaching with Dr. Karam Singh and Dr. Anjum Kohli**, available both online and offline."
    ],
  },
  {
    id: "who-should",
    heading: "Who Should Take This Course",
    paragraphs: [
      "This course is designed for **doctors applying to GP training (ST1) or other specialty programmes that use the MSRA**. It is particularly suitable for candidates who find **Professional Dilemmas ranking questions** unintuitive and want structured practice with judgement-based scenarios. The course also supports doctors seeking **focused Clinical Problem Solving revision across a broad range of specialty topics**, as well as candidates who have previously sat the MSRA and want to strengthen their performance across both papers."
    ],
  },
];

const faqsMrcpAkt: FAQItem[] = [
  {
    question: "What does MSRA stand for?",
    answer:
      " Multi-Specialty Recruitment Assessment — a computer-based exam used in recruitment for GP training and several other UK specialty training programmes.",
  },
  {
    question: "What are the two MSRA papers? ",
    answer:
      "Professional Dilemmas (a 95-minute situational judgement test) and Clinical Problem Solving (a 75-minute clinical knowledge paper), completed in one sitting with a short break between",
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
    subscribeButtonLabel: "Start PLAB 1 Preparation",
    subscribeHref: "/course-plan?course=plab-1-ukmla",
  },
  "plab-2-ukmla": {
    slug: "plab-2-ukmla",
    eyebrow: "PLAB 2 / UKMLA-CPSA",
    title: "PLAB 2 / UKMLA-CPSA:\nComplete Guide to OSCE \nStations, Marking & Preparation",
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
    comparison: comparisonPlab2,
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
    subscribeButtonLabel: "Start PLAB 2 Preparation",
    subscribeHref: "/course-plan?course=plab-2-ukmla",
  },
  "pres-level-2": {
    slug: "pres-level-2",
    eyebrow: "PRES LEVEL 2",
    title: "PRES 2 Exam Ireland: \nComplete Guide to Format,\nSyllabus & Preparation",
    heroImage: COMMON_HERO_IMAGE,
    heroDescription:
      "PRES 2 is the written multiple-choice exam set by the Irish Medical Council (IMC), the first sat component of Ireland's Pre-Registration Examination System (PRES) for international medical graduates seeking Irish registration. It tests clinical knowledge across obstetrics & gynaecology, paediatrics, psychiatry, surgery, and medicine/general practice through clinical-scenario-based questions. Candidates must pass PRES 2 before attempting PRES 3, the OSCE component.",
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
          colA: "Irish Medical Council recognises PLAB 1 pass as PRES 2-equivalent",
          colB: "PLAB 1 ≈ PRES 2 (exemption in practice)",
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
      // {
      //   title: "UKFPO-NCA / UKFPO-PSA",
      //   description: "relevant if also targeting UK Foundation Programme alongside Ireland",
      //   tags: [
      //     { label: "Parallel route", variant: 3 },
      //     { label: "ukfpo-nca, /ukfpo-psa", variant: 3 },
      //   ],
      //   image: "/uk_course.webp",
      //   href: "/courses/national-clinical-assessment",
      // },
    ],
    pathway: pathwayIrelandPres,
    videoId: "cfrFBCcj840",
    videoTitle: "Crack PRES2 with Confidence",
    ctaTitle: "READY TO ACE PRES 2?",
    ctaCopy: "Choose your learning path and start your PRES Level 2 preparation with PLABCOACH today.",
    subscribeButtonLabel: "Start PRES 2 Preparation",
    subscribeHref: "/course-plan?course=pres-level-2",
  },
  "pres-3-osce": {
    slug: "pres-3-osce",
    eyebrow: "PRES 3",
    title: "PRES 3 Exam Ireland:\nOSCE & Data Interpretation Guide",
    heroImage: COMMON_HERO_IMAGE,
    heroDescription:
      "PRES 3 is the clinical OSCE and data interpretation exam set by the Irish Medical Council (IMC), the second and final component of Ireland's Pre-Registration Examination System (PRES) for international medical graduates. It is held in person in Dublin, combining an Objective Structured Clinical Examination (OSCE) of roughly 12–16 stations with a data interpretation assessment. Candidates must pass PRES 2 before they are eligible to sit PRES 3.",
    toc: tocPres3,
    sections: sectionsPres3,
    faqs: faqsPres3,
    faqCta: {
      title: "Still have a questions?",
      text: "Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!",
      buttonLabel: "Start Learning",
    },
    comparison: comparisonPres3,
    relatedExams: [
      {
        title: "PRES 2 ",
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
      // {
      //   title: "UKFPO-NCA / UKFPO-PSA",
      //   description: "relevant if also applying to UK Foundation Programme",
      //   tags: [
      //     { label: "Parallel route", variant: 3 },
      //     { label: "ukfpo-nca, /ukfpo-psa", variant: 3 },
      //   ],
      //   image: "/ukfpo_courses__indv_img.webp",
      //   href: "/courses/national-clinical-assessment",
      // },
    ],
    pathway: pathwayIrelandPres,
    videoId: "LXPbAtgIitI",
    videoTitle: "Preparing Doctors for Safe, Ethical & Effective Medical Practice in Ireland",
    ctaTitle: "READY TO ACE PRES 3?",
    ctaCopy: "Choose your learning path and start your preparation with PLABCOACH today.",
    subscribeButtonLabel: "Start PRES 3 Preparation",
    subscribeHref: "/course-plan?course=pres-3-osce",
  },
  "national-clinical-assessment": {
    slug: "national-clinical-assessment",
    eyebrow: "NCA",
    title: "UKFPO-NCA: Complete \nGuide to Format & Preparation",
    heroImage: COMMON_HERO_IMAGE,
    heroDescription:
      "The UKFPO National Clinical Assessment (UKFPO-NCA) is a mandatory eligibility requirement for the UK Foundation Programme, set by the UKFPO, required for any candidate who qualified from medical school on or before 5 August 2024, regardless of nationality or GMC registration status. Delivered by Manchester University NHS Foundation Trust, it consists of 12 stations, each 10 minutes long including 1 minute of preparation time, run in a single session lasting approximately 4 hours.",
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
        title: "UKFPO-PSA",
        description: "often required alongside PSA for UKFPO ranking / FY1 readiness",
        tags: [
          { label: "Next step", variant: 3 },
          { label: "prescribing-safety-assessment", variant: 3 },
        ],
        image: "/uk_course.webp",
        href: "/courses/prescribing-safety-assessment",
      },
      {
        title: "PLAB 2 / UKMLA-CPSA",
        description: "relevant for GMC registration before UKFP applications",
        tags: [
          { label: "Prerequisite", variant: 1 },
          { label: "plab-1-ukmla-akt", variant: 1 },
        ],
        image: "/plab1_course.webp",
        href: "/courses/plab-2-ukmla",
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
    pathway: pathwayUkFoundation,
    videoId: "XBKh3msgunc",
    videoTitle: "Master the UKFPO National Clinical Assessment NCA with PLABCOACH",
    ctaTitle: "READY TO ACE THE NCA?",
    ctaCopy: "Choose your learning path and start your National Clinical Assessment preparation with PLABCOACH today.",
    subscribeButtonLabel: "Start NCA Preparation",
    subscribeHref: "/course-plan?course=national-clinical-assessment",
  },
  "prescribing-safety-assessment": {
    slug: "prescribing-safety-assessment",
    eyebrow: "PSA",
    title: "UKFPO-PSA: Complete \nGuide to the Prescribing Safety Assessment",
    heroImage: COMMON_HERO_IMAGE,
    heroDescription:
      "The UKFPO Prescribing Safety Assessment (UKFPO-PSA) is a 60-question computer-based exam, developed jointly by the British Pharmacological Society (BPS) and the Medical Schools Council (MSC), that all Foundation Year 1 (F1) doctors must pass to progress to F2. Most UK medical graduates sit and pass the PSA at medical school; international medical graduates and any UK graduates who haven't yet passed it sit it during their F1 year, with the assessment typically funded by the UKFPO rather than paid for by the candidate.",
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
        title: "MSRA",
        description: "",
        tags: [
          { label: "Related", variant: 1 },
          { label: "plab-1-ukmla-akt", variant: 1 },
        ],
        image: "/plab1_course.webp",
        href: "/courses/msra",
      },
      // {
      //   title: "PRES Level 2 (Ireland)",
      //   description: "Irish written exam with prescribing and therapeutics overlap",
      //   tags: [
      //     { label: "Related", variant: 2 },
      //     { label: "pres-level-2", variant: 2 },
      //   ],
      //   image: "/pres_2_courses_img.webp",
      //   href: "/courses/pres-level-2",
      // },
    ],
    pathway: pathwayUkFoundation,
    videoId: "8vvnBr06HSI",
    videoTitle: "Prescribing Safety Assessment preparation with PLABCoach",
    ctaTitle: "READY TO ACE THE PSA?",
    ctaCopy: "Choose your learning path and start your Prescribing Safety Assessment preparation with PLABCOACH today.",
    subscribeButtonLabel: "Start PSA Preparation",
    subscribeHref: "/course-plan?course=prescribing-safety-assessment",
  },
    "msra": {
    slug: "msra",
    eyebrow: "MSRA",
    title: "MSRA Exam: Complete \nGuide to Format, Scoring & Preparation",
    heroImage: COMMON_HERO_IMAGE,
    heroDescription:
      "The Multi-Specialty Recruitment Assessment (MSRA) is a computer-based exam used as part of recruitment into GP training and several other UK specialty training programmes. It consists of two papers — Professional Dilemmas (a situational judgement test) and Clinical Problem Solving — completed in a single sitting of just under 3 hours at a Pearson VUE test centre. Each specialty sets its own minimum score threshold, and the MSRA score directly affects a candidate's ranking for training posts.",
    toc: tocMsra,
    sections: sectionsMsra,
    faqs: faqsMsra,
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
        title: "UKFPO-PSA",
        description: "broader GMC written exam, overlapping therapeutics knowledge",
        tags: [
          { label: "Related", variant: 1 },
          { label: "plab-1-ukmla-akt", variant: 1 },
        ],
        image: "/plab1_course.webp",
        href: "/courses/prescribing-safety-assessment",
      },
      // {
      //   title: "PRES Level 2 (Ireland)",
      //   description: "Irish written exam with prescribing and therapeutics overlap",
      //   tags: [
      //     { label: "Related", variant: 2 },
      //     { label: "pres-level-2", variant: 2 },
      //   ],
      //   image: "/pres_2_courses_img.webp",
      //   href: "/courses/pres-level-2",
      // },
    ],
    pathway: pathwayUkFoundation,
    videoId: "8vvnBr06HSI",
    videoTitle: "Prescribing Safety Assessment preparation with PLABCoach",
    ctaTitle: "READY TO ACE THE PSA?",
    ctaCopy: "Choose your learning path and start your Prescribing Safety Assessment preparation with PLABCOACH today.",
    subscribeButtonLabel: "Start PSA Preparation",
    subscribeHref: "/course-plan?course=prescribing-safety-assessment",
  },
    "mrcp-akt": {
    slug: "mrcp-akt",
    eyebrow: "MRCP-AKT",
    title: "MRCP-AKT Exam: Complete \nGuide to Format, Scoring & Preparation",
    heroImage: COMMON_HERO_IMAGE,
    heroDescription:
      "The Multi-Specialty Recruitment Assessment (MSRA) is a computer-based exam used as part of recruitment into GP training and several other UK specialty training programmes. It consists of two papers — Professional Dilemmas (a situational judgement test) and Clinical Problem Solving — completed in a single sitting of just under 3 hours at a Pearson VUE test centre. Each specialty sets its own minimum score threshold, and the MSRA score directly affects a candidate's ranking for training posts.",
    toc: tocMrcpAkt,
    sections: sectionsMrcpAkt,
    faqs: faqsMrcpAkt,
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
        title: "UKFPO-PSA",
        description: "broader GMC written exam, overlapping therapeutics knowledge",
        tags: [
          { label: "Related", variant: 1 },
          { label: "plab-1-ukmla-akt", variant: 1 },
        ],
        image: "/plab1_course.webp",
        href: "/courses/prescribing-safety-assessment",
      },
      // {
      //   title: "PRES Level 2 (Ireland)",
      //   description: "Irish written exam with prescribing and therapeutics overlap",
      //   tags: [
      //     { label: "Related", variant: 2 },
      //     { label: "pres-level-2", variant: 2 },
      //   ],
      //   image: "/pres_2_courses_img.webp",
      //   href: "/courses/pres-level-2",
      // },
    ],
    pathway: pathwayUkFoundation,
    videoId: "8vvnBr06HSI",
    videoTitle: "Prescribing Safety Assessment preparation with PLABCoach",
    ctaTitle: "READY TO ACE THE PSA?",
    ctaCopy: "Choose your learning path and start your Prescribing Safety Assessment preparation with PLABCOACH today.",
    subscribeButtonLabel: "Start PSA Preparation",
    subscribeHref: "/course-plan?course=prescribing-safety-assessment",
  },
} satisfies Record<string, CourseDetailData>;

export type CourseDetailSlug = keyof typeof courseDetails;
