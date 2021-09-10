import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Naufal Fikri</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.top}></div>

        <div>
          <img className={styles.splashImg} src="/madebymygf.png" />
        </div>

        <div className={styles.splashContent}>
          <h1>
            Naufal Fikri <span className={styles.pronouns}>he/him</span>
          </h1>
          <p>Hello there,</p>
          <p>
            I'm a software engineer and computer science educator based in
            Melbourne, Australia. This website will soon be a log for
            interesting things I do, when I get to do them.
          </p>

          <p>
            Work history:
            <ul>
              <li>
                <strong><a href="https://ingenious.ai">InGenious AI</a></strong>, Full Stack Software Engineer (2020-): <br/>Building a platform
                to craft engaging and feature-rich chatbots.
              </li>
              <li><strong><a href="https://cis.unimelb.edu.au">University of Melbourne</a></strong>, Teaching Assistant (2018-2020)</li>
              <li>University of Melbourne, Research Assistant (2019): <br/>Published <a href="http://renata.borovica-gajic.com/data/2020_adc.pdf">Function Interpolation for Learned Index Structures</a>.</li>
            </ul>
          </p>

          <span>
            <Link href="/resume.pdf">Full Resume (PDF)</Link>
            {" . "}
            <Link href="/blog">Blog</Link>
            {" | "}
            <a href="https://github.com/naufik">GitHub</a>
            {" . "}
            <a href="https://linkedin.com/in/naufik">LinkedIn</a>
          </span>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>(c) Naufal Fikri Setiawan / 2016-2021</p>
      </footer>
    </div>
  );
};

export default Home;
