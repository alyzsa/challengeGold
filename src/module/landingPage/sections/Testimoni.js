import React from "react";
import imgMan from "../../../assets/img_photo.svg";
import imgGirl from "../../../assets/img_photo (1).svg";
import Rate from "../../../assets/Rate.svg";

export default function Testimoni() {
  const testiData = [
    {
      icon: Rate,
      profile: imgGirl,
      title:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
      desc: "John Dee 32, Bromo",
    },
    {
      icon: Rate,
      profile: imgMan,
      title:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
      desc: "John Dee 32, Bromo",
    },
    {
      icon: Rate,
      profile: imgGirl,
      title:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
      desc: "John Dee 32, Bromo",
    },
  ];

  return (
    <div>
      <h2 className="testi-heading">Testimonial</h2>
      <div className="testi-desc">
        Berbagai review positif dari para pelanggan kami
      </div>

      <div className="testi-container">
        {testiData.map(({ icon: Icon, profile, title, desc }, idx) => (
          <div
            className="card"
            key={idx}
            style={{ backgroundColor: "#F1F3FF" }}
          >
            <div className="card-content">
              <img className="profile-image" src={profile} alt="profile" />
              <div className="text-content">
                <img className="icon" src={Icon} alt="icon" />
                <p className="card-title">{title}</p>
                <p className="card-text">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
