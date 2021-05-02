import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import styles from '../../styles/Blog.module.css'
import Link from 'next/link';

const host = "https://jsonplaceholder.typicode.com";

export const getStaticProps = async () => {
  const blog = await axios.get(`${host}/posts`);

  return {
    props: {
      blog: blog.data
    }
  }
}

function Blog({ blog }) {
  return (
    <div>
      <Head>
        <title>Blog Page | Next JS</title>
        <meta name="description" content="Blog page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia fugiat corporis quidem rerum! Nemo praesentium incidunt ratione quas, natus vero officiis! Aut minus quod tenetur repellat nostrum molestiae inventore ipsam!" />
      </Head>
      Blog list here
      {blog.map(blog => (
        <Link href={`blog/${blog.id}`} key={blog.id}>
          <a>
            <h5 className={styles.link}>{blog.title}</h5>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Blog;