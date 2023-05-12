import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_one">
        <h3>Mariachi</h3>
        <p>
          Definition and Usage. The lorem tag inserts a specified amount of
          random text. The "random" text is the famous "Lorum ipsum" text, in
          lower case letters.
        </p>
        <div className="iocns">
          <button>
            <FaFacebookF />
          </button>
          <button>
            <BsInstagram />
          </button>
          <button>
            <AiOutlineTwitter />
          </button>
          <button>
            <IoLogoWhatsapp />
          </button>
        </div>
      </div>
      <div className="footer_two">
        <ul>
          <li>
            <h3>About</h3>
            <p>History</p>
            <p>Our Team</p>
            <p>Brand Guideline</p>
            <p>Terms & condition</p>
            <p>Privacy Policy</p>
          </li>
          <li>
            <h3>Services</h3>
            <p>How to Orders</p>
            <p>Our Product</p>
            <p>Offers</p>
            <p>Promos</p>
            <p>Payment Method</p>
          </li>
          <li>
            <h3>Other</h3>
            <p>Contact Us</p>
            <p>Help</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
