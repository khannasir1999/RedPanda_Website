import type { WorkflowChip } from "../types/workflowchip";

export const WORKFLOW_CHIPS: WorkflowChip[] = [
  {
    text: "Research & Planning",
    bgcolor: "bg-red-primary-400 hover:bg-red-primary-500",
    key: 1,
    mb: "md:mb-20",
    justifyclass: "justify-center md:justify-start",
  },
  {
    text: "Conceptualization & Initial Design",
    bgcolor: "bg-yellow-primary-400 hover:bg-yellow-primary-500 ",
    key: 2,
    mb: "md:mb-40",
    justifyclass: "justify-center md:justify-end tracking-[-2.51px]",
  },
  {
    text: "Development & Refinement",
    bgcolor: "bg-purple-primary hover:bg-purple-dark",
    key: 3,
    mb: "md:mb-15",
    justifyclass: "justify-center md:justify-start",
  },
  {
    text: "Preparation & Handoff",
    bgcolor: "bg-green-primary hover:bg-green-dark",
    key: 4,
    mb: "mb-0",
    justifyclass: "justify-center md:justify-end",
  },
];
