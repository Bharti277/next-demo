import React, { useState } from "react";
import Styles from "../styles/Blog.module.css";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

const Blog = (props) => {
  const [blog, setBlog] = useState(props.allBlogs);
  const [count, setCount] = useState(2);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs?${count + 2}`);
    let data = await d.json();
    setBlog(data);
    setCount(count + 2);
  };

  return (
    <div className={Styles.container}>
      <h1>Blogs</h1>
      <div>
        <div>Visit this page</div>
        <main>
          <InfiniteScroll
            dataLength={blog.length}
            next={fetchData}
            hasMore={props.allCount !== blog.length}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
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
          </InfiniteScroll>
        </main>
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

  let allCount = allBlogs.length;

  return {
    props: { allBlogs, allCount },
  };
}
