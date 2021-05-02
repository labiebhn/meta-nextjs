import React from 'react';
import Head from 'next/head';
import axios from 'axios';

const host = "http://localhost:5000/v1";

export const getStaticPaths = async () => {
  const blog = await axios.get(`${host}/blog`);
  const data = blog.data.data;

  const paths = data.map(data => {
    return {
      params: { slug: data.slug }
    }
  });

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const blog = await axios.get(`${host}/blog/slug/${slug}`);

  return {
    props: {
      blog: blog.data.data
    }
  }
}

function Detail({ blog }) {
  return (
    <div>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.contentText} />
      </Head>
      <h1>{blog.title}</h1>
      <p>{blog.contentText}</p>
    </div>
  );
}

export default Detail;