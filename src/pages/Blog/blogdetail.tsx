import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import HeaderFooterLayout from "../../layout/headerfooterlayout"
import { useGetBlogById } from "../../services/blog.service";
import Sectionheading from "@/components/shared/Sectionheading";
import SimilarTopicCard from "@/components/Blog/similartopiccard";
import { SIMILAR_TOPICS } from "@/constants/similartopics";

const Blogdetail = () => {
  const { id: paramId } = useParams();
  const navigate = useNavigate();
  const id = paramId ? Number(paramId) : undefined;

  const { blog, loading, error } = useGetBlogById(id);

  useEffect(() => {
    if (!id && !loading) {
      navigate("/");
    }
  }, [id, loading, navigate]);

  if (!id) {
    return null;
  }

  return (
    <HeaderFooterLayout>
      <section className="bg-background-white pt-30 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto mb-10">
          {loading && <div className="text-center py-20 text-xl text-gray-500">Loading blog details...</div>}

          {error && <div className="text-center py-20 text-xl text-red-500">{error}</div>}

          {!loading && !error && blog && (
            <div className="flex flex-col gap-6 md:gap-10">
              <div className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h1
                className="text-3xl md:text-5xl font-chillax font-semibold leading-tight text-gray-900"
                dangerouslySetInnerHTML={{ __html: blog.title }}
              />

              <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-chillax prose-headings:font-bold prose-p:text-gray-700 prose-a:text-red-primary-400 prose-img:rounded-xl">
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>
            </div>
          )}
        </div>

        <Sectionheading
          heading={
            <>
              Explore {" "}
              <span className="font-medium text-red-primary-400 md:inline-block block">
                Similar Topics
              </span>
            </>
          }
        />

        <div className="mt-10 flex gap-6 overflow-x-auto pb-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SIMILAR_TOPICS.map((topic) => (
            <SimilarTopicCard
              key={topic.id}
              id={topic.id}
              title={topic.title}
              category={topic.category}
              image={topic.image}
            />
          ))}
        </div>

      </section>
    </HeaderFooterLayout>
  )
}

export default Blogdetail