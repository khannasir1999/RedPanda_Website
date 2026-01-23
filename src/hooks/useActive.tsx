import { useState } from "react";

const useActive = (activeindex: number | null) => {
    const [activeIndex, setactiveIndex] = useState<number | null>(activeindex);

    function setActive(index: number) {
        setactiveIndex(index);
    }

    function checkIsActive(index: number) {
        return activeIndex !== null && activeIndex === index;
    }

    return {
        activeIndex,
        setActive,
        checkIsActive
    };
};

export { useActive };