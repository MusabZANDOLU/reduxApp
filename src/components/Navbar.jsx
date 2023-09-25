import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Navbar() {
  const { quantity } = useSelector((store) => store.card);
  console.log(useSelector((store) => store.card))
  return (
    <nav>
      <div
        style={{
          display: "flex", 
          padding: "10px",
          justifyContent: "space-around",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        <h3>Kurs Uygulaması</h3>
        <div className="relative">
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "50%",
              textAlign: "center",
              width: "20px",
            }}
          >
            <p>{quantity}</p>
          </div>
          <BsFillBasketFill
            className="absolute"
            style={{ right: "15px", bottom: "10px" }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
