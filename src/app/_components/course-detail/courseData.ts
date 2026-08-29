export type CourseDetailData = {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string;
  paragraphs: string[];
  videoId: string;
  videoTitle: string;
  ctaTitle: string;
  ctaCopy: string;
};

export const courseDetails = {
  "plab-1-ukmla": {
    slug: "plab-1-ukmla",
    eyebrow: "PLAB 1 / UKMLA",
    title: "PLAB 1 / UKMLA — AKT Preparation",
    lead:
      "PLAB 1 / UKMLA preparation focuses on applying core medical knowledge safely and effectively within UK clinical practice.",
    paragraphs: [
      "The course is structured around high-yield concepts, exam-style questions and practical reasoning so candidates can strengthen both knowledge and question-solving technique.",
      "Focused revision, realistic practice and guided learning help candidates identify weak areas and build confidence before the written assessment.",
    ],
    videoId: "6nXIgV_8TVY",
    videoTitle: "PLAB 1 / UKMLA preparation with PLABCoach",
    ctaTitle: "READY TO ACE PLAB 1?",
    ctaCopy: "Choose your learning path and start your PLAB 1 / UKMLA preparation with PLABCOACH today.",
  },
  "plab-2-ukmla": {
    slug: "plab-2-ukmla",
    eyebrow: "PLAB 2 / UKMLA",
    title: "PLAB 2 / UKMLA — CPSA Preparation",
    lead:
      "PLAB 2 / UKMLA preparation develops the clinical, communication and professional skills needed for practical assessment scenarios.",
    paragraphs: [
      "Candidates work through structured clinical encounters that reflect real consultations, with attention to history taking, examination, explanation and safe patient-centred management.",
      "Live coaching and self-paced learning support repeated practice, clearer clinical reasoning and confident performance under timed assessment conditions.",
    ],
    videoId: "6nXIgV_8TVY",
    videoTitle: "PLAB 2 / UKMLA clinical skills preparation with PLABCoach",
    ctaTitle: "READY TO ACE PLAB 2?",
    ctaCopy: "Choose your learning path and start your PLAB 2 / UKMLA clinical preparation with PLABCOACH today.",
  },
  "pres-level-2": {
    slug: "pres-level-2",
    eyebrow: "PRES LEVEL 2",
    title: "PRES Level 2 — Written Assessment",
    lead:
      "PRES Level 2 preparation is designed for candidates progressing through Ireland’s Pre-Registration Examination System (PRES).",
    paragraphs: [
      "The course supports structured revision of clinically relevant knowledge with exam-focused questions, clear explanations and realistic practice designed around applied decision-making.",
      "Candidates can use the learning pathway to strengthen weaker topics, improve question technique and prepare more consistently for the written assessment.",
    ],
    videoId: "LXPbAtgIitI",
    videoTitle: "Preparing doctors for medical practice in Ireland with PLABCoach",
    ctaTitle: "READY TO ACE PRES 2?",
    ctaCopy: "Choose your learning path and start your PRES Level 2 preparation with PLABCOACH today.",
  },
  "pres-3-osce": {
    slug: "pres-3-osce",
    eyebrow: "PRES 3",
    title: "PRES 3 — OSCE and Data Interpretation",
    lead:
      "PRES 3 is the Objective Structured Clinical Examination (OSCE) component of Ireland’s Pre-Registration Examination System (PRES).",
    paragraphs: [
      "This practical exam assesses the clinical skills, communication abilities, and professional conduct of international medical graduates. Candidates participate in a series of clinical scenarios to demonstrate their proficiency in patient care, diagnostic abilities, and medical procedures, ensuring they are prepared to practise safely and effectively in Ireland.",
      "In addition, PRES 3 includes data interpretation tasks, evaluating candidates’ capacity to analyze and apply clinical data in patient management.",
    ],
    videoId: "LXPbAtgIitI",
    videoTitle: "Preparing Doctors for Safe, Ethical & Effective Medical Practice in Ireland",
    ctaTitle: "READY TO ACE PRES 3?",
    ctaCopy: "Choose your learning path and start your preparation with PLABCOACH today.",
  },
  "national-clinical-assessment": {
    slug: "national-clinical-assessment",
    eyebrow: "NCA",
    title: "National Clinical Assessment — Clinical Skills",
    lead:
      "National Clinical Assessment preparation focuses on the practical clinical judgement, communication and professional behaviours expected in structured assessment scenarios.",
    paragraphs: [
      "The course combines scenario-based learning with guided practice to help candidates organise consultations, communicate clearly and make safe, reasoned clinical decisions.",
      "Flexible learning options allow candidates to review core skills repeatedly and build greater confidence before assessment day.",
    ],
    videoId: "6nXIgV_8TVY",
    videoTitle: "National Clinical Assessment preparation with PLABCoach",
    ctaTitle: "READY TO ACE THE NCA?",
    ctaCopy: "Choose your learning path and start your National Clinical Assessment preparation with PLABCOACH today.",
  },
  "prescribing-safety-assessment": {
    slug: "prescribing-safety-assessment",
    eyebrow: "PSA",
    title: "Prescribing Safety Assessment — Safe Prescribing",
    lead:
      "Prescribing Safety Assessment preparation is designed to strengthen safe, accurate and clinically appropriate prescribing decisions.",
    paragraphs: [
      "The course supports candidates in applying prescribing principles to realistic clinical situations, including medicine selection, dose decisions, prescription review and recognition of prescribing risks.",
      "Structured practice and concise revision help candidates improve accuracy, time management and confidence when working through assessment-style prescribing tasks.",
    ],
    videoId: "6nXIgV_8TVY",
    videoTitle: "Prescribing Safety Assessment preparation with PLABCoach",
    ctaTitle: "READY TO ACE THE PSA?",
    ctaCopy: "Choose your learning path and start your Prescribing Safety Assessment preparation with PLABCOACH today.",
  },
} satisfies Record<string, CourseDetailData>;

export type CourseDetailSlug = keyof typeof courseDetails;
