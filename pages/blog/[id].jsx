import React from 'react';
import Head from 'next/head';
import axios from 'axios';

const host = "https://jsonplaceholder.typicode.com";

export const getStaticPaths = async () => {
  const blog = await axios.get(`${host}/photos`);
  const data = blog.data;

  const paths = data.map(data => {
    return {
      params: { id: data.id.toString() }
    }
  });

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const blog = await axios.get(`${host}/photos/${id}`);

  return {
    props: {
      blog: blog.data
    }
  }
}

function Detail({ blog }) {
  return (
    <div>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.title} />

        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content="Offering tour packages for individuals or groups." />
        <meta property="og:image" content={blog.thumbnailUrl} />

        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content=" Offering tour packages for individuals or groups." />
        <meta name="twitter:image" content={blog.thumbnailUrl} />
        <meta name="twitter:card" content="summary_large_image" />

      </Head>
      <h1>{blog.title}</h1>
      <img src={blog.url} alt={blog.title} />
    </div>
  );
}

export default Detail;