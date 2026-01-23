import { useLocation } from "react-router"

export const useCurrentLocation = (href:string | undefined) => {
    const location = useLocation();

    return href === location.pathname;
}