import type React from "react";

export type ServiceDetailProps = {
  servicetitle: React.ReactNode;
  servicedesc: string;
  direction: "ltr" | "rtl";
  SERVICES_CATEGORIES: {
    title: string;
    description: string;
  }[];
  greatercontent:boolean
};
