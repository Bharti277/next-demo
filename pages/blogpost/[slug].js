import React from "react";

const Slug = (props) => {
  const blog = props.myBlog;
  function createMarkup(c) {
    return {
      __html: c,
    };
  }

  return (
    <>
      <div>{blog?.slug}</div>

      <div dangerouslySetInnerHTML={createMarkup(blog?.context)}></div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;

  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await data.json();

  return {
    props: { myBlog },
  };
}

export default Slug;
