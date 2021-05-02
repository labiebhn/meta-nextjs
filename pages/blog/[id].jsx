import React from 'react';
import Head from 'next/head';
import axios from 'axios';

const host = "https://jsonplaceholder.typicode.com";

export const getStaticPaths = async () => {
  const blog = await axios.get(`${host}/posts`);
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
  const blog = await axios.get(`${host}/posts/${id}`);

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
        <meta name="description" content={blog.body} />
      </Head>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </div>
  );
}

export default Detail;