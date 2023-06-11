import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const Footer = () => {
  return (
    // <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
    //   <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
    //     <span>{new Date().getFullYear} &copy; All Rights Reserved.</span>

    //     <div className="flex items-center lg:py-2">
    //       Build With <span className="text-primary text-2xl px-1 dark:text-primaryDark">&#9825;</span>
    //       by&nbsp;
    //       <Link
    //         href="https://linkedin"
    //         className="underline underline-offset-2"
    //       >
    //         Codebucks
    //       </Link>
    //     </div>
    //     <Link
    //       href="https://linkedin"
    //       target="_blank"
    //       className="underline underline-offset-2"
    //     >
    //       Say hello
    //     </Link>
    //   </Layout>
    // </footer>

    <footer className="lg:flex-col">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul>
        <CustomLink
          href="/"
          title="Home"
          className="mr-4 dark:text-light text-dark"
        />
        <CustomLink
          href="/about"
          title="About"
          className="mx-4 dark:text-light text-dark"
        />
        <CustomLink
          href="/projects"
          title="Projects"
          className="mx-4 dark:text-light text-dark"
        />
      </ul>
      <ul className="social_icon">
        <motion.a
          href="https://github.com/koni24"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 2 }}
          className="w-6 mx-3 bold"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/konisha-kar-45857b1b6"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 2 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
      </ul>
      <p className="font-bold dark:text-white text-black">
        © 2023 Konisha Kar. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer
