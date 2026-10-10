
import Homepage from "./_components/Home";
import { createPageMetadata } from "./_components/pageMetadata";

export const metadata = createPageMetadata({
  title: "PLAB, UKMLA & Medical Exam Preparation | PLABcoach",
  description:
    "Prepare for PLAB, UKMLA, PRES and UK Foundation Programme exams with expert-led courses, question banks and mock exams for international medical graduates.",
  canonicalPath: "/",
  image: "/hero_banner_image.webp",
  imageAlt: "Doctors preparing for medical exams with PLABcoach",
});

export default function Home() {
  return (
      <> 
      <Homepage/>
      </>
      
      
  );
}
