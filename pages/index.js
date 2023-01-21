import { Fragment } from 'react';
import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excert:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, optio. Laborum eum tempore natus possimus iure facere debitis nisi nam quaerat nemo, quis quod, in quasi voluptates illum nulla deserunt.',
    date: '2022-01-18',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excert:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, optio. Laborum eum tempore natus possimus iure facere debitis nisi nam quaerat nemo, quis quod, in quasi voluptates illum nulla deserunt.',
    date: '2022-01-18',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excert:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, optio. Laborum eum tempore natus possimus iure facere debitis nisi nam quaerat nemo, quis quod, in quasi voluptates illum nulla deserunt.',
    date: '2022-01-18',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excert:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, optio. Laborum eum tempore natus possimus iure facere debitis nisi nam quaerat nemo, quis quod, in quasi voluptates illum nulla deserunt.',
    date: '2022-01-18',
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Niko`s Blog</title>
        <meta
          name="description"
          content="I post about programing and web development"
        />
      </Head>
      <Hero></Hero>
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
