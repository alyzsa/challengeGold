import React from "react";
import { Button } from "reactstrap";

export default function Banner() {
  return (
    <div className="BannerContainer">
      <div style={{ margin: "100px", color: "white" }}>
        <div className="text-banner">
          <h2>Sewa Mobil di Lampung Sekarang!</h2>
          <br />
          <p style={{ color: "white", fontSize: "14px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod
          </p>
          <Button color="success" style={{ margin: "0 auto" }}>
            Mulai Sewa Mobil
          </Button>
        </div>
      </div>
    </div>
  );
}
