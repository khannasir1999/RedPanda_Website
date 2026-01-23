import HeaderFooterLayout from "../../layout/headerfooterlayout";
import Journeysection from "../shared/journeysection";
import Blogssection from "./blogssection";
import Herosection from "./herosection";

const Blog = () => {
  return (
    <HeaderFooterLayout>
      <Herosection/>
      <Blogssection/>
      <Journeysection/>
    </HeaderFooterLayout>
  );
};

export default Blog;
