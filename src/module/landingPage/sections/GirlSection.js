import React from "react";
import { Container } from "reactstrap";
import GirlImage from "../../../assets/img_service.png";
import Checklist from "../../../assets/Checklist.svg";

export default function GirlSection() {
  return (
    <Container fluid className="girl-section-container">
      <div className="girl-section-image">
        <img
          src={GirlImage}
          width={"70%"}
          className="image-service"
          alt="image_service"
        />
      </div>
      <div className="girl-section-content">
        <h4>Best Car Rental for any kind of trip in Lampung</h4>
        <p>
          Sewa Mobil di Lampung bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <div className="service-list">
          {serviceList.map((val, idx) => (
            <div key={idx} className="service-item">
              <img
                src={Checklist}
                alt="image_checklist"
                className="checklist-image"
              />
              <p>{val}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

const serviceList = [
  "Sewa Mobil Dengan Supir di Bali 12 Jam",
  "Sewa Mobil Lepas Kunci di Bali 24 Jam",
  "Bawa Mobil Jangka Panjang Bulanan",
  "Gratis Antar - Jemput Mobil di Bandara",
  "Layanan Airport Transfer Drop In Out",
];
