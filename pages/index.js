import { Header, Footer, Work, Skills, Testimonial, About } from "../container";
import Head from "next/head";

import { Navbar } from "../components";
import { client } from "../services/client";

export default function Home(props) {
  const skillData = {
    skills: props.skills,
    experiences: props.experiences,
  };
  const reviewsData = {
    testimonials: props.testimonials,
    brands: props.brands,
  };
  return (
    <>
      <Head>
        <title>Nasyx Nadeem</title>
      </Head>
      <div className="app">
        <Navbar />
        <Header />
        <About data={props.abouts} />
        <Work data={props.works} />
        <Skills data={skillData} />
        {reviewsData.testimonials && reviewsData.testimonials.length > 0 && (
          <Testimonial data={reviewsData} />
        )}
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const abouts = await client.fetch(`*[_type=="abouts"]`);
  const works = await client.fetch(`*[_type=="works"]`);
  const skills = await client.fetch(`*[_type=="skills"]`);
  const experiences = await client.fetch(`*[_type=="experiences"]`);
  const brands = await client.fetch(`*[_type=="brands"]`);
  const testimonials = await client.fetch(`*[_type=="testimonials"]`);

  return {
    props: {
      abouts,
      works,
      skills,
      experiences,
      brands,
      testimonials,
    },
  };
}
