import React from 'react';
import Head from 'next/head';

function About({ blog }) {
  return (
    <div>
      <Head>
        <title>About Page | Next JS</title>
        <meta name="description" content="About page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia fugiat corporis quidem rerum! Nemo praesentium incidunt ratione quas, natus vero officiis! Aut minus quod tenetur repellat nostrum molestiae inventore ipsam!" />
      </Head>
      Here my about page
    </div>
  );
}

export default About;