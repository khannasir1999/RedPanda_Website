import type { ServiceDetailProps } from "../types/servicedetailprops";

const BRANDING_DETAIL: ServiceDetailProps[] = [{
  servicetitle: <>Branding</>,
  servicedesc:
    "Build a strong identity that resonates. Our branding services craft a unique visual and voice identity for your business, helping you connect with your audience and stand out in the market.",
  direction: "ltr",
  SERVICES_CATEGORIES: [
    {
      title: "Brand Identity Development",
      description:
        "Define your brand’s purpose, personality, and positioning with a compelling identity system.",
    },
    {
      title: "Digital Style Guides & Guidelines",
      description:
        "Create scalable typography, color, spacing, and component rules for consistent brand usage.",
    },
    {
      title: "Visual Language Definition",
      description:
        "Establish icons, illustration styles, motion rules, and imagery that express your brand.",
    },
    {
      title: "Branding Integration into UI Components",
      description:
        "Apply the brand system across buttons, inputs, cards, and modules for cohesive product UIs.",
    },
    {
      title: "Brand Consistency Across Platforms",
      description:
        "Ensure visual and tone consistency across web, mobile, social, and marketing assets.",
    },
  ],
  greatercontent:true
}];

const DEVELOPMENT_DETAIL: ServiceDetailProps[] = [{
  servicetitle: <>Development</>,
  servicedesc:
    "We turn brilliant designs into working digital products. Our development services build robust, high‑performing websites, applications, and software tailored to your needs and built with clean, scalable code.",
  direction: "rtl",
  SERVICES_CATEGORIES: [
    {
      title: "Front‑End Development",
      description:
        "Modern, performant UI built with component-driven architectures and accessibility in mind.",
    },
    {
      title: "Back‑End Development",
      description:
        "Secure APIs and services with clean architecture, robust data layers, and reliability.",
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross‑platform apps optimized for performance, UX, and maintainability.",
    },
    {
      title: "API Development & Integration",
      description:
        "Design, document, and integrate REST/GraphQL services and third‑party platforms.",
    },
    {
      title: "Database Design & Management",
      description:
        "Relational and NoSQL modeling, migrations, performance tuning, and operations.",
    },
    {
      title: "Quality Assurance & Testing",
      description:
        "Automated and manual testing pipelines that ensure reliability before and after release.",
    },
  ],
  greatercontent:true
}];

const SAAS_DESIGN_DETAIL: ServiceDetailProps[] = [{
  servicetitle: (
    <>
      SaaS <span className="font-medium text-red-primary-400">Design</span>
    </>
  ),
  servicedesc:
    "Build a powerful and user‑friendly SaaS solution. Our SaaS design services focus on clear navigation, efficient workflows, and seamless UX that makes your software a valuable tool for customers.",
  direction: "rtl",
  SERVICES_CATEGORIES: [
    {
      title: "SaaS UI/UX Strategy",
      description:
        "Define personas, jobs‑to‑be‑done, and flows aligned to business goals and user needs.",
    },
    {
      title: "Dashboard & Analytics Design",
      description:
        "Actionable insights with information hierarchy, visual clarity, and accessibility.",
    },
    {
      title: "Integration Point Design",
      description:
        "Design integrations, webhooks, and marketplace experiences users can trust.",
    },
    {
      title: "Scalable UI Component Design for Development",
      description:
        "Design tokens and component libraries that scale across teams and products.",
    },
    {
      title: "User Onboarding Experience Design",
      description:
        "Guided onboarding, empty states, and education that improve activation and retention.",
    },
  ],
  greatercontent:true
}];

const PRODUCT_DESIGN_DETAIL: ServiceDetailProps[] = [{
  servicetitle: (
    <>
      Product <span className="font-medium text-red-primary-400">Design</span>
    </>
  ),
  servicedesc:
    "Designing digital products that solve problems and delight users. We blend strategy, research, and expert UI/UX to create functional, desirable, and viable products tailored to your market.",
  direction: "ltr",
  SERVICES_CATEGORIES: [
    {
      title: "Product Strategy & Definition",
      description:
        "Clarify vision, outcomes, and roadmap with market fit and value proposition.",
    },
    {
      title: "Feature Planning & Prioritization",
      description:
        "Prioritize high‑impact features using data, effort, and desirability frameworks.",
    },
    {
      title: "End‑to‑End UI/UX Design",
      description:
        "From discovery to delivery—flows, wireframes, design systems, and specs.",
    },
    {
      title: "Prototyping & Testing",
      description:
        "Interactive prototypes validated through user testing and iteration.",
    },
    {
      title: "Minimum Viable Product (MVP) Design",
      description:
        "Launch fast with a focused, testable product that proves value early.",
    },
    {
      title: "Design for Scalability & Development",
      description:
        "Systemized patterns and documentation that scale across platforms and teams.",
    },
  ],
  greatercontent:true
}];

const WEB_DESIGN_DETAIL: ServiceDetailProps[] = [{
  servicetitle: (
    <>
      Web <span className="font-medium text-red-primary-400">Design</span>
    </>
  ),
  servicedesc:
    "Get a website that works for your business. We design and build custom sites that attract visitors, engage your audience, and are optimized to help you achieve your specific goals.",
  direction: "rtl",
  SERVICES_CATEGORIES: [
    {
      title: "Responsive Web Design",
      description:
        "Mobile‑first layouts that adapt beautifully across breakpoints and devices.",
    },
    {
      title: "Landing Page Design",
      description:
        "High‑converting pages with clear messaging, hierarchy, and visual focus.",
    },
    {
      title: "E‑commerce Website Design",
      description:
        "Product discovery, PDPs, carts, and checkout optimized for conversion.",
    },
    {
      title: "Website Redesign",
      description:
        "Modernize UX, visuals, and performance without losing SEO equity.",
    },
    {
      title: "Usability Testing",
      description:
        "Evaluate and improve task success, clarity, and overall site experience.",
    },
  ],
  greatercontent:false
}];

const UI_UX_DETAIL: ServiceDetailProps[] = [{
  servicetitle: (
    <>
      UI/UX <span className="font-medium text-red-primary-400">Design</span>
    </>
  ),
  servicedesc:
    "Building user interfaces (UI) and user experiences (UX) that work seamlessly. We research, strategize, and design to create clear navigation, engaging interactions, and a positive experience for everyone who uses your digital product.",
  direction: "ltr",
  SERVICES_CATEGORIES: [
    {
      title: "User Research & Strategy",
      description:
        "Understand users’ needs and context to inform product decisions and priorities.",
    },
    {
      title: "Information Architecture",
      description:
        "Organize content and navigation for findability, clarity, and flow.",
    },
    {
      title: "Wireframing & Prototyping",
      description:
        "Low‑ to high‑fidelity flows and prototypes that validate ideas quickly.",
    },
    {
      title: "Visual Design",
      description:
        "A clean, accessible interface with typography, color, and layout that scale.",
    },
    {
      title: "Usability Testing",
      description:
        "Measure task success and refine designs through iterative testing.",
    },
  ],
  greatercontent:false
}];

export {
  BRANDING_DETAIL,
  DEVELOPMENT_DETAIL,
  SAAS_DESIGN_DETAIL,
  PRODUCT_DESIGN_DETAIL,
  WEB_DESIGN_DETAIL,
  UI_UX_DETAIL,
};