import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { motion } from "framer-motion";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";

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

    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social_icon">
        <motion.a
          href="https://github.com/koni24"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 2 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://github.com/koni24"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 2 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
      </ul>
    </footer>
  );
}

export default Footer
