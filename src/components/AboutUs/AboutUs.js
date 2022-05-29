import React from "react";
import about_us from "../../Images/Img/about-us.webp";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold pt-8">About Us</h1>
      <div className="hero py-6">
        <div className="hero-content flex-col lg:flex-row">
          <img style={{ width: "510px" }} src={about_us} alt="about_us" />
          <div>
            <p className="px-6">
              Ozar Tools, the global tool brand from the house of Alok
              International Pvt. Ltd., is a world-renowned high-quality In house
              Tools manufacturing company in India. It’s an ISO 9001:2015
              certified company Headquartered in Gurugram, Haryana INDIA. We are
              a leading supplier of ever-increasing “range” of high-quality
              tools used in a variety of markets and applications throughout the
              world. Enterprise is serving the market for last 40 years. We are
              fortunate to win the trust of millions of users worldwide with an
              incessant zeal for innovation, upgradation, new technology
              applications and quality-quotient enhancement. Throughout the
              years, we have seen many changes and tailored our business model
              to accommodate them. One thing that hasn’t changed is our
              commitment to the quality tools manufacturing which has become the
              unmatched USP. Our continued focus on expertise and service are
              the foundation of our success. Our products are known for
              consistent, quality manufacturing and performance that outlasts
              competitors. Ozar’s strong Manufacturing Program is well supported
              by implemented 5S and lean management system. An overall ecosystem
              is well complemented by aggressive, modern marketing techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
