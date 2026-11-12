const content = `# PLABcoach

> UK-based exam preparation platform for international medical graduates and UK-trained doctors, founded by Dr Karam Singh (M.D., MRCGP), NHS GP. Courses, question banks, mock exams and clinical skills coaching for PLAB, UKMLA, PRES and UK Foundation Programme exams.

## Courses

- [PLAB 1 / UKMLA AKT](https://plabcoach.com/plab1-ukmla-akt-subscription-plans/): format, syllabus, dates and preparation for the GMC's written knowledge exam
- [PLAB 2 / UKMLA CPSA](https://plabcoach.com/plab2-ukmla-cpsa-subscription/): the GMC's 16-station clinical OSCE in Manchester
- [PRES 2](https://plabcoach.com/pres-level-2-subscription-plans/): Irish Medical Council written exam
- [PRES 3](https://plabcoach.com/pres-3-osce-data-interpretation-subscription-plans/): Irish Medical Council OSCE and data interpretation exam in Dublin
- [UKFPO National Clinical Assessment](https://plabcoach.com/national-clinical-assessment-nca-subscription-plans/): clinical assessment for UK Foundation Programme applicants
- [Prescribing Safety Assessment](https://plabcoach.com/prescribing-safety-assessment-psa-subscription/): prescribing exam passed during F1
- [MRCGP AKT](https://plabcoach.com/mrcgp-akt-preparation/): launching soon
- [MSRA](https://plabcoach.com/msra-preparation/): launching soon

## About

- [About PLABcoach and Dr Karam Singh](https://plabcoach.com/about-us/)
- [Important exam dates](https://plabcoach.com/important-exam-dates/)
- [Blog](https://plabcoach.com/blogs/)
- [Contact](https://plabcoach.com/contact-us/)
`;

export function GET() { return new Response(content, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600, s-maxage=3600" } }); }
