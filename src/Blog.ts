interface Blog {
  id?: number;
  title: string;
  author: string;
  body: string;
}

interface BlogListProps {
  blogs: Blog[];
  title: string;
}

export default Blog
export type { BlogListProps }