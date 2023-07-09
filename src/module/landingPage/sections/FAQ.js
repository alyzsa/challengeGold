import React from "react";
import {
  Container,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  Dropdown,
} from "reactstrap";

export default function FAQ() {
  return (
    <Container fluid>
      <Row className="FAQ-container">
        <Col sm={12} md={6} className="FAQ-content-section">
          <h4
            className="FAQ-section-text-title"
            style={{ marginLeft: "5%", fontWeight: "bold" }}
          >
            Frequently Asked Question
          </h4>
          <p
            className="hero-section-text-description"
            style={{ marginLeft: "5%" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod
          </p>
        </Col>
        <Col sm={12} md={6} className="text-right">
          <UncontrolledDropdown>
            <DropdownToggle
              caret
              color="#D4D4D4"
              style={{
                outline: "1px solid",
                borderColor: "#D4D4D4",
                marginRight: "100px",
                marginLeft: "5%",
                width: "80%",
                textAlign: "left",
              }}
              className="dropdown-toggle-right" // Added class for dropdown toggle
            >
              Apa saja syarat yang dibutuhkan?
            </DropdownToggle>
            <>
              <Dropdown direction="down" className="dropdown-item">
                <DropdownToggle
                  caret
                  color="#D4D4D4"
                  style={{
                    outline: "1px solid",
                    borderColor: "#D4D4D4",
                    marginTop: "10px",
                    marginRight: "100px",
                    marginLeft: "5%",
                    width: "80%",
                    textAlign: "left",
                  }}
                  className="dropdown-toggle-right"
                >
                  Berapa hari minimal sewa mobil lepas kunci?
                </DropdownToggle>
              </Dropdown>
              <Dropdown direction="down" className="dropdown-item">
                <DropdownToggle
                  caret
                  color="#D4D4D4"
                  style={{
                    outline: "1px solid",
                    borderColor: "#D4D4D4",
                    marginTop: "10px",
                    marginRight: "100px",
                    marginLeft: "5%",
                    width: "80%",
                    textAlign: "left",
                  }}
                  className="dropdown-toggle-right"
                >
                  Berapa hari sebelumnya sebaiknya booking sewa mobil?
                </DropdownToggle>
              </Dropdown>
              <Dropdown direction="down" className="dropdown-item">
                <DropdownToggle
                  caret
                  color="#D4D4D4"
                  style={{
                    outline: "1px solid",
                    borderColor: "#D4D4D4",
                    marginTop: "10px",
                    marginRight: "100px",
                    marginLeft: "5%",
                    width: "80%",
                    textAlign: "left",
                  }}
                  className="dropdown-toggle-right"
                >
                  Apakah ada biaya antar-jemput?
                </DropdownToggle>
              </Dropdown>
              <Dropdown direction="down" className="dropdown-item">
                <DropdownToggle
                  caret
                  color="#D4D4D4"
                  style={{
                    outline: "1px solid",
                    borderColor: "#D4D4D4",
                    marginTop: "10px",
                    marginRight: "100px",
                    marginLeft: "5%",
                    width: "80%",
                    textAlign: "left",
                  }}
                  className="dropdown-toggle-right"
                >
                  Bagaimana jika terjadi kecelakaan
                </DropdownToggle>
              </Dropdown>
            </>
          </UncontrolledDropdown>
        </Col>
      </Row>
    </Container>
  );
}
