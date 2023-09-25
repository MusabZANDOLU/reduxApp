import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseItem from "./CourseItem";
import { clearCart } from "../control/cartSlice";

function CourseList() {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <>
      {quantity < 1 ? (
        <section>
          <header>
            <h2>Sepetim</h2>
            <h4>Bomboş</h4>
          </header>
        </section>
      ) : (
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <header>
            <h2>Sepetim</h2>
          </header>
          <div>
            {cartItems.map((item, index) => {
              return <CourseItem key={index} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>Toplam Tutar</h4>
              <span>{total} TL</span>
            </div>
            <button onClick={() => dispatch(clearCart())}>Temizle</button>
          </footer>
        </section>
      )}
    </>
  );
}

export default CourseList;
