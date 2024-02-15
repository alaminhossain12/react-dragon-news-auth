/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-4 font-poppins font-bold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Login Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login Github
        </button>
      </div>
      <div className="p-4 space-y-4 mb-6">
        <h2 className="text-3xl font-poppins font-bold">Find Us On</h2>
        <a
          href=""
          className="flex text-lg items-center border rounded-t-lg p-3"
        >
          <FaFacebook className="mr-3"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a href="" className="flex text-lg items-center border-x p-3">
          <FaTwitter className="mr-3"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a
          href=""
          className="flex text-lg items-center border rounded-b-lg p-3"
        >
          <FaInstagram className="mr-3"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>
      {/* Q Zone */}
      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-4 font-poppins font-bold">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
