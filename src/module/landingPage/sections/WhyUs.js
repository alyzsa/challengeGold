import React from "react";
import iconComplete from "../../../assets/icon_complete.svg";
import iconPrice from "../../../assets/icon_price.svg";
import icon24h from "../../../assets/icon_24hrs.svg";
import iconProfessional from "../../../assets/icon_professional.svg";

export default function WhyUs() {
  const whyUsData = [
    {
      icon: iconComplete,
      title: "Mobil Lengkap",
      desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih, dan terawat",
    },
    {
      icon: iconPrice,
      title: "Harga Murah",
      desc: "Harga murah dan bersaing, bisa dibandingkan harga kami dengan rental mobil lain",
    },
    {
      icon: icon24h,
      title: "Layanan 24 Jam",
      desc: "Siap melayani kebutuhan Anda selama 24 Jam nonstop. Kami juga tersedia di akhir minggu",
    },
    {
      icon: iconProfessional,
      title: "Sopir Profesional",
      desc: "Sopir yang profesional, berpengalaman, jujur, ramah, dan selalu tepat waktu",
    },
  ];

  return (
    <div className="why-us-container">
      <h2 className="why-us-title">Why Us?</h2>
      <div className="why-us-question">
        Mengapa harus pilih Binar Car Rental?
      </div>

      <div className="why-us-cards">
        {whyUsData.map(({ icon, title, desc }, idx) => (
          <div className="why-us-card card" key={idx}>
            <img className="why-us-icon" src={icon} alt="icon" />
            <div className="why-us-card-body card-body">
              <h4 className="why-us-card-title card-title">{title}</h4>
              <p className="why-us-card-desc card-text">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
