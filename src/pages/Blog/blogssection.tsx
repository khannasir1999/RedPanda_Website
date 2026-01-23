import JourneyBadge from "../../components/journeys/journeybadge";
import { useActive } from "../../hooks/useActive";
import Blogcard from "./blogcard";
import { useScrollBlurAnimation } from "../../hooks/useScrollBlurAnimation";
import { useRef } from "react";
import { useGetBlogs, useGetTags } from "../../services/blog.service";

const Blogssection = () => {
    const { blogs, loading: blogsLoading, error: blogsError } = useGetBlogs();
    const { tags, loading: tagsLoading } = useGetTags();

    const { setActive: setActiveBlog, checkIsActive: checkActiveBlog } = useActive(0);
    const blogsContainerRef = useRef(null);

    useScrollBlurAnimation(".blog-card", blogsContainerRef);

    return (
        <section className="w-full px-3 md:px-5 bg-background-white">
            <div className="py-8 flex gap-2 md:gap-5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {tagsLoading && <p>Loading tags...</p>}
                {!tagsLoading && tags.map((tag, index) => {
                    return (
                        <JourneyBadge
                            key={tag.id}
                            text={tag.name}
                            handleClick={() => setActiveBlog(index)}
                            active={checkActiveBlog(index)}
                            className="py-1 px-3"
                        />
                    );
                })}
            </div>
            <div ref={blogsContainerRef}>
                {blogsLoading && <p className="text-center">Loading blogs...</p>}
                {blogsError && <p className="text-center text-red-500">{blogsError}</p>}
                {!blogsLoading && !blogsError && blogs.map((blog, index, arr) => (
                    <Blogcard
                        key={blog.id}
                        lastitem={arr.length - 1 === index}
                        {...blog}
                    />
                ))}
            </div>
        </section>
    );
};

export default Blogssection;
