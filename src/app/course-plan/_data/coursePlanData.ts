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
  testimonial: {
    name: string;
    role: string;
    country: string;
    quote: string;
  };
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
  testimonial: {
    name: "Safia Abdulla",
    role: "Doctor",
    country: "IRELAND",
    quote:
      "Great course. The videos were great help. Dr Karam was very kind and helpful. He helped us and gave us tips whenever he was around. He knew us by name even before he had met us in person. Dr Anjum’s advice and notes were also very useful. The timing of the course was good. It allowed for enough practice time before the exam. The environment at the center was well-suited for practicing and studying. Very grateful for the opportunity to perform procedures and the large number of needles available at the center. Was also grateful for being able to practice on the breast mannequin which was one of my exam stations. However, a few of the mannequins require replacement like the one for rectal exam. The otoscopes and fundoscopes were not working.",
  },
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

export const coursePlanCatalog: Record<string, CoursePlanConfig> = {
  "pres-3": pres3Plan,
  ukmla: pres3Plan,
};

export const defaultCoursePlan = pres3Plan;

export function getCoursePlanHref(courseSlug: string) {
  return `/course-plan?course=${encodeURIComponent(courseSlug)}`;
}

export function getPlanSelectionHref(courseSlug: string, planId: string) {
  return `/course-plan?course=${encodeURIComponent(courseSlug)}&selectedPlan=${encodeURIComponent(planId)}`;
}
