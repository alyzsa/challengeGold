import MyForm from "../../../components/form";
import User from "../../../assets/fi_users.svg";
import Footer from "../../landingPage/sections/footer";
import { Fragment, useState } from "react";
import {
  Button,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { API } from "../../../common/API";

export default function SearchSection() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmited] = useState(false);
  const [dataDetail, setDataDetail] = useState(null);
  const formatToIDR = (idr) => {
    const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return `${"Rp "}${parsed}`;
  };

  const fetchDataDetail = (id) => {
    setIsLoading(true);
    API.get(`admin/car/${id}`)
      .then((res) => {
        console.log("data car:", res.data);
        setDataDetail(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const getCategoryDescription = (category) => {
    let description = "";
    if (category === "small") {
      description = "2-4 Orang";
    } else if (category === "medium") {
      description = "4-6 Orang";
    } else if (category === "large") {
      description = "6-8 Orang";
    } else if (category === "2-4 orang") {
      description = "2-4 Orang";
    } else if (category === "4-6 orang") {
      description = "4-6 Orang";
    } else if (category === "6-8 orang") {
      description = "6-8 Orang";
    }

    return <CardText>{description}</CardText>;
  };

  console.log(data);
  return (
    <div>
      <MyForm
        setData={setData}
        setIsLoading={setIsLoading}
        setIsSubmited={setIsSubmited}
      />
      <div style={{ marginTop: "50px" }} />

      {!dataDetail && (
        <section
          className="display-car-section"
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "50px",
            marginRight: "50px",
          }}
        >
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {data.map((car) => (
                <Fragment key={car.id}>
                  <Col md={4}>
                    <Card
                      style={{
                        marginTop: "30px",
                        marginLeft: "25px",
                        width: "333px",
                        height: "478px",
                      }}
                    >
                      <img alt={car.name} src={car.image} />
                      <CardBody>
                        <CardTitle tag="h5">{car.name}</CardTitle>
                        <CardText>{formatToIDR(car.price)} / hari</CardText>
                        <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </CardText>
                        <Button
                          color="success"
                          style={{ width: "100%" , marginTop:"5%"}}
                          onClick={() => {
                            setIsSubmited(false);
                            setIsLoading(false);
                            setData([]);
                            fetchDataDetail(car.id);
                          }}
                        >
                          Pilih Mobil
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Fragment>
              ))}
            </>
          )}
        </section>
      )}

      {dataDetail && (
        <section
          id="detail-car"
          style={{ marginBottom: "50px", marginLeft: "210px" }}
        >
          <Row>
            <Col md={6}>
              <Card className="custom-card"> 
                <CardBody>
                  <CardTitle tag="h5">Tentang Paket</CardTitle>
                  <CardText tag="h6">
                    <strong>Include</strong>
                  </CardText>
                  <ul style={{ color: "#8a8a8a", fontSize: "14px" }}>
                    <li>
                      Apa saja yang termasuk dalam paket misal durasi max 12 jam
                    </li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                  <CardText tag="h6">
                    <strong>Exclude</strong>
                  </CardText>
                  <ul style={{ color: "#8a8a8a", fontSize: "14px" }}>
                    <li>Tidak termasuk biaya makan sopir Rp75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                  <CardText tag="h6">
                    <strong>Refund, Reschedule, Overtime</strong>
                  </CardText>
                  <ul style={{ color: "#8a8a8a", fontSize: "14px" }}>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col md={6} style={{ width: "405px", height: "435px" }}>
              <Card>
                <img src={dataDetail.image} alt={dataDetail.name} />
                <CardBody>
                  <CardTitle tag="h5">{dataDetail.name}</CardTitle>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={User}
                      alt="User"
                      style={{
                        width: "10px",
                        height: "10px",
                        marginRight: "10px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#8A8A8A",
                      }}
                    >
                      {getCategoryDescription(dataDetail.category)}
                    </span>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ fontWeight: "bold" }}>Total</span>
                    <span style={{ fontWeight: "bold" }}>
                      {formatToIDR(dataDetail.price)}
                    </span>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>
      )}

      <div style={{ marginTop: "50px" }} />
      <Footer />
    </div>
  );
}
