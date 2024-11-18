import React, { useState } from "react";
import Styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = (props) => {
  console.log(props);

  const [blog, setBlog] = useState(props.allBlogs);

  return (
    <div>
      <h1>Blogs</h1>
      <div>
        <div>Visit this page</div>

        {blog.map((item, i) => (
          <div key={i}>
            <Link href={`./blogpost/${item.slug}`}>
              <h3 className={Styles.blogpage}>{item.title}</h3>
            </Link>

            <div>{item.context.slice(0, 40)} </div>
            <div>{item.metadesc.substr(0, 40)}</div>
            <div>{item.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs },
  };
}
