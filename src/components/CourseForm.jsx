import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeDesc, changeCost } from "../store/slices/formSlice";
import { addCourse } from "../store/slices/courseSlice";

function CourseForm() {
  const dispatch = useDispatch();
  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCourse({ name, description, cost }));
  };

  return (
    <div className="courseForm panel">
      <h2 className="subTitle is-3">Kurs Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div
          className="field-group"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div className="field">
            <label className="label">Ad</label>
            <input
              className="'input is-expended"
              onChange={(e) => {
                dispatch(changeName(e.target.value));
              }}
              value={name}
            />
          </div>
          <div className="field">
            <label className="label">Açıklama</label>
            <textarea
              className="'input is-expended"
              onChange={(e) => {
                dispatch(changeDesc(e.target.value));
              }}
              value={description}
            />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input
              type="number"
              className="'input is-expended"
              onChange={(e) => {
                dispatch(changeCost(parseInt(e.target.value)));
              }}
              value={cost}
            />
          </div>
          <div className="field">
            <button className="button is-primary">Kaydet</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
