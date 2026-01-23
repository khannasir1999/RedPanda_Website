import Ratingscard from "../components/reviews/ratingscard";
import Recommendationcard from "../components/reviews/recommendationcard";
import type { SliderItem } from "../types/slideritem";


export const REVIEWS: SliderItem[] = [
    { node: <Ratingscard /> },
    { node: <Recommendationcard /> },
    { node: <Recommendationcard /> }
];