import { useRouter } from 'next/router';
import React from 'react';

const Blog = () => {
  const {
    query: { blogId },
  } = useRouter();
  return <div>Blog {blogId}</div>;
};

export default Blog;
