import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          ZeeCare Hospital is a state-of-the-art healthcare facility dedicated to offering comprehensive medical services with compassion and expertise. Our team of highly skilled professionals is committed to providing personalized care tailored to meet the unique needs of every patient. At ZeeCare Hospital, your well-being is our priority, and we strive to ensure a seamless and supportive journey towards achieving optimal health and wellness.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;