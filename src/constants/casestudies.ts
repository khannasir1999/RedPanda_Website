import cstdyimg1 from "/assets/images/casestudies/study1.png";
import cstdyimg2 from "/assets/images/casestudies/study2.png";
import cstdyimg3 from "/assets/images/casestudies/study3.png";
import cstdyimg4 from "/assets/images/casestudies/study4.png";
import cstdyimg5 from "/assets/images/casestudies/study5.png";
import cstdyimg6 from "/assets/images/casestudies/study6.png";

export interface CaseStudy {
  image: string;
  slug?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  { image: cstdyimg1, slug: "pamper-pro" },
  { image: cstdyimg2, slug: "case-study-2" },
  { image: cstdyimg3 },
  { image: cstdyimg4 },
  { image: cstdyimg5 },
  { image: cstdyimg6 },
];
