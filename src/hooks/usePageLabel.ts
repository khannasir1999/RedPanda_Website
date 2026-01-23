import { useLocation } from "react-router";

export const usePageLabel = (): string => {
    const location = useLocation();
    const pathname = location.pathname;

    // Map routes to their labels
    const labelMap: Record<string, string> = {
        "/": "",
        "/services": "Services",
        "/thank-you": "Thank you",
        "/casestudies": "Portfolio",
        "/blog": "Knowledge Base",
        "/get-quote": "Knowledge Base",
    };

    const label = labelMap[pathname] || "";

    return label;
};