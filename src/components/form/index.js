import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { API } from "../../../src/common/API";

function MyForm(props) {
  const [nameCar, setNameCar] = useState("");
  const [category, setCategory] = useState("");
  const [isRented, setIsRented] = useState(false);
  const [price, setPrice] = useState("");

  const fetchData = () => {
    const params = `name=${nameCar}&category=${category}&isRented=${isRented}&price=${price}`;
    API.get(`admin/v2/car?${params}&page=1&pageSize=10`)
      .then((res) => {
        props.setData(res.data.cars);
      })
      .catch((err) => {
        console.log("err:", err);
      })
      .finally(() => {
        props.setIsLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setIsSubmited(true);
    props.setIsLoading(true);
    fetchData();
  };

  const mappingPrice = (price) => {
    switch (price) {
      case "low":
        return "minPrice=0&maxPrice=400000";
      case "medium":
        return "minPrice=400000&maxPrice=600000";
      case "high":
        return "minPrice=600000&maxPrice=1000000";
      default:
        return "";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "1047px",
          height: "106px",
          position: "static",
          borderRadius: "8px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 0px 10px 0px #00000026",
        }}
      >
        <Form style={{ display: "flex", gap: "8px" }} onSubmit={handleSubmit}>
          <FormGroup
            style={{
              width: "208px",
              height: "36px",
              padding: "9px 12px",
              borderRadius: "2px",
            }}
          >
            <Label for="namaMobil">Nama Mobil</Label>
            <Input
              id="namaMobil"
              name="nama"
              placeholder="Ketik nama/tipe mobil"
              type="text"
              value={nameCar}
              onChange={(e) => setNameCar(e.target.value)}
            />
          </FormGroup>
          <FormGroup
            style={{
              width: "208px",
              height: "36px",
              padding: "9px 12px",
              borderRadius: "2px",
            }}
          >
            <Label for="kategori">Kategori</Label>
            <Input
              id="kategori"
              name="select"
              type="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option hidden>Masukkan Kapasitas Mobil</option>
              <option value="small">2 - 4 Orang</option>
              <option value="medium">4 - 6 Orang</option>
              <option value="large">6 - 8 Orang</option>
            </Input>
          </FormGroup>
          <FormGroup
            style={{
              width: "208px",
              height: "36px",
              padding: "9px 12px",
              borderRadius: "2px",
            }}
          >
            <Label for="harga">Harga</Label>
            <Input
              id="harga"
              name="select"
              type="select"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option hidden>Masukkan harga sewa per hari</option>
              <option value="low"> Rp400.000</option>
              <option value="medium">Rp400.000-Rp600.000</option>
              <option value="large">Rp600.000</option>
            </Input>
          </FormGroup>
          <FormGroup
            style={{
              width: "208px",
              height: "36px",
              padding: "9px 12px",
              borderRadius: "2px",
            }}
          >
            <Label for="status">Status</Label>
            <Input
              id="status"
              name="select"
              type="select"
              value={isRented}
              onChange={(e) => setIsRented(e.target.value)}
            >
              <option>Disewa</option>
            </Input>
          </FormGroup>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              color="success"
              style={{ width: "92px", height: "36px", marginLeft: "8px" }}
              type="submit"
              onClick={() => {
                props.setIsSubmited(false);
                props.setData([]);
              }}
            >
              Cari
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default MyForm;
