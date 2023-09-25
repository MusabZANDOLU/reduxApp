import React from "react";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../control/cartSlice";

function CourseItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <img src={img} />
      <div>
        <h4>{title}</h4>
        <h4>{price} TL</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            style={{ background: "none" }}
            onClick={() => dispatch(increase(id))}
          >
            <BsChevronUp />
          </button>
          <p>{quantity}</p>
          <button
            style={{ background: "none" }}
            onClick={() => dispatch(decrease(id))}
          >
            <BsChevronDown />
          </button>
        </div>
        <button
          style={{ marginBottom: "20px", marginTop: "5px" }}
          onClick={() => dispatch(removeItem(id))}
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default CourseItem;
