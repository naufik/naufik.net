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
        <div className={styles.imageContainer}>
          <img className={styles.splashImg} src="/me.png" />
        </div>
        <div className={styles.splashContent}>
          <h1>Naufal Fikri</h1>
          <p>Hello there,</p>
          <p>
            I&apos;m a software engineer and former computer science educator
            based in Melbourne, Australia. Specialising in work around back-end
            development, dev-ops, and automation.
          </p>
          <p>
            <span className={styles.section}>Work history</span>:
            <ul>
              <li>
                <strong>
                  <a href="https://ingenious.ai">InGenious AI</a>
                </strong>
                , Senior Full Stack Software Engineer (2023-).
              </li>
              <li>
                <strong>InGenious AI</strong>, Full Stack Software Engineer
                (2020-2023).
              </li>
              <li>
                <strong>
                  <a href="https://cis.unimelb.edu.au">
                    University of Melbourne
                  </a>
                </strong>
                , Teaching Assistant (2018-2020).
              </li>
              <li>
                <strong>University of Melbourne</strong>, Research Assistant
                (2019): <br />
                Published{" "}
                <a href="http://renata.borovica-gajic.com/data/2020_adc.pdf">
                  Function Interpolation for Learned Index Structures
                </a>
                .
              </li>
              <li>
                <strong>
                  <a href="https://nodeflux.io">Nodeflux</a>
                </strong>
                , Software Engineer Intern (2018).
              </li>
            </ul>
          </p>
          <span className={styles.navTemp}>
            <Link href="/resume.pdf">Resume</Link>
            <sup>PDF</sup>
            {" | "}
            <a href="https://github.com/naufik">GitHub</a>
            {" | "}
            <a href="https://linkedin.com/in/naufik">LinkedIn</a>
          </span>
          <footer className={styles.footer}>
            <p>&copy; Naufal Fikri Setiawan 2016-2025</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Home;
