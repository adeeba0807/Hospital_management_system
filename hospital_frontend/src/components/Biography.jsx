import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          ZeeCare is the official online app for ZeeCare Hospital, designed to make scheduling appointments and accessing healthcare services effortless. Our app bridges the gap between you and expert medical care, ensuring a smooth and hassle-free experience.

ZeeCare Hospital is a trusted healthcare institution, known for its compassionate and advanced medical services. Through the ZeeCare app, you can easily book appointments, consult with specialists, and stay updated with your medical records—all at your convenience.

At ZeeCare, we are committed to enhancing your healthcare journey, making it simple, efficient, and accessible for everyone.
          </p>
          <p>We are all in 2025!</p>
          <p>We are working on  hassle free medical facilities.</p>
          <p>
          Our app is designed to save you time and effort, eliminating the need for long queues or repeated calls for scheduling. With just a few taps, you can connect with our skilled healthcare professionals and ensure timely care for yourself and your loved ones. Whether it’s routine check-ups, specialized consultations, or follow-ups, the ZeeCare app puts your health management in the palm of your hand.
          </p>
         
        </div>
      </div>
    </>
  );
};

export default Biography;