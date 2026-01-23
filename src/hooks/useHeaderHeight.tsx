import { useState, useEffect } from "react";

export const useHeaderHeight = () => {
    const [headerHeight, setHeaderHeight] = useState<number>(0);

    useEffect(() => {
        const getHeaderHeight = () => {
            const headerEl = document.querySelector(".header");
            const h = headerEl ? (headerEl as HTMLElement).offsetHeight : 0;
            setHeaderHeight(h);
        };

        getHeaderHeight();
        window.addEventListener("resize", getHeaderHeight);
        return () => window.removeEventListener("resize", getHeaderHeight);
    }, []);

    return {
        headerHeight,
        headerHeightStyle: { "--header-h": `${headerHeight}px` } as React.CSSProperties,
    };
};
