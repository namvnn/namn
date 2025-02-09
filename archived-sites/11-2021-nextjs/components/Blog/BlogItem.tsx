import { IBlog } from "../../data/blog";
import styles from "../../styles/Blog.module.scss";

interface BlogItemProps {
  blog: IBlog;
}
const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
  return (
    <div className={styles["blog-item"]}>
      <div></div>
      <a href={blog.link} target="_blank" rel="noopener noreferrer">
        <div>
          <ul>
            <li>{blog.day}</li>
            <li>{blog.month}</li>
            <li>{blog.year}</li>
          </ul>
        </div>
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.shortDescription}</p>
        </div>
      </a>
    </div>
  );
};

export default BlogItem;
