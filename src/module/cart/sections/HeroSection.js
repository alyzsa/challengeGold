import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import CarImage from "../../../assets/img_car.png";

export default function HeroSection() {
  return (
    <Container fluid>
      <Row className="hero-container">
        <Col sm={12} md={6} className="hero-content-section">
          <h1
            className="hero-section-text-title"
            style={{ marginLeft: "100px" }}
          >
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <p
            className="hero-section-text-description"
            style={{ marginLeft: "100px" }}
          >
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <Button color="success" style={{ marginLeft: "100px" }}>
            Mulai Sewa Mobil
          </Button>
        </Col>
        <Col sm={12} md={6} className="hero-image-section">
          <img
            src={CarImage}
            width={"100%"}
            className="image-car"
            alt="image_car"
          />
        </Col>
      </Row>
    </Container>
  );
}
