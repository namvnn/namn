import Head from "next/head";
import BlogItem from "../../components/Blog/BlogItem";
import MainImageBlog from "../../components/Blog/MainImageBlog";
import SEO from "../../components/SEO";
import blogItems, { IBlog } from "../../data/blog";
import styles from "../../styles/Blog.module.scss";
const Blogs = () => {
  return (
    <>
      <SEO
        title="Blog | Developer | Nam Nguyen"
        description="My blogs are written on dev.to and linked them in my personal website"
      />
      <div className={styles["blog"]}>
        <MainImageBlog />
        <section className="container">
          {blogItems.map((blogItem: IBlog, index: number) => (
            <BlogItem key={index} blog={blogItem} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Blogs;
