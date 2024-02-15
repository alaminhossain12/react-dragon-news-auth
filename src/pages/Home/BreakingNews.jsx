/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex items-center">
      <button className="btn btn-secondary text-2xl">Breaking News</button>
      <Link className="mr-12" to="/">
        <Marquee pauseOnHover={true} speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </Link>
      <Link className="mr-12" to="/">
        <Marquee pauseOnHover={true} speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </Link>
      <Link className="mr-12" to="/">
        <Marquee pauseOnHover={true} speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </Link>
    </div>
  );
};

export default BreakingNews;
